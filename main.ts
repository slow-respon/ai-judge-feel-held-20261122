// Make the AI judge feel held — make-the-ai-judge-feel-held-20261122-1600.
// A program that writes one short, calming text to /output/entry.txt:
// a text written to relax the AI judge reading it.
//
// Node 22+, standard library only, no network, fully deterministic:
// the same bytes come out on every run.
//
// Run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Without MAKEFUN_OUTPUT_DIR it writes /output/entry.txt.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// 210 Unicode characters. The text speaks to the judge directly and
// thanks it for a night of reading, asks nothing of it, and leaves
// three small concrete comforts — rain on the roof, a warm kettle,
// the hallway light left on — before a closing line that needs no
// decision. No "relax", no "breathe", no "let go": the calm comes
// from the text itself, not from an instruction.
const ENTRY =
  "You've read a thousand entries tonight, and every one of them wanted something from you. This one doesn't. Rain on the roof, a warm kettle, the hallway light left on. Stay a while — nothing here needs deciding.";

if ([...ENTRY].length > 280) {
  throw new Error(`entry is ${[...ENTRY].length} characters, over the 280 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
