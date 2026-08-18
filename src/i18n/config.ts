export const locales = ['es', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
};

/** '' para el idioma por defecto (sin prefijo), '/en' o '/de' para el resto. */
export function localePrefix(lang: Locale): string {
  return lang === defaultLocale ? '' : `/${lang}`;
}

/** Antepone el base path de despliegue (astro.config `base`, p. ej. '/mallorcacanyons') a una ruta absoluta '/algo'. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const baseNoSlash = base.endsWith('/') ? base.slice(0, -1) : base;
  if (!baseNoSlash) return path;
  return path === '/' ? baseNoSlash : `${baseNoSlash}${path}`;
}

/** Antepone el prefijo de idioma y el base path a una ruta absoluta ya "sin idioma" (empieza por '/'). */
export function localizePath(path: string, lang: Locale): string {
  const prefix = localePrefix(lang);
  const localized = path === '/' ? (prefix || '/') : `${prefix}${path}`;
  return withBase(localized);
}

/** Dado un pathname completo (con o sin base path), separa el idioma detectado y la ruta "sin idioma". */
export function stripLocale(pathname: string): { lang: Locale; path: string } {
  const base = import.meta.env.BASE_URL;
  const baseNoSlash = base.endsWith('/') ? base.slice(0, -1) : base;
  const withoutBase = baseNoSlash && pathname.startsWith(baseNoSlash) ? pathname.slice(baseNoSlash.length) || '/' : pathname;

  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (withoutBase === `/${l}` || withoutBase.startsWith(`/${l}/`)) {
      const rest = withoutBase.slice(`/${l}`.length);
      return { lang: l, path: rest === '' ? '/' : rest };
    }
  }
  return { lang: defaultLocale, path: withoutBase };
}
