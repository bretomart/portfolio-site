/** Strip one trailing slash so paths can be joined as `${trimBase(b)}/page`. */
export const trimBase = (baseUrl: string): string => baseUrl.replace(/\/$/, '');

/** Site base path without trailing slash (for example "/portfolio-site"). */
export const base = trimBase(import.meta.env.BASE_URL ?? '/');

/** Anchor id for a research category. */
export const categoryAnchor = (category: string): string =>
  `category-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

/** Split text on blank lines into non-empty paragraphs. */
export const paragraphs = (text: string): string[] => text.split('\n\n').filter(Boolean);

/** Sort items by `data.order` (missing or zero sorts last). Returns a new array. */
export const sortByOrder = <T extends { data: { order?: number } }>(items: T[]): T[] =>
  [...items].sort((a, b) => (a.data.order || 99) - (b.data.order || 99));

/** Keep only depth 2 and 3 headings for document navigation. */
export const navHeadings = <T extends { depth: number }>(headings: T[]): T[] =>
  headings.filter((h) => h.depth === 2 || h.depth === 3);
