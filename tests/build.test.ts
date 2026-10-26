import { beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Smoke check: run with `bun run test` (builds first) or after `bun run build`.
const root = join(import.meta.dir, '..');
const dist = join(root, 'dist');
const slugs = readdirSync(join(root, 'src/content/research'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''));

describe('build output', () => {
  beforeAll(() => {
    if (!existsSync(join(dist, 'index.html'))) throw new Error('dist/ missing: run `bun run build` first');
  });

  test('every page is generated', () => {
    for (const p of ['index.html', 'cv/index.html', 'docs/index.html', ...slugs.map((s) => `research/${s}/index.html`)]) {
      expect(existsSync(join(dist, p)), p).toBe(true);
    }
  });

  test('index links every paper under the base path', () => {
    const html = readFileSync(join(dist, 'index.html'), 'utf8');
    for (const s of slugs) expect(html).toContain(`/portfolio-site/research/${s}`);
  });
});
