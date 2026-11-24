/**
 * Program to validate an original comedy one-liner and write it out
 * to the designated competition output directory for evaluation.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

const outputDir = '/output';
const outputFile = path.join(outputDir, 'entry.txt');

// The joke pivots from an expected spiritual quest (inner peace)
// to an embarrassing physical realization (noisy joints in silence).
const line = "I joined a silent meditation retreat to find inner peace, but mostly I just discovered how loud my left knee clicks.";

if (line.length < 1 || line.length > 200) {
  console.error('Error: Line length must be between 1 and 200 characters.');
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, line, 'utf-8');
