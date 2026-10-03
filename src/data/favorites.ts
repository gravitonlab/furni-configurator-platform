const STORAGE_KEY = 'furni-favorites';

export function getFavorites(): string[] {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) as string[] : [];
  } catch {
    return [];
  }
}

export function isFavorite(slug: string): boolean {
  return getFavorites().includes(slug);
}

export function toggleFavorite(slug: string): boolean {
  const favorites = getFavorites();
  const next = favorites.includes(slug)
    ? favorites.filter((item) => item !== slug)
    : [...favorites, slug];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next.includes(slug);
}
