/* ============ ZALOTRON — config.js ============
   Datos que cambian seguido. Editá acá: el sitio los lee de este archivo. */
const CONFIG = {
  // color de marca: todos los colores del sitio se derivan de este (el picker de la nav lo pisa solo para quien lo usa)
  brandColor: '#fe4d4d',

  /* elementos flotantes de fondo (parallax). z = multiplicador de scroll de cada uno:
       1 = se mueve con la página · <1 = más lejos (más lento y chico) · >1 = más cerca (más rápido y grande) */
  floaters: {
    count: 128,        // cantidad en escritorio
    countMobile: 30,  // cantidad en pantallas de menos de 760px
    zMin: .3,         // profundidad del más lejano
    zMax: 1.9,        // profundidad del más cercano
    blur: 2,          // px de desenfoque por cada unidad que z se aleja de 1 (z = 1 queda nítido)
  },

  /* granulado de TV en movimiento sobre los rellenos (letras, tarjetas, botones: todo lo claro o de color).
     Sobre el fondo oscuro casi no se nota */
  fillGrain: {
    enabled: true,
    amount: .22, // intensidad: cuánto oscurecen los granos (0 = nada, 1 = máximo)
    fps: 16,     // cambios de grano por segundo
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
  marquee: ['TypeScript', 'React', 'Three.js', 'WebGL', 'Node', 'Python', 'GSAP', 'After Effects', 'Blender', '3D Max', 'Unreal Engine', 'TouchDesigner'],

  /* stacks (tarjetas de la sección Stack): se muestran en este orden, numeradas solas.
       code: sigla grande de la tarjeta · cat: categoría · lvl: nivel 0–10 (la barrita) · items: tecnologías (tags)
     cat e items aceptan string o { es, en, pt, fr, it, de }. */
  stacks: [
    { code: 'FE', cat: 'Frontend',    lvl: 9, items: ['TypeScript', 'React', 'Next.js', 'Three.js', 'GSAP', 'WebGL'] },
    { code: 'BE', cat: 'Backend',     lvl: 7, items: ['Node.js', 'Python', 'PostgreSQL', 'REST / GraphQL', 'Docker'] },
    { code: 'MM', cat: 'Multimedia',  lvl: 9, items: ['After Effects', 'Photoshop', 'Illustrator', 'Premiere', 'Blender', '3D Max'] },
    { code: 'IX', cat: 'Interactive', lvl: 8, items: ['Unreal Engine', 'TouchDesigner', 'Shaders', 'Canvas', 'OBS'] },
  ],

  /* experiencia laboral (sección Trayectoria). Agregá objetos y se arma solo, ordenado del más nuevo al más viejo.
       year:     [desde, hasta] · sin "hasta" ([2022]) = actual, se muestra "hoy" en cada idioma
       position: puesto · company: empresa · info: descripción corta
     Cada texto puede ser un string (igual en todos los idiomas) o { es, en, pt, fr, it, de }; si falta un idioma, cae a en. */
  experience: [
    {
      year: [2024],
      position: {
        es: 'Artista IA y Desarrollador de Software',
        en: 'AI Artist & Software Developer',
        pt: 'Artista IA e Desenvolvedor de Software',
        fr: 'Artiste IA et Développeur logiciel',
        it: 'Artista IA e Sviluppatore software',
        de: 'KI-Artist & Softwareentwickler',
      },
      company: 'Amaze',
      info: {
        es: 'Desarrollo e investigación, Artista visual, Motion graphics, Diseño de workflows de trabajo, Desarrollo de IA y herramientas para uso interno.',
        en: 'Research and development, Visual artist, Motion graphics, Workflow design, AI development and internal tools.',
        pt: 'Desenvolvimento e pesquisa, Artista visual, Motion graphics, Design de workflows de trabalho, Desenvolvimento de IA e ferramentas para uso interno.',
        fr: 'Recherche et développement, Artiste visuel, Motion design, Conception de workflows, Développement d\'IA et d\'outils internes.',
        it: 'Sviluppo e ricerca, Artista visivo, Motion graphics, Progettazione di workflow, Sviluppo di IA e strumenti per uso interno.',
        de: 'Entwicklung und Forschung, Visual Artist, Motion Graphics, Workflow-Design, KI-Entwicklung und Tools für den internen Einsatz.',
      },
    },
    {
      year: [2022, 2024],
      position: {
        es: 'Artista IA y Desarrollador de Software',
        en: 'AI Artist & Software Developer',
        pt: 'Artista IA e Desenvolvedor de Software',
        fr: 'Artiste IA et Développeur logiciel',
        it: 'Artista IA e Sviluppatore software',
        de: 'KI-Artist & Softwareentwickler',
      },
      company: 'getWonder',
      info: {
        es: 'Desarrollo e investigación, Artista visual, Motion graphics, Diseño de workflows de trabajo y Desarrollo de herramientas para uso interno.',
        en: 'Research and development, Visual artist, Motion graphics, Workflow design and Internal tool development.',
        pt: 'Desenvolvimento e pesquisa, Artista visual, Motion graphics, Design de workflows de trabalho e Desenvolvimento de ferramentas para uso interno.',
        fr: 'Recherche et développement, Artiste visuel, Motion design, Conception de workflows et Développement d\'outils internes.',
        it: 'Sviluppo e ricerca, Artista visivo, Motion graphics, Progettazione di workflow e Sviluppo di strumenti per uso interno.',
        de: 'Entwicklung und Forschung, Visual Artist, Motion Graphics, Workflow-Design und Entwicklung interner Tools.',
      },
    },
    {
      year: [2018, 2022],
      position: 'Streamer',
      company: 'Twitch',
      info: {
        es: 'Programación y Producción de herramientas en directo.',
        en: 'Programming and Production of tools, live.',
        pt: 'Programação e Produção de ferramentas ao vivo.',
        fr: 'Programmation et Production d\'outils en direct.',
        it: 'Programmazione e Produzione di strumenti in diretta.',
        de: 'Programmierung und Produktion von Tools im Livestream.',
      },
    },
    {
      year: [2015, 2022],
      position: {
        es: 'Artista de efectos visuales',
        en: 'VFX Artist',
        pt: 'Artista de efeitos visuais',
        fr: 'Artiste effets visuels',
        it: 'Artista di effetti visivi',
        de: 'VFX-Artist',
      },
      company: 'LUMMA, 4D E-Motion',
      info: {
        es: 'Animación 3D y Edición de video.',
        en: '3D animation and Video editing.',
        pt: 'Animação 3D e Edição de vídeo.',
        fr: 'Animation 3D et Montage vidéo.',
        it: 'Animazione 3D e Montaggio video.',
        de: '3D-Animation und Videoschnitt.',
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
