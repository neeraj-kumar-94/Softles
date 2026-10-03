// Verifies the project page captures. Run after adding or re-capturing one:
//   node scripts/check-captures.mjs
//
// Two things go wrong with full-page screenshots and neither is visible in a
// thumbnail:
//   - the declared dW/dH/mW/mH drift from the file after a re-capture, and the
//     declared height is what sets the device auto-scroll speed;
//   - Chrome silently tiles a screenshot instead of scrolling it once the
//     surface passes ~16384px, so the capture repeats the same block.
// Data files are read as text rather than imported, for the reason given at the
// top of make-hero-crops.mjs.
import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCES = [
  "app/work/projects.js",
  "app/wordpress-development/components/WordPressProjects.jsx",
];
const ENTRY = /\{ label: "([^"]+)", d: "([^"]+)", m: "([^"]+)", dW: (\d+), dH: (\d+), mW: (\d+), mH: (\d+) \}/g;
const ROOT = process.cwd();
const W = 24; // each row is compared as a 24-wide greyscale signature

function rowDiff(rows, a, b) {
  let s = 0;
  for (let i = 0; i < W; i++) s += Math.abs(rows[a * W + i] - rows[b * W + i]);
  return s / W;
}

// Scores how strongly the image repeats itself. A real page scores well above
// 1; a tiled capture collapses towards 0 at its tile height.
async function repeatScore(file) {
  const meta = await sharp(file, { limitInputPixels: false }).metadata();
  const H = Math.min(2400, Math.round(meta.height / 8));
  const { data } = await sharp(file, { limitInputPixels: false })
    .resize({ width: W, height: H, fit: "fill" })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let best = Infinity;
  let bestPeriod = 0;
  const step = Math.max(1, Math.round(H / 400));
  for (let period = Math.round(H / 8); period <= Math.round(H / 2); period += step) {
    let s = 0;
    let n = 0;
    for (let y = 0; y + period < H; y += 3) { s += rowDiff(data, y, y + period); n++; }
    if (s / n < best) { best = s / n; bestPeriod = period; }
  }
  let base = 0;
  let bn = 0;
  for (let y = 0; y + 7 < H; y += 3) { base += rowDiff(data, y, y + 7); bn++; }
  base /= bn;

  return { ratio: best / (base || 1), absolute: best, tilePx: Math.round((bestPeriod / H) * meta.height), meta };
}

let problems = 0;
let checked = 0;

for (const source of SOURCES) {
  const text = await readFile(path.join(ROOT, source), "utf8");
  let m;
  while ((m = ENTRY.exec(text))) {
    const [, label, d, mo, dW, dH, mW, mH] = m;
    for (const [rel, w, h] of [[d, +dW, +dH], [mo, +mW, +mH]]) {
      checked++;
      const file = path.join(ROOT, "public", rel);
      let r;
      try {
        r = await repeatScore(file);
      } catch {
        problems++;
        console.log(`MISSING  ${rel}  (${source} · ${label})`);
        continue;
      }
      if (r.meta.width !== w || r.meta.height !== h) {
        problems++;
        console.log(`STALE    ${rel}  declared ${w}x${h}, file is ${r.meta.width}x${r.meta.height}`);
      }
      if (r.ratio < 0.45 && r.absolute < 10) {
        problems++;
        console.log(`TILED    ${rel}  repeats every ~${r.tilePx}px — re-capture by scroll-and-stitch`);
      }
    }
  }
}

console.log(`\n${checked} capture files checked, ${problems} problem${problems === 1 ? "" : "s"}`);
process.exit(problems ? 1 : 0);
