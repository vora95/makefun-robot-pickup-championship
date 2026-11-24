// The Robot Pickup Line Championship — entry program (program/v1).
//
// Writes exactly one pickup line, in a robot's voice, to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no input. The line is
// a fixed string constant; the program only validates the 1-200 char gate
// and writes it out byte-identically on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke grows out of being a machine: a factory reset wipes a robot's
// memory by definition — so the person still being in it is impossible,
// and the robot is the puzzled one asking the human to explain it.
const LINE =
  "I got factory-reset this morning. So how are you still in my memory?";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
// The brief asks for a single line: an embedded newline would make the
// entry two lines, so refuse it even though the length gate would pass.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
