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

export interface ParsedCoord {
  lat: number;
  lng: number;
  note: string | null;
  /** "39.7345° N, 2.7681° E - Carretera Orient" */
  display: string;
  mapsUrl: string;
  /** "39.7345, 2.7681" listo para copiar/pegar */
  copyValue: string;
}

/** Parsea "lat, lng (nota opcional)" -> coordenadas con cardinalidad N/S/E/W y enlace a Google Maps. */
export function parseCoord(raw: string): ParsedCoord | null {
  const match = raw.match(/(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*(?:\(([^)]+)\))?/);
  if (!match) return null;

  const lat = Number(match[1]);
  const lng = Number(match[2]);
  const note = match[3]?.trim() || null;
  const latCard = lat >= 0 ? 'N' : 'S';
  const lngCard = lng >= 0 ? 'E' : 'W';
  const display = `${Math.abs(lat).toFixed(4)}° ${latCard}, ${Math.abs(lng).toFixed(4)}° ${lngCard}${note ? ` - ${note}` : ''}`;

  return {
    lat,
    lng,
    note,
    display,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
    copyValue: `${lat}, ${lng}`,
  };
}
