/** Extrae el grado vertical (v3, v4, v5...) de un string tipo "v4 a2 III". */
export function extractGrade(dificultad: string): string {
  const match = dificultad.match(/v\s?(\d)/i);
  return match ? `v${match[1]}` : 'v?';
}

/** Color de acento Tailwind según el grado vertical, de sereno a extremo. */
export function gradeAccent(dificultad: string): 'cyan' | 'orange' | 'danger' {
  const grade = Number(extractGrade(dificultad).replace('v', ''));
  if (grade >= 5) return 'danger';
  if (grade >= 4) return 'orange';
  return 'cyan';
}

/** Primer segmento de la zona compuesta ("Escorca / Tramuntana Nord" -> "Escorca"). */
export function primaryZona(zona: string): string {
  return zona.split('/')[0]?.trim() ?? zona;
}

/** Etiqueta legible para una clave de coordenadas (parking_superior -> Parking superior). */
export function labelCoord(key: string): string {
  return key
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
