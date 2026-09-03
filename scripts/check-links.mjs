#!/usr/bin/env node
/**
 * Prueft alle internen Links der Wissensbasis gegen den gebauten Output.
 *
 * Bewusst gegen dist/ statt gegen die Quelldateien: Damit wird die Wirkung
 * geprueft (existiert die Seite wirklich?) und nicht die Form (sieht der
 * Pfad plausibel aus?). Slug-Auflösung von Starlight nachzubauen waere
 * genau die Art Quelltext-Waechter, die in beide Richtungen danebengeht.
 *
 * Exit 0 = keine toten Ziele · 1 = tote Ziele gefunden · 2 = kein Build da
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import * as path from 'node:path';

const DOCS = 'src/content/docs';
const DIST = 'dist';

if (!existsSync(DIST)) {
  console.error('Kein dist/ gefunden — bitte zuerst "npm run build" ausfuehren.');
  process.exit(2);
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir)) {
    const full = path.join(dir, entry);
    if ((await stat(full)).isDirectory()) out.push(...(await walk(full)));
    else if (/\.mdx?$/.test(entry)) out.push(full);
  }
  return out;
}

// [text](ziel) sowie href="ziel"
const PATTERNS = [/\[[^\]]*\]\(([^)\s]+)\)/g, /href="([^"]+)"/g];
const EXTERNAL = /^(https?:|mailto:|tel:|data:|\/\/)/;

const anchorCache = new Map();
async function hasAnchor(htmlPath, anchor) {
  if (!anchorCache.has(htmlPath)) {
    anchorCache.set(htmlPath, await readFile(htmlPath, 'utf8'));
  }
  return anchorCache.get(htmlPath).includes(`id="${anchor}"`);
}

const findings = [];
let checked = 0;

for (const file of await walk(DOCS)) {
  const rel = path.relative(DOCS, file);
  const baseDir = '/' + path.dirname(rel).replace(/^\.$/, '');
  const lines = (await readFile(file, 'utf8')).split('\n');

  for (const [i, line] of lines.entries()) {
    for (const pattern of PATTERNS) {
      for (const [, href] of line.matchAll(pattern)) {
        if (EXTERNAL.test(href) || href.startsWith('#')) continue;
        const [rawPath, anchor] = href.split('#');
        if (!rawPath) continue;

        const target = rawPath.startsWith('/')
          ? rawPath
          : path.posix.normalize(path.posix.join(baseDir, rawPath));
        const htmlPath = path.join(DIST, target.replace(/^\/|\/$/g, ''), 'index.html');
        checked++;

        const where = `${DOCS}/${rel}:${i + 1}`;
        if (!existsSync(htmlPath)) {
          findings.push({ target, where, reason: 'Seite fehlt' });
        } else if (anchor && !(await hasAnchor(htmlPath, anchor))) {
          findings.push({ target: `${target}#${anchor}`, where, reason: 'Anker fehlt' });
        }
      }
    }
  }
}

console.log(`${checked} interne Links geprueft.`);

if (findings.length === 0) {
  console.log('Keine toten Ziele.');
  process.exit(0);
}

const byTarget = new Map();
for (const f of findings) {
  if (!byTarget.has(f.target)) byTarget.set(f.target, { reason: f.reason, sources: [] });
  byTarget.get(f.target).sources.push(f.where);
}

console.error(`\n${byTarget.size} tote Ziele (${findings.length} Verweise):\n`);
for (const [target, { reason, sources }] of [...byTarget].sort()) {
  console.error(`  ${target}  (${reason})`);
  for (const s of [...new Set(sources)].sort()) console.error(`        <- ${s}`);
}
process.exit(1);
