import type { Locale } from './config';

export interface ProtocolStep {
  title: string;
  body: string;
}

export interface Dictionary {
  meta: { defaultDescription: string };
  nav: { torrentes: string; seguridad: string; openMenu: string };
  search: { headerPlaceholder: string; heroPlaceholder: string; livePlaceholder: string };
  home: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    subtitle: string;
    statsCount: string;
    statsTopos: string;
    sectionTitle: string;
    sectionSubtitle: string;
  };
  discover: {
    badge: string;
    title: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  filters: { zona: string; dificultad: string; caracter: string; todos: string; empty: string };
  caracterTags: { acuatico: string; vertical: string; verano: string; coleccion: string };
  card: { rapelMax: string };
  ficha: {
    title: string;
    rapelMaximo: string;
    cuerdas: string;
    longitud: string;
    desnivel: string;
    caudal: string;
    neopreno: string;
    tiempos: string;
    aproximacion: string;
    descenso: string;
    retorno: string;
    total: string;
    coordenadas: string;
    regulacion: string;
    verMapa: string;
    copiarCoords: string;
    copiado: string;
  };
  topo: { titleOne: string; titleMany: string; tapToZoom: string };
  gallery: { title: string };
  detail: { back: string };
  footer: {
    tagline: string;
    emergencias: string;
    emergenciasGenerales: string;
    greim: string;
    ibsalut: string;
    greimDescription: string;
    disclaimerTitle: string;
    disclaimerPre: string;
    disclaimerLink: string;
    disclaimerPost: string;
    copyright: string;
    note: string;
  };
  safety: {
    badge: string;
    title: string;
    intro: string;
    emergencyTitle: string;
    emergencyUe: string;
    emergencyGreim: string;
    emergencyIbsalut: string;
    emergencyNote: string;
    materialTitle: string;
    material: string[];
    protocolTitle: string;
    protocol: ProtocolStep[];
    permitsTitle: string;
    permitsBody: string;
    permitsLink: string;
  };
  notFound: { title: string; subtitle: string; back: string };
  coordLabels: Record<string, string>;
}

const es: Dictionary = {
  meta: { defaultDescription: 'Guía técnica y visual de torrentes y barrancos de Mallorca.' },
  nav: { torrentes: 'Torrentes', seguridad: 'Seguridad', openMenu: 'Abrir menú' },
  search: {
    headerPlaceholder: 'Buscar torrente, zona o dificultad…',
    heroPlaceholder: 'Buscar por nombre, zona o dificultad…',
    livePlaceholder: 'Filtrar en vivo…',
  },
  home: {
    badge: 'Serra de Tramuntana · Mallorca',
    titlePre: 'Guía técnica de ',
    titleHighlight: 'torrentes',
    titlePost: ' y barrancos',
    subtitle:
      'Fichas técnicas, topografías y fotografía real de los descensos de barranquismo más emblemáticos de la isla. Rápeles, caudales, tiempos y coordenadas verificadas sobre el terreno.',
    statsCount: 'torrentes documentados',
    statsTopos: 'Topografías originales',
    sectionTitle: 'Todos los descensos',
    sectionSubtitle: 'Filtra por zona, dificultad o carácter del recorrido.',
  },
  discover: {
    badge: 'Descubre',
    title: 'Descubre los barrancos de Mallorca',
    body: 'Paisajes de piedra caliza, pozas de aguas cristalinas y rápeles entre acantilados. Cada torrente incluye topografía, fotografía real y datos técnicos verificados sobre el terreno para planificar tu descenso con seguridad.',
    ctaPrimary: 'Ver todos los descensos',
    ctaSecondary: 'Seguridad y normativa',
  },
  filters: { zona: 'Zona', dificultad: 'Dificultad', caracter: 'Carácter', todos: 'Todos', empty: 'Ningún torrente coincide con estos filtros. Prueba a quitar alguno.' },
  caracterTags: { acuatico: 'Acuático', vertical: 'Vertical', verano: 'Verano', coleccion: 'Colección' },
  card: { rapelMax: 'Rápel máx.' },
  ficha: {
    title: 'Ficha técnica',
    rapelMaximo: 'Rápel máximo',
    cuerdas: 'Cuerdas recomendadas',
    longitud: 'Longitud',
    desnivel: 'Desnivel',
    caudal: 'Caudal',
    neopreno: 'Neopreno',
    tiempos: 'Tiempos orientativos',
    aproximacion: 'Aproximación',
    descenso: 'Descenso',
    retorno: 'Retorno',
    total: 'Total',
    coordenadas: 'Coordenadas GPS',
    regulacion: 'Regulación y permisos',
    verMapa: 'Ver en Maps',
    copiarCoords: 'Copiar',
    copiado: '¡Copiado!',
  },
  topo: { titleOne: 'Topografía / Croquis', titleMany: 'Topografías / Croquis', tapToZoom: 'Toca para ampliar' },
  gallery: { title: 'Galería fotográfica' },
  detail: { back: 'Todos los torrentes' },
  footer: {
    tagline:
      'Guía técnica y visual de torrentes y barrancos de la Serra de Tramuntana. Información de referencia, nunca sustituye la evaluación en campo por un/a técnico/a cualificado/a.',
    emergencias: 'Emergencias',
    emergenciasGenerales: 'Emergencias generales',
    greim: 'GREIM (Guardia Civil)',
    ibsalut: 'IB-SALUT / SAMU 061',
    greimDescription:
      'El GREIM (Grupo de Rescate e Intervención en Montaña) de la Guardia Civil es la unidad especializada en rescates en barrancos y montaña de la Serra de Tramuntana. Ante cualquier accidente grave, llama primero al 112.',
    disclaimerTitle: 'Aviso de responsabilidad',
    disclaimerPre: 'El barranquismo es una actividad de riesgo. Las condiciones (caudal, meteorología, estado del material fijo) cambian constantemente. Consulta siempre ',
    disclaimerLink: 'protocolos y normativa',
    disclaimerPost: ' y contrata guía profesional si no tienes experiencia técnica contrastada.',
    copyright: 'Mallorca Canyons. Uso informativo, no comercial.',
    note: 'Descensos verificados sobre el terreno · Datos sujetos a cambios estacionales',
  },
  safety: {
    badge: 'Seguridad',
    title: 'Seguridad y normativa',
    intro:
      'El barranquismo es una actividad de riesgo objetivo. Esta guía es material de referencia y planificación: no sustituye la formación técnica, el juicio en campo ni la contratación de guías profesionales cuando corresponda.',
    emergencyTitle: 'Números de emergencia',
    emergencyUe: 'Emergencias (UE)',
    emergencyGreim: 'GREIM · Guardia Civil',
    emergencyIbsalut: 'IB-Salut / SAMU',
    emergencyNote:
      'El GREIM (Grupo de Rescate e Intervención en Montaña) de la Guardia Civil es la unidad especializada en rescates en barrancos y montaña de la Serra de Tramuntana. Ante cualquier accidente grave, llama primero al 112.',
    materialTitle: 'Material obligatorio / recomendado',
    material: [
      'Neopreno adecuado al caudal y temporada (3mm a 5mm, integral en cañones fríos u oscuros)',
      'Casco homologado durante todo el recorrido',
      'Arnés de barranquismo + kit de descenso (descensor autofrenante, mosquetones, cabo de anclaje)',
      'Cuerdas dinámicas/estáticas específicas de barranquismo, según ficha técnica de cada torrente',
      'Cuerda de socorro adicional para maniobras de rescate',
      'Calzado cerrado con buena adherencia (neopreno con suela o escarpín + zapatilla)',
      'Doble sistema de iluminación estanco en cañones con tramos oscuros (p. ej. Sa Fosca)',
      'Silbato, manta térmica y botiquín básico estanco',
      'Teléfono móvil en funda estanca con batería suficiente',
    ],
    protocolTitle: 'Protocolo de actuación',
    protocol: [
      {
        title: 'Antes de entrar',
        body: 'Consulta la previsión meteorológica de las últimas 48h y la del propio día (AEMET). Descarta la actividad ante alerta de tormentas, lluvia reciente intensa o crecida de caudal. Informa a un contacto de referencia de tu itinerario y hora estimada de salida.',
      },
      {
        title: 'Durante el descenso',
        body: 'Progresa siempre en grupo, nunca en solitario. Verifica anclajes y estado del material fijo antes de cargar peso. Comprueba la profundidad antes de cualquier salto. Mantén contacto visual/verbal constante entre los miembros del grupo.',
      },
      {
        title: 'En caso de emergencia',
        body: 'Si hay herido/a: asegura la zona, aplica primeros auxilios básicos y valora la posibilidad de autorrescate. Si es necesario evacuar, llama al 112 indicando el nombre del torrente, el tramo aproximado y el número de personas afectadas. En zonas sin cobertura, delega en un miembro del grupo para buscar señal o salir a pedir ayuda.',
      },
    ],
    permitsTitle: 'Permisos y regulación · Medi Ambient',
    permitsBody:
      'Varios torrentes de la Serra de Tramuntana discurren por espacios naturales protegidos y requieren autorización previa o declaración responsable ante la Conselleria de Medi Ambient i Territori del Govern de les Illes Balears, especialmente durante la temporada de nidificación de aves rupícolas (normalmente entre enero y julio, variable según especie y barranco). Consulta la ficha técnica de cada torrente y tramita el permiso correspondiente antes de la actividad.',
    permitsLink: 'Portal del Govern de les Illes Balears',
  },
  notFound: {
    title: 'Torrent no localizado',
    subtitle: 'Esta página no existe o el descenso aún no está documentado.',
    back: 'Volver al listado',
  },
  coordLabels: {
    parking: 'Parking',
    parking_superior: 'Parking superior',
    parking_inferior: 'Parking inferior',
    inicio: 'Inicio',
    final: 'Final',
  },
};

const en: Dictionary = {
  meta: { defaultDescription: 'A technical and visual guide to the canyons and gorges of Mallorca.' },
  nav: { torrentes: 'Canyons', seguridad: 'Safety', openMenu: 'Open menu' },
  search: {
    headerPlaceholder: 'Search canyon, area or difficulty…',
    heroPlaceholder: 'Search by name, area or difficulty…',
    livePlaceholder: 'Filter live…',
  },
  home: {
    badge: 'Serra de Tramuntana · Mallorca',
    titlePre: 'A technical guide to ',
    titleHighlight: 'canyons',
    titlePost: ' and gorges',
    subtitle:
      "Technical sheets, topos and real photography of the island's most iconic canyoning descents. Rappels, water flow, times and coordinates verified on the ground.",
    statsCount: 'canyons documented',
    statsTopos: 'Original topos',
    sectionTitle: 'All descents',
    sectionSubtitle: 'Filter by area, difficulty or character of the route.',
  },
  discover: {
    badge: 'Discover',
    title: 'Discover the canyons of Mallorca',
    body: "Limestone landscapes, crystal-clear pools and rappels between cliffs. Every canyon includes topos, real photography and technical data verified on the ground, so you can plan your descent safely.",
    ctaPrimary: 'See all descents',
    ctaSecondary: 'Safety & regulations',
  },
  filters: { zona: 'Area', dificultad: 'Difficulty', caracter: 'Character', todos: 'All', empty: 'No canyon matches these filters. Try removing one.' },
  caracterTags: { acuatico: 'Aquatic', vertical: 'Vertical', verano: 'Summer', coleccion: 'Collection' },
  card: { rapelMax: 'Max rappel' },
  ficha: {
    title: 'Technical sheet',
    rapelMaximo: 'Max rappel',
    cuerdas: 'Recommended ropes',
    longitud: 'Length',
    desnivel: 'Elevation drop',
    caudal: 'Water flow',
    neopreno: 'Wetsuit',
    tiempos: 'Estimated times',
    aproximacion: 'Approach',
    descenso: 'Descent',
    retorno: 'Return',
    total: 'Total',
    coordenadas: 'GPS coordinates',
    regulacion: 'Regulations & permits',
    verMapa: 'View on Maps',
    copiarCoords: 'Copy',
    copiado: 'Copied!',
  },
  topo: { titleOne: 'Topo / Sketch', titleMany: 'Topos / Sketches', tapToZoom: 'Tap to zoom' },
  gallery: { title: 'Photo gallery' },
  detail: { back: 'All canyons' },
  footer: {
    tagline:
      "A technical and visual guide to the canyons and gorges of the Serra de Tramuntana. Reference information — never a substitute for on-site assessment by a qualified professional.",
    emergencias: 'Emergency',
    emergenciasGenerales: 'General emergencies',
    greim: 'GREIM (Civil Guard)',
    ibsalut: 'IB-SALUT / SAMU 061',
    greimDescription:
      "GREIM (the Civil Guard's Mountain Rescue and Intervention Group) is the specialist unit for canyon and mountain rescues in the Serra de Tramuntana. In any serious accident, call 112 first.",
    disclaimerTitle: 'Liability notice',
    disclaimerPre: 'Canyoning is a risk activity. Conditions (water flow, weather, fixed gear condition) change constantly. Always check the ',
    disclaimerLink: 'protocols and regulations',
    disclaimerPost: ' and hire a professional guide if you lack proven technical experience.',
    copyright: 'Mallorca Canyons. Informational use only, non-commercial.',
    note: 'Descents verified on the ground · Data subject to seasonal changes',
  },
  safety: {
    badge: 'Safety',
    title: 'Safety and regulations',
    intro:
      'Canyoning is an activity with objective risk. This guide is reference and planning material: it does not replace technical training, on-site judgement, or hiring professional guides when appropriate.',
    emergencyTitle: 'Emergency numbers',
    emergencyUe: 'Emergency (EU)',
    emergencyGreim: 'GREIM · Civil Guard',
    emergencyIbsalut: 'IB-Salut / SAMU',
    emergencyNote:
      "GREIM (the Civil Guard's Mountain Rescue and Intervention Group) is the specialist unit for canyon and mountain rescues in the Serra de Tramuntana. In any serious accident, call 112 first.",
    materialTitle: 'Required / recommended gear',
    material: [
      'Wetsuit suited to the water flow and season (3mm to 5mm, full suit in cold or dark canyons)',
      'Certified helmet for the whole route',
      'Canyoning harness + descent kit (self-braking descender, carabiners, anchor lanyard)',
      'Canyoning-specific dynamic/static ropes, according to each canyon\'s technical sheet',
      'Additional rescue rope for rescue manoeuvres',
      'Closed footwear with good grip (neoprene socks with sole, or canyoning shoes)',
      'Dual waterproof lighting system for canyons with dark sections (e.g. Sa Fosca)',
      'Whistle, thermal blanket and basic waterproof first-aid kit',
      'Mobile phone in a waterproof case with sufficient battery',
    ],
    protocolTitle: 'Action protocol',
    protocol: [
      {
        title: 'Before entering',
        body: 'Check the weather forecast for the last 48h and for the day itself (AEMET). Cancel the activity if there is a storm warning, recent heavy rain, or rising water flow. Tell a reference contact your route and estimated exit time.',
      },
      {
        title: 'During the descent',
        body: 'Always progress as a group, never alone. Check anchors and the condition of fixed gear before loading weight. Check the depth before any jump. Keep constant visual/verbal contact between group members.',
      },
      {
        title: 'In an emergency',
        body: 'If someone is injured: secure the area, apply basic first aid, and assess the possibility of self-rescue. If evacuation is needed, call 112 stating the canyon name, the approximate section, and the number of people affected. In areas without coverage, send a group member to find signal or seek help.',
      },
    ],
    permitsTitle: 'Permits and regulations · Medi Ambient',
    permitsBody:
      'Several canyons in the Serra de Tramuntana run through protected natural areas and require prior authorization or a responsible declaration from the Balearic Government\'s Conselleria de Medi Ambient i Territori, especially during the cliff-nesting bird season (usually between January and July, varying by species and canyon). Check the technical sheet for each canyon and arrange the relevant permit before the activity.',
    permitsLink: 'Balearic Government portal',
  },
  notFound: {
    title: 'Canyon not found',
    subtitle: 'This page does not exist, or the descent is not documented yet.',
    back: 'Back to the list',
  },
  coordLabels: {
    parking: 'Parking',
    parking_superior: 'Upper parking',
    parking_inferior: 'Lower parking',
    inicio: 'Start',
    final: 'End',
  },
};

const de: Dictionary = {
  meta: { defaultDescription: 'Ein technischer und visueller Guide für die Schluchten und Canyons Mallorcas.' },
  nav: { torrentes: 'Schluchten', seguridad: 'Sicherheit', openMenu: 'Menü öffnen' },
  search: {
    headerPlaceholder: 'Schlucht, Gebiet oder Schwierigkeit suchen…',
    heroPlaceholder: 'Nach Name, Gebiet oder Schwierigkeit suchen…',
    livePlaceholder: 'Live filtern…',
  },
  home: {
    badge: 'Serra de Tramuntana · Mallorca',
    titlePre: 'Technischer Guide für ',
    titleHighlight: 'Schluchten',
    titlePost: ' und Canyons',
    subtitle:
      'Technische Datenblätter, Topos und echte Fotos der bekanntesten Canyoning-Abstiege der Insel. Abseilstellen, Wasserstand, Zeiten und Koordinaten - vor Ort geprüft.',
    statsCount: 'dokumentierte Schluchten',
    statsTopos: 'Original-Topos',
    sectionTitle: 'Alle Abstiege',
    sectionSubtitle: 'Filtere nach Gebiet, Schwierigkeit oder Charakter der Tour.',
  },
  discover: {
    badge: 'Entdecken',
    title: 'Entdecke die Schluchten Mallorcas',
    body: 'Kalksteinlandschaften, kristallklare Becken und Abseilstellen zwischen Felswänden. Jede Schlucht enthält Topos, echte Fotos und vor Ort geprüfte technische Daten, damit du deinen Abstieg sicher planen kannst.',
    ctaPrimary: 'Alle Abstiege ansehen',
    ctaSecondary: 'Sicherheit & Vorschriften',
  },
  filters: { zona: 'Gebiet', dificultad: 'Schwierigkeit', caracter: 'Charakter', todos: 'Alle', empty: 'Keine Schlucht passt zu diesen Filtern. Entferne einen davon.' },
  caracterTags: { acuatico: 'Nass', vertical: 'Vertikal', verano: 'Sommer', coleccion: 'Kollektion' },
  card: { rapelMax: 'Max. Abseilen' },
  ficha: {
    title: 'Technisches Datenblatt',
    rapelMaximo: 'Max. Abseiltiefe',
    cuerdas: 'Empfohlene Seile',
    longitud: 'Länge',
    desnivel: 'Höhenunterschied',
    caudal: 'Wasserstand',
    neopreno: 'Neopren',
    tiempos: 'Richtzeiten',
    aproximacion: 'Zustieg',
    descenso: 'Abstieg',
    retorno: 'Rückweg',
    total: 'Gesamt',
    coordenadas: 'GPS-Koordinaten',
    regulacion: 'Genehmigungen & Vorschriften',
    verMapa: 'In Maps öffnen',
    copiarCoords: 'Kopieren',
    copiado: 'Kopiert!',
  },
  topo: { titleOne: 'Topo / Skizze', titleMany: 'Topos / Skizzen', tapToZoom: 'Tippen zum Vergrößern' },
  gallery: { title: 'Fotogalerie' },
  detail: { back: 'Alle Schluchten' },
  footer: {
    tagline:
      'Technischer und visueller Guide für die Schluchten der Serra de Tramuntana. Referenzinformationen - kein Ersatz für die Einschätzung vor Ort durch eine qualifizierte Fachperson.',
    emergencias: 'Notruf',
    emergenciasGenerales: 'Allgemeiner Notruf',
    greim: 'GREIM (Guardia Civil)',
    ibsalut: 'IB-SALUT / SAMU 061',
    greimDescription:
      'Das GREIM (Bergrettungs- und Eingreifgruppe der Guardia Civil) ist die spezialisierte Einheit für Schlucht- und Bergrettungen in der Serra de Tramuntana. Bei jedem ernsten Unfall zuerst die 112 anrufen.',
    disclaimerTitle: 'Haftungshinweis',
    disclaimerPre: 'Canyoning ist eine Risikoaktivität. Die Bedingungen (Wasserstand, Wetter, Zustand der fest installierten Ausrüstung) ändern sich ständig. Bitte immer die ',
    disclaimerLink: 'Protokolle und Vorschriften',
    disclaimerPost: ' konsultieren und ohne nachgewiesene technische Erfahrung eine professionelle Führung buchen.',
    copyright: 'Mallorca Canyons. Nur zu Informationszwecken, nicht kommerziell.',
    note: 'Abstiege vor Ort geprüft · Angaben können sich saisonal ändern',
  },
  safety: {
    badge: 'Sicherheit',
    title: 'Sicherheit und Vorschriften',
    intro:
      'Canyoning ist eine Aktivität mit objektivem Risiko. Dieser Guide dient als Referenz- und Planungsmaterial: Er ersetzt weder technische Ausbildung noch die Einschätzung vor Ort oder die Buchung professioneller Guides, wenn angebracht.',
    emergencyTitle: 'Notrufnummern',
    emergencyUe: 'Notruf (EU)',
    emergencyGreim: 'GREIM · Guardia Civil',
    emergencyIbsalut: 'IB-Salut / SAMU',
    emergencyNote:
      'Das GREIM (Bergrettungs- und Eingreifgruppe der Guardia Civil) ist die spezialisierte Einheit für Schlucht- und Bergrettungen in der Serra de Tramuntana. Bei jedem ernsten Unfall zuerst die 112 anrufen.',
    materialTitle: 'Pflicht- / Empfehlungsausrüstung',
    material: [
      'An Wasserstand und Jahreszeit angepasster Neoprenanzug (3-5mm, Ganzkörperanzug in kalten oder dunklen Schluchten)',
      'Zertifizierter Helm für die gesamte Tour',
      'Canyoning-Gurt + Abseilausrüstung (selbstbremsendes Abseilgerät, Karabiner, Verankerungsschlinge)',
      'Canyoning-spezifische dynamische/statische Seile gemäß dem Datenblatt jeder Schlucht',
      'Zusätzliches Rettungsseil für Rettungsmanöver',
      'Geschlossenes Schuhwerk mit guter Haftung (Neoprensocken mit Sohle oder Canyoning-Schuhe)',
      'Doppeltes wasserdichtes Beleuchtungssystem in Schluchten mit dunklen Abschnitten (z. B. Sa Fosca)',
      'Pfeife, Rettungsdecke und wasserdichtes Erste-Hilfe-Set',
      'Mobiltelefon in wasserdichter Hülle mit ausreichend Akku',
    ],
    protocolTitle: 'Verhaltensprotokoll',
    protocol: [
      {
        title: 'Vor dem Einstieg',
        body: 'Wettervorhersage der letzten 48h und des aktuellen Tages prüfen (AEMET). Bei Gewitterwarnung, kürzlichem Starkregen oder steigendem Wasserstand die Aktivität absagen. Eine Vertrauensperson über Route und geschätzte Ausstiegszeit informieren.',
      },
      {
        title: 'Während des Abstiegs',
        body: 'Immer in der Gruppe vorgehen, nie allein. Verankerungen und Zustand der fest installierten Ausrüstung vor Belastung prüfen. Vor jedem Sprung die Wassertiefe kontrollieren. Ständigen Sicht-/Sprechkontakt zwischen den Gruppenmitgliedern halten.',
      },
      {
        title: 'Im Notfall',
        body: 'Bei Verletzten: Bereich sichern, Erste Hilfe leisten und Möglichkeit der Selbstrettung prüfen. Falls eine Evakuierung nötig ist, die 112 anrufen und dabei den Namen der Schlucht, den ungefähren Abschnitt und die Anzahl betroffener Personen angeben. In Bereichen ohne Netzempfang ein Gruppenmitglied losschicken, um Empfang zu finden oder Hilfe zu holen.',
      },
    ],
    permitsTitle: 'Genehmigungen und Vorschriften · Medi Ambient',
    permitsBody:
      'Mehrere Schluchten der Serra de Tramuntana verlaufen durch geschützte Naturgebiete und erfordern eine vorherige Genehmigung oder verantwortliche Erklärung bei der Conselleria de Medi Ambient i Territori der balearischen Regierung, insbesondere während der Brutzeit von Felsenvögeln (in der Regel zwischen Januar und Juli, je nach Art und Schlucht unterschiedlich). Das Datenblatt jeder Schlucht prüfen und die entsprechende Genehmigung vor der Aktivität einholen.',
    permitsLink: 'Portal der Regierung der Balearen',
  },
  notFound: {
    title: 'Schlucht nicht gefunden',
    subtitle: 'Diese Seite existiert nicht oder der Abstieg ist noch nicht dokumentiert.',
    back: 'Zurück zur Übersicht',
  },
  coordLabels: {
    parking: 'Parkplatz',
    parking_superior: 'Oberer Parkplatz',
    parking_inferior: 'Unterer Parkplatz',
    inicio: 'Start',
    final: 'Ende',
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en, de };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
