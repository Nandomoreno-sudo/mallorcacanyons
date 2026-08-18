import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const torrentes = defineCollection({
  // generateId explícito: por defecto el glob loader usa el campo "slug" del
  // frontmatter como id único, y aquí lo reutilizamos a propósito en los 3
  // idiomas de cada torrente (mismo canyon, mismo slug) -> colisionarían y se
  // perderían entradas. Usamos la ruta del archivo (única) en su lugar.
  loader: glob({
    pattern: '*/*.md',
    base: './src/content/torrentes',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    lang: z.enum(['es', 'en', 'de']),
    nombre: z.string(),
    slug: z.string(),
    zona: z.string(),
    dificultad: z.string(),
    caracter: z.string(),
    // Tipos de torrente independientes del idioma, para que el filtrado
    // funcione igual en las 3 versiones traducidas del mismo torrente.
    tags: z.array(z.enum(['acuatico', 'vertical', 'verano', 'coleccion'])),
    rapel_max: z.number(),
    longitud_m: z.number().optional(),
    desnivel_m: z.number().optional(),
    cuerdas_recomendadas: z.string(),
    caudal: z.string(),
    neopreno: z.string().optional(),
    regulacion_permisos: z.string().optional(),
    tiempos: z.object({
      aproximacion: z.string().optional(),
      descenso: z.string().optional(),
      retorno: z.string().optional(),
      total: z.string().optional(),
    }),
    // Las claves varían por torrente (parking / parking_superior / inicio / final...),
    // por lo que se valida como diccionario libre de coordenadas "lat, lng (nota)".
    coordenadas: z.record(z.string(), z.string()),
  }),
});

export const collections = { torrentes };
