/* ============ ZALOTRON — config.js ============
   Datos que cambian seguido. Editá acá: el sitio los lee de este archivo. */
const CONFIG = {
  // color de marca: todos los colores del sitio se derivan de este (el picker de la nav lo pisa solo para quien lo usa)
  brandColor: '#d4ff3a',

  /* elementos flotantes de fondo (parallax). z = multiplicador de scroll de cada uno:
       1 = se mueve con la página · <1 = más lejos (más lento y chico) · >1 = más cerca (más rápido y grande) */
  floaters: {
    count: 128,        // cantidad en escritorio
    countMobile: 30,  // cantidad en pantallas de menos de 760px
    zMin: .3,         // profundidad del más lejano
    zMax: 1.9,        // profundidad del más cercano
    blur: 2,          // px de desenfoque por cada unidad que z se aleja de 1 (z = 1 queda nítido)
  },

  /* glitch de caracteres con la onda del click: al pasar el anillo, algunos caracteres de los textos se cambian un momento
     por caracteres random y vuelven (no mueve el layout). Más fuerte cerca del click; baja con la distancia */
  textGlitch: {
    enabled: true,
    // caracteres de reemplazo (se elige uno al azar por carácter): letras, números y glifos
    chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}=+*^?#Δ',
    duration: 250,     // ms que dura el glitch en cada texto
    amount: .7,        // fracción máx. de caracteres cambiados, pegado al click (0–1)
    minAmount: .04,    // fracción mínima, aunque esté lejos del click
    refreshFrames: 3,  // cada cuántos frames se re-sortean los glifos (1 = cada frame, más nervioso)
  },

  // números de la sección Perfil
  startYear: 2006,   // año en que arrancaste: "años en la cancha" = año actual − startYear (se actualiza solo)
  projects: 80,      // proyectos entregados (se muestra con +)
  // "tecnologías en uso" se calcula solo: cantidad de items únicos sumando todos los stacks (más abajo)

  // num para wa.me: código país 54 + 9 (celular) + número sin 0 ni 15 · label: cómo se muestra
  email: 'gonzalo.loisotto@gmail.com',
  whatsapp: { num: '5491139490180', label: '+54 9 11 3949-0180' },

  // cintas animadas de la sección Stack: las dos usan esta lista (arriba rellena, abajo en contorno, en sentidos opuestos)
  marquee: ['TypeScript', 'React', 'Three.js', 'WebGL', 'Node', 'Python', 'GSAP', 'After Effects', 'Blender', 'Figma', 'Unity', 'TouchDesigner'],

  /* stacks (tarjetas de la sección Stack): se muestran en este orden, numeradas solas.
       code: sigla grande de la tarjeta · cat: categoría · lvl: nivel 0–10 (la barrita) · items: tecnologías (tags)
     cat e items aceptan string o { es, en, pt, fr, it, de }. */
  stacks: [
    { code: 'FE', cat: 'Frontend',    lvl: 9, items: ['TypeScript', 'React', 'Next.js', 'Three.js', 'GSAP', 'WebGL'] },
    { code: 'BE', cat: 'Backend',     lvl: 7, items: ['Node.js', 'Python', 'PostgreSQL', 'REST / GraphQL', 'Docker'] },
    { code: 'MM', cat: 'Multimedia',  lvl: 9, items: ['After Effects', 'Photoshop', 'Illustrator', 'Premiere', 'Blender'] },
    { code: 'IX', cat: 'Interactive', lvl: 8, items: ['Unity', 'TouchDesigner', 'Shaders', 'Canvas', { es: 'Instalaciones', en: 'Installations', pt: 'Instalações', it: 'Installazioni', de: 'Installationen' }] },
  ],

  /* experiencia laboral (sección Trayectoria). Agregá objetos y se arma solo, ordenado del más nuevo al más viejo.
       year:     [desde, hasta] · sin "hasta" ([2022]) = actual, se muestra "hoy" en cada idioma
       position: puesto · company: empresa · info: descripción corta
     Cada texto puede ser un string (igual en todos los idiomas) o { es, en, pt, fr, it, de }; si falta un idioma, cae a en. */
  // TODO: reemplazar con tu trayectoria real
  experience: [
    {
      year: [2022],
      position: 'Developer & Multimedia Designer',
      company: 'Amaze',
      info: {
        es: 'Experiencias digitales de punta a punta: concepto, diseño, motion y código en producción.',
        en: 'End-to-end digital experiences: concept, design, motion and production code.',
        pt: 'Experiências digitais de ponta a ponta: conceito, design, motion e código em produção.',
        fr: 'Expériences digitales de bout en bout : concept, design, motion et code en production.',
        it: 'Esperienze digitali dall\'idea al rilascio: concept, design, motion e codice in produzione.',
        de: 'Digitale Erlebnisse von A bis Z: Konzept, Design, Motion und Code in Produktion.',
      },
    },
    {
      year: [2019, 2022],
      position: 'Creative Developer',
      company: { es: 'Estudio X', en: 'Studio X', pt: 'Estúdio X' },
      info: {
        es: 'Sitios interactivos, WebGL y campañas para marcas. Puente entre diseño y desarrollo.',
        en: 'Interactive sites, WebGL and brand campaigns. The bridge between design and development.',
        pt: 'Sites interativos, WebGL e campanhas para marcas. A ponte entre design e desenvolvimento.',
        fr: 'Sites interactifs, WebGL et campagnes pour des marques. Le pont entre design et développement.',
        it: 'Siti interattivi, WebGL e campagne per brand. Il ponte tra design e sviluppo.',
        de: 'Interaktive Websites, WebGL und Markenkampagnen. Die Brücke zwischen Design und Entwicklung.',
      },
    },
    {
      year: [2016, 2019],
      position: { es: 'Diseñador Multimedia', en: 'Multimedia Designer', pt: 'Designer Multimídia', fr: 'Designer Multimédia', it: 'Designer Multimediale', de: 'Multimedia-Designer' },
      company: 'Freelance',
      info: {
        es: 'Identidad, animación y video para clientes de cultura, tech y entretenimiento.',
        en: 'Identity, animation and video for culture, tech and entertainment clients.',
        pt: 'Identidade, animação e vídeo para clientes de cultura, tech e entretenimento.',
        fr: 'Identité, animation et vidéo pour des clients culture, tech et divertissement.',
        it: 'Identità, animazione e video per clienti di cultura, tech e intrattenimento.',
        de: 'Identity, Animation und Video für Kunden aus Kultur, Tech und Entertainment.',
      },
    },
    {
      year: [2012, 2016],
      position: { es: 'Diseño Multimedial', en: 'Multimedia Design', pt: 'Design Multimídia', fr: 'Design Multimédia', it: 'Design Multimediale', de: 'Multimedia-Design' },
      company: { es: 'Universidad', en: 'University', pt: 'Universidade', fr: 'Université', it: 'Università', de: 'Universität' },
      info: {
        es: 'Formación en diseño, imagen en movimiento e interactividad.',
        en: 'Studies in design, moving image and interactivity.',
        pt: 'Formação em design, imagem em movimento e interatividade.',
        fr: 'Formation en design, image en mouvement et interactivité.',
        it: 'Formazione in design, immagine in movimento e interattività.',
        de: 'Studium in Design, Bewegtbild und Interaktivität.',
      },
    },
  ],

  // perfiles: se muestran en este orden. name con ícono incluido: GitHub, LinkedIn, Behance, Instagram
  links: [
    { name: 'GitHub',    url: 'https://github.com/Zalotron' },
    { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/zalotron' },
    { name: 'Behance',   url: 'https://www.behance.net/zalotron' },
    { name: 'Instagram', url: 'https://www.instagram.com/zalotron' },
  ],
};
