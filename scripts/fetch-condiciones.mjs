// Genera src/data/condiciones.json con una ESTIMACIÓN del estado de cada torrente
// a partir de datos meteorológicos abiertos (Open-Meteo): no es una medición real
// de caudal (Baleares no tiene red de aforos en tiempo real), sino un índice
// derivado de la lluvia acumulada y la humedad del suelo en el punto de inicio
// de cada torrente. Se ejecuta antes de cada build (ver "prebuild"/"predev" en
// package.json) para que el dato quede siempre fresco en el sitio estático.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/torrentes');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/condiciones.json');
const TIMEZONE = 'Europe/Madrid';

// Umbrales de lluvia acumulada en 72h (mm) para pasar de un nivel al siguiente.
// Son ORIENTATIVOS por tamaño de cuenca: ajústalos con tu experiencia de campo
// en cada torrente en cuanto tengas ocasión de contrastarlos sobre el terreno.
const THRESHOLDS = {
  mortitx: { bajo: 5, optimo: 20, crecida: 60 },
  coanegra: { bajo: 5, optimo: 15, crecida: 50 },
  lofre: { bajo: 5, optimo: 15, crecida: 50 },
  'sa-fosca': { bajo: 5, optimo: 15, crecida: 40 },
};
const DEFAULT_THRESHOLDS = { bajo: 5, optimo: 15, crecida: 50 };

function round1(n) {
  return Math.round(n * 10) / 10;
}

function todayInTimezone(timeZone) {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

function getCanyonSlugs() {
  return fs.readdirSync(CONTENT_DIR).filter((f) => fs.statSync(path.join(CONTENT_DIR, f)).isDirectory());
}

/** Primera coordenada "lat, lng (nota)" del frontmatter: prioriza "inicio", si no, la primera disponible. */
function parseFirstCoord(frontmatter) {
  const coords = frontmatter.coordenadas ?? {};
  const first = coords.inicio ?? Object.values(coords)[0];
  if (!first) return null;
  const nums = String(first).match(/-?\d+\.\d+/g);
  if (!nums || nums.length < 2) return null;
  return { lat: Number(nums[0]), lon: Number(nums[1]) };
}

async function fetchWeather(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&daily=precipitation_sum&hourly=soil_moisture_3_to_9cm` +
    `&past_days=7&forecast_days=2&timezone=${encodeURIComponent(TIMEZONE)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Open-Meteo respondió ${res.status} para ${lat},${lon}`);
  return res.json();
}

function levelFromRain72h(rain72h, thresholds) {
  if (rain72h >= thresholds.crecida) return 'crecida';
  if (rain72h >= thresholds.optimo) return 'optimo';
  if (rain72h >= thresholds.bajo) return 'bajo';
  return 'seco';
}

async function buildCondicionesParaTorrente(slug) {
  const esFile = path.join(CONTENT_DIR, slug, 'es.md');
  if (!fs.existsSync(esFile)) return null;

  const { data: frontmatter } = matter(fs.readFileSync(esFile, 'utf8'));
  const coord = parseFirstCoord(frontmatter);
  if (!coord) {
    console.warn(`[condiciones] Sin coordenadas válidas para "${slug}", se omite.`);
    return null;
  }

  const weather = await fetchWeather(coord.lat, coord.lon);
  const today = todayInTimezone(TIMEZONE);
  const dailyDates = weather.daily.time;
  const dailyRain = weather.daily.precipitation_sum;
  const todayIndex = dailyDates.indexOf(today);

  const pastRain = todayIndex >= 0 ? dailyRain.slice(0, todayIndex + 1) : dailyRain;
  const futureRain = todayIndex >= 0 ? dailyRain.slice(todayIndex + 1) : [];

  const rain24h = pastRain.at(-1) ?? 0;
  const rain72h = pastRain.slice(-3).reduce((a, b) => a + b, 0);
  const rain7d = pastRain.slice(-7).reduce((a, b) => a + b, 0);
  const forecast48h = futureRain.slice(0, 2).reduce((a, b) => a + b, 0);

  // Humedad del suelo en el instante más reciente que ya ha pasado.
  const hourlyTimes = weather.hourly.time;
  const hourlySoil = weather.hourly.soil_moisture_3_to_9cm;
  const nowIso = new Date().toISOString().slice(0, 13); // "YYYY-MM-DDTHH"
  let soilIndex = hourlyTimes.findIndex((t) => t.slice(0, 13) > nowIso) - 1;
  if (soilIndex < 0) soilIndex = hourlyTimes.length - 1;
  const soilMoisture = hourlySoil[soilIndex] ?? null;

  const thresholds = THRESHOLDS[slug] ?? DEFAULT_THRESHOLDS;

  return {
    rain24h: round1(rain24h),
    rain72h: round1(rain72h),
    rain7d: round1(rain7d),
    forecast48h: round1(forecast48h),
    soilMoisture: soilMoisture !== null ? round1(soilMoisture) : null,
    level: levelFromRain72h(rain72h, thresholds),
  };
}

async function main() {
  const slugs = getCanyonSlugs();
  const result = { generatedAt: new Date().toISOString(), torrentes: {} };

  for (const slug of slugs) {
    try {
      const condiciones = await buildCondicionesParaTorrente(slug);
      if (condiciones) result.torrentes[slug] = condiciones;
    } catch (err) {
      console.error(`[condiciones] Error obteniendo datos para "${slug}":`, err.message);
      result.torrentes[slug] = { error: true };
    }
  }

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
  console.log(`[condiciones] Escrito ${OUTPUT_FILE} con ${Object.keys(result.torrentes).length} torrente(s).`);
}

main().catch((err) => {
  console.error('[condiciones] Fallo general, se continúa sin bloquear el build:', err);
  // No usamos process.exit(1): si Open-Meteo falla, preferimos desplegar la web
  // sin el índice de condiciones antes que romper el despliegue entero.
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  if (!fs.existsSync(OUTPUT_FILE)) {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ generatedAt: null, torrentes: {} }, null, 2));
  }
});
