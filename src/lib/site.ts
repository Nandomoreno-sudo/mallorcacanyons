import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Comprueba en build/request time si el usuario ha colocado un logo real en
// public/logo.webp. Si no existe, header y footer usan el icono SVG por defecto.
export const hasCustomLogo = existsSync(fileURLToPath(new URL('../../public/logo.webp', import.meta.url)));
