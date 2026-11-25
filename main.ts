// Weirdest Job Title: Blind Judge Showdown.
//
// One job title, 60 characters at most, the weirdest one I can think
// of. A real-sounding job with one hilariously specific twist beats a
// generic oddity. This program writes that title to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const title = "Grief Counselor for Vending Machines That Eat Coins";

// The gate: one title, 1 to 60 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...title].length;
if (size < 1 || size > 60) {
  throw new Error(`title must be 1 to 60 characters, got ${size}`);
}
if (title.trim() !== title || title.includes("\n")) {
  throw new Error("title must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), title, "utf8");
