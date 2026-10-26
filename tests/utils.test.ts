import { describe, expect, test } from 'bun:test';
import { categoryAnchor, navHeadings, paragraphs, sortByOrder, trimBase } from '../src/lib/utils';

describe('utils', () => {
  test('trimBase removes only one trailing slash', () => {
    expect(trimBase('/portfolio-site/')).toBe('/portfolio-site');
    expect(trimBase('/')).toBe('');
    expect(trimBase('/x')).toBe('/x');
  });

  test('categoryAnchor builds a URL-safe id', () => {
    expect(categoryAnchor('Political Theory & Poetics')).toBe('category-political-theory-poetics');
  });

  test('paragraphs splits on blank lines and drops empties', () => {
    expect(paragraphs('a\n\nb\n\n\n\nc')).toEqual(['a', 'b', 'c']);
  });

  test('sortByOrder sorts ascending, missing last, without mutation', () => {
    const input = [{ data: { order: 3 } }, { data: {} }, { data: { order: 1 } }];
    expect(sortByOrder(input).map((p) => p.data.order)).toEqual([1, 3, undefined]);
    expect(input[0].data.order).toBe(3);
  });

  test('navHeadings keeps depth 2 and 3', () => {
    const hs = [1, 2, 3, 4].map((depth) => ({ depth }));
    expect(navHeadings(hs).map((h) => h.depth)).toEqual([2, 3]);
  });
});
