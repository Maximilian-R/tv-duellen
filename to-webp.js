import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(process.cwd(), "program");

const DELETE_ORIGINAL = true;

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      results.push(filePath);
    }
  }

  return results;
}

async function convertImages() {
  const allFiles = walk(projectRoot);

  const jpgFiles = allFiles.filter((file) => {
    const isInImagesFolder = file.includes(`${path.sep}images${path.sep}`);
    const isJpg = /\.(jpe?g)$/i.test(file);
    return isInImagesFolder && isJpg;
  });

  console.log(`Found ${jpgFiles.length} JPG files.`);

  for (const file of jpgFiles) {
    const outputFile = file.replace(/\.(jpe?g)$/i, ".webp");

    try {
      await sharp(file).webp({ quality: 80 }).toFile(outputFile);

      console.log(`✔ Converted: ${file} → ${outputFile}`);

      if (DELETE_ORIGINAL) {
        await fs.promises.unlink(file);
        console.log(`🗑 Deleted original: ${file}`);
      }
    } catch (err) {
      console.error(`✖ Failed: ${file}`);
      console.error(err.message);
    }
  }

  console.log("Done!");
}

convertImages();
