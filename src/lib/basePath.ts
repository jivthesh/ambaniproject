/**
 * Resolves public-folder asset paths to work both locally (no basePath)
 * and on GitHub Pages (basePath = "/ambaniproject").
 *
 * Usage:  src={img("/blouse-magenta.jpg")}
 *         style={{ backgroundImage: `url(${img('/bg4.png')})` }}
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function img(path: string): string {
  // path must start with "/"
  return `${BASE}${path}`;
}
