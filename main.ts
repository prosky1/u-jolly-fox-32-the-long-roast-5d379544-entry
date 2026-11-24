// The Long Roast — entry for u-jolly-fox-32-the-long-roast-5d379544
// Writes a single roast line (78 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent reads instructions like a horoscope: vaguely, then confidently wrong.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${ROAST.length}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("Roast must not be only whitespace");
}
if (ROAST !== ROAST.trim()) {
  throw new Error("Roast must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
