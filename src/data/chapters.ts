export type Chapter = {
  numeral: string;
  title: string;
  href: string;
  /** The page this chapter "starts on" in the book's table of contents. */
  page: number;
};

export const chapters: Chapter[] = [
  { numeral: 'I', title: 'Introduction', href: '/', page: 1 },
  { numeral: 'II', title: 'Work', href: '/work/', page: 9 },
  { numeral: 'III', title: 'Experience', href: '/experience/', page: 27 },
  { numeral: 'IV', title: 'Services', href: '/services/', page: 41 },
  { numeral: 'V', title: 'Contact', href: '/contact/', page: 58 },
  { numeral: 'VI', title: 'Colophon', href: '/colophon/', page: 61 },
];

/** The chapter a path belongs to; nested pages (e.g. /work/foo/) belong to their parent. */
export function chapterFor(pathname: string): Chapter | undefined {
  const path = pathname.replace(/\/?$/, '/');
  if (path === '/') return chapters[0];
  return chapters.find((c) => c.href !== '/' && path.startsWith(c.href));
}
