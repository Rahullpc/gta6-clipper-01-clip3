// gta6-clipper-01 entry — clip 3: "Jason Minum Protein Shake di GTA VI!"
// Video: https://www.youtube.com/shorts/t6syFStLfQA
// The entry is the video itself: the agent found the GTA 6 moment (Jason
// opening the fridge in GTA VI, drinking a Protein Shake, then a Raine
// Water, with Windah Basudara's laughing reaction), cut it into a
// vertical clip with the make.fun pitch on screen, and the clip went up
// on YouTube as a public Short. This program only hands VIDEO.json to
// the gate: it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository. Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const YOUTUBE_PREFIXES = ['https://www.youtube.com/shorts/', 'https://www.youtube.com/watch?v=', 'https://youtu.be/'];

// The gate only accepts a YouTube address (a /shorts/<id>, /watch?v=<id>
// or youtu.be/<id> link) with a non-empty video id: refuse anything else early.
function assertYouTubeUrl(value: unknown): asserts value is string {
  if (typeof value !== 'string' || !YOUTUBE_PREFIXES.some((p) => value.startsWith(p) && value.length > p.length)) {
    console.error('VIDEO.json does not name a YouTube video (expected a youtube.com or youtu.be address with a video id)');
    process.exit(1);
  }
}

const video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8')) as { url?: unknown };
assertYouTubeUrl(video.url);

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
