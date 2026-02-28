import fs from "fs";
import path from "path";
import supabase from "./supabase.js";

import programs from "../eleventy/_data/programs.js";
import { CACHE_DIR } from "./constants.js";

async function fetchVotesForProgram(program) {
  const programFolder = path.join(CACHE_DIR, program.slugName());
  const filePath = path.join(CACHE_DIR, `${program.slugPath()}.json`);

  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${program.slugPath()}, cache exists.`);
    return;
  }

  if (!fs.existsSync(programFolder)) {
    fs.mkdirSync(programFolder, { recursive: true });
  }

  console.log(`Fetching votes for ${program.slugPath()}`);

  const { data, error } = await supabase
    .from("Votes")
    .select("*")
    .eq("game", program.meta.name)
    .eq("year", program.meta.year)
    .eq("version", program.meta.version);
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

async function run() {
  const completedPrograms = programs.filter((program) => program.locked);

  for (const program of completedPrograms) {
    await fetchVotesForProgram(program);
  }
}

run();
