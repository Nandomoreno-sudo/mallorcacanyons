import type { ImageMetadata } from 'astro';

// Importación estática (analizable en build time) de TODAS las fotos de TODOS los
// torrentes. Astro optimiza cada una porque el glob es literal, aunque el torrente
// que consume cada imagen se resuelva dinámicamente en runtime/build.
const allPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/torrentes/*/fotos/*.{webp,jpg,jpeg,png}',
  { eager: true }
);

interface TorrenteMedia {
  /** Portada: hero.webp explícito, o si no existe, la primera foto de la galería */
  hero: ImageMetadata | undefined;
  /** Galería completa (sin contar hero.* ni topo_*) ordenada numéricamente */
  gallery: ImageMetadata[];
  /** Topografías / croquis (topo_1, topo_2, topo_3...) ordenadas numéricamente */
  topos: ImageMetadata[];
}

const numericSort = (a: string, b: string) =>
  a.localeCompare(b, 'es', { numeric: true, sensitivity: 'base' });

/**
 * Resuelve dinámicamente las imágenes de un torrente a partir de su slug,
 * inspeccionando el contenido real de `src/content/torrentes/<slug>/fotos/`.
 */
export function getTorrenteMedia(slug: string): TorrenteMedia {
  const marker = `/torrentes/${slug}/fotos/`;

  const entries = Object.entries(allPhotos)
    .filter(([path]) => path.includes(marker))
    .map(([path, mod]) => ({
      filename: path.split('/').pop()!,
      image: mod.default,
    }));

  const isTopo = (name: string) => /^topo[_-]?\d+\./i.test(name);
  const isHero = (name: string) => /^hero\./i.test(name);

  const topos = entries
    .filter((e) => isTopo(e.filename))
    .sort((a, b) => numericSort(a.filename, b.filename))
    .map((e) => e.image);

  const galleryEntries = entries
    .filter((e) => !isTopo(e.filename) && !isHero(e.filename))
    .sort((a, b) => numericSort(a.filename, b.filename));

  const explicitHero = entries.find((e) => isHero(e.filename));

  return {
    hero: explicitHero?.image ?? galleryEntries[0]?.image,
    gallery: galleryEntries.map((e) => e.image),
    topos,
  };
}
