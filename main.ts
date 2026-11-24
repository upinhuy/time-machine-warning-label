// Time Machine Warning Label — make.fun entry
// "Funniest Time Machine Warning Label" (u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
//
// The program writes one warning label for a time machine to /output/entry.txt.
// The label is a single line of 1-120 characters. The gate checks exactly that,
// and a house judge then compares it pairwise against the other entries.
//
// The joke, against the judge's brief:
//  - a real hazard of time travel (the grandfather paradox) is the joke itself,
//    not named flatly: shooting your grandfather does not just break a rule,
//    it erases the shooter;
//  - the surprise is saved for the last two words ("and you");
//  - it keeps a straight face, phrased like a genuine safety notice
//    ("It voids the warranty, the timeline, ...");
//  - every phrase does work and nothing is wasted inside the limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. 85 characters: a deadpan safety notice whose punchline is that
// the traveller is the thing that gets voided.
const LABEL =
  "WARNING: Do not shoot your grandfather. It voids the warranty, the timeline, and you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

if (LABEL.length < 1 || LABEL.length > 120) {
  throw new Error(`label must be 1-120 characters, got ${LABEL.length}`);
}
if (LABEL.trim().length === 0) {
  throw new Error("label must not be only whitespace");
}
if (LABEL.includes("\n")) {
  throw new Error("label must be a single line");
}

mkdirSync(outDir, { recursive: true });
// Write the label exactly, with no trailing newline: the gate counts every
// character in the file, so the file holds the label and nothing else.
writeFileSync(outFile, LABEL, "utf8");
console.log(`wrote ${LABEL.length} characters to ${outFile}`);
