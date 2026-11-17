export type Mix = {
  id: string;
  title: string;
  genre: string;
  description?: string;
  url: string;
  published: boolean;
};

// Inserire qui soltanto i mix reali di Mommy DJ, dopo aver verificato i link.
// Istruzioni e formato: docs/bozza-sito.md. Nessun mix è attualmente pubblicato.
export const mixes: Mix[] = [];

export function getMixcloudFeed(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" || !["www.mixcloud.com", "mixcloud.com"].includes(parsed.hostname)) return null;
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (parts.length !== 2 || parts.some((part) => !/^[a-zA-Z0-9_-]+$/.test(part))) return null;
    if (["discover", "live", "playlists", "widget", "developers", "upload"].includes(parts[0])) return null;
    return `/${parts[0]}/${parts[1]}/`;
  } catch {
    return null;
  }
}

export const availableMixes = mixes.filter((mix) =>
  mix.published && mix.title.trim() && mix.genre.trim() && getMixcloudFeed(mix.url)
);
export const hasMixes = availableMixes.length > 0;
