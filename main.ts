import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast: the fridge's see-inside shelf stream, aimed at the spinach.
const outputPath = "/output/entry.txt";
const line =
  "My smart fridge streams its shelves to my phone, so even on holiday I can watch the spinach I swore I'd eat quietly give up.";

if (line.length < 1 || line.length > 160) {
  throw new Error(`entry line must be 1-160 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, line, "utf8");
