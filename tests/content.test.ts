import { describe, expect, test } from 'bun:test';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dir, '..');
const dir = join(root, 'src/content/research');
const papers = readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .map((file) => {
    const raw = readFileSync(join(dir, file), 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    return { file, raw, fm };
  });

const field = (fm: string, key: string) => fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1];

/** All source files that end up in the rendered site. */
const walk = (d: string): string[] =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)],
  );
const siteFiles = [...walk(join(root, 'src')), join(root, 'README.md')];

describe('research collection', () => {
  test('has papers, each with front matter and required fields', () => {
    expect(papers.length).toBeGreaterThan(0);
    for (const { file, fm } of papers) {
      for (const key of ['title', 'category', 'publicationYear', 'status', 'executiveAbstract', 'keyPoints', 'thematicAreas']) {
        expect(fm, `${file} missing ${key}`).toMatch(new RegExp(`^${key}:`, 'm'));
      }
    }
  });

  test('order values are unique integers', () => {
    const orders = papers.map(({ fm }) => Number(field(fm, 'order')));
    orders.forEach((o) => expect(Number.isInteger(o)).toBe(true));
    expect(new Set(orders).size).toBe(orders.length);
  });

  test('publication years are plausible', () => {
    for (const { fm } of papers) {
      const y = Number(field(fm, 'publicationYear'));
      expect(y).toBeGreaterThanOrEqual(2000);
      expect(y).toBeLessThanOrEqual(new Date().getFullYear() + 1);
    }
  });
});

describe('AGENTS.md content rules', () => {
  test('no em-dashes in site sources', () => {
    for (const f of siteFiles) expect(readFileSync(f, 'utf8').includes('\u2014'), f).toBe(false);
  });

  test('no personal emails exposed in site sources', () => {
    const emailRe = /[\w.+-]+@[\w-]+\.[\w.]+/g;
    for (const f of siteFiles) {
      for (const m of readFileSync(f, 'utf8').match(emailRe) ?? []) {
        expect(m, f).toBe('placeholder@example.com');
      }
    }
  });
});

describe('repository hygiene', () => {
  test('.gitignore covers context/ and dist/', () => {
    const lines = readFileSync(join(root, '.gitignore'), 'utf8').split(/\r?\n/);
    expect(lines).toContain('context/');
    expect(lines).toContain('dist/');
  });
});
