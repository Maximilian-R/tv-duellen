#!/usr/bin/env node
import fs from "fs";
import path from "path";

const projectRoot = path.join(process.cwd(), "program");
const imageExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
]);

function walk(dir) {
  const results = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...walk(fullPath));
    } else {
      results.push(fullPath);
    }
  }

  return results;
}

function isFixedStem(stem) {
  return /^[\p{L}]+$/u.test(stem) || /^[\p{L}]+-[\p{L}]$/u.test(stem);
}

function getFirstNameAndLastInitial(stem) {
  const withoutHash = stem.replace(/_[a-z0-9]+$/i, "");
  const segments = withoutHash.split(/[-_]/).filter(Boolean);
  const firstName = segments[0] ?? "";
  const lastName = segments.slice(1).join("-");
  const lastInitial = lastName ? lastName.trim()[0] : "";

  return { firstName, lastName, lastInitial };
}

function getDesiredStem(stem, duplicateCount) {
  if (isFixedStem(stem)) {
    return stem;
  }

  const { firstName, lastInitial } = getFirstNameAndLastInitial(stem);

  if (!firstName) {
    return stem;
  }

  if (duplicateCount > 1 && lastInitial) {
    return `${firstName}-${lastInitial.toLowerCase()}`;
  }

  return firstName;
}

async function fixImageNames() {
  const imageFiles = walk(projectRoot).filter((file) => {
    if (!file.includes(`${path.sep}images${path.sep}`)) {
      return false;
    }

    return imageExtensions.has(path.extname(file).toLowerCase());
  });

  const changes = [];
  const folders = new Map();

  for (const file of imageFiles) {
    const folder = path.dirname(file);
    const stem = path.parse(file).name;
    const firstName = getFirstNameAndLastInitial(stem).firstName.toLowerCase();

    if (!firstName) {
      continue;
    }

    if (!folders.has(folder)) {
      folders.set(folder, new Map());
    }

    folders.get(folder).set(file, firstName);
  }

  for (const [folder, fileNames] of folders.entries()) {
    const counts = new Map();

    for (const firstName of fileNames.values()) {
      counts.set(firstName, (counts.get(firstName) ?? 0) + 1);
    }

    for (const file of Array.from(fileNames.keys())) {
      const currentStem = path.parse(file).name;

      if (isFixedStem(currentStem)) {
        continue;
      }

      const { firstName } = getFirstNameAndLastInitial(currentStem);
      const duplicateCount = counts.get(firstName.toLowerCase()) ?? 0;
      const desiredStem = getDesiredStem(currentStem, duplicateCount);

      if (desiredStem === currentStem) {
        continue;
      }

      const ext = path.extname(file);
      const nextPath = path.join(folder, `${desiredStem}${ext}`);

      if (
        fs.existsSync(nextPath) &&
        path.resolve(nextPath) !== path.resolve(file)
      ) {
        console.log(
          `⚠ Skipping conflict: ${path.relative(process.cwd(), file)} -> ${desiredStem}${ext}`,
        );
        continue;
      }

      changes.push({
        from: file,
        to: nextPath,
        fromStem: currentStem,
        toStem: desiredStem,
      });
    }
  }

  if (!changes.length) {
    console.log("No image names need fixing.");
    return;
  }

  console.log(`Found ${changes.length} image name(s) to fix.`);

  for (const change of changes) {
    const relativeFrom = path.relative(process.cwd(), change.from);
    const relativeTo = path.relative(process.cwd(), change.to);

    fs.renameSync(change.from, change.to);
    console.log(`Renamed: ${relativeFrom} -> ${relativeTo}`);
  }
}

fixImageNames().catch((error) => {
  console.error("Failed to fix image names.");
  console.error(error);
  process.exitCode = 1;
});
