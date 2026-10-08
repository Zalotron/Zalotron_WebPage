/* ============ ZALOTRON — main.js ============
   Datos de contacto, links y color de marca: config.js.
   El contenido vive en CV. Editá acá y listo.
   Textos traducibles: { es: '…', en: '…' } (un string suelto vale para todos los idiomas).
   Textos de interfaz: I18N, más abajo. */

// tecnologías en uso: lista de items únicos sumando todos los stacks de config.js (sin distinguir mayúsculas;
// un item traducido { es, en, … } cuenta una vez, por su versión en inglés)
const TECHS = [...new Map(CONFIG.stacks.flatMap(s => s.items).map(t => {
  const name = typeof t === 'string' ? t : t.en ?? t.es;
  return [name.toLowerCase(), t];
})).values()];

const CV = {
  name: ['GONZALO', 'LOISOTTO'],
  alias: 'ZALOTRON',
  location: 'La Plata, AR — 34.92°S 57.95°W',
  roles: ['software developer', 'multimedia designer', 'creative technologist', 'motion & interaction', 'pixel pusher'],
  // palabras con * se resaltan
  statement: {
    es: 'Escribo *código* y diseño *experiencias.* Lo interesante pasa justo donde las dos cosas se cruzan.',
    en: 'I write *code* and design *experiences.* The interesting part happens right where the two meet.',
    pt: 'Escrevo *código* e desenho *experiências.* O interessante acontece bem onde as duas coisas se cruzam.',
    fr: 'J\'écris du *code* et je conçois des *expériences.* Le plus intéressant se passe là où les deux se croisent.',
    it: 'Scrivo *codice* e progetto *esperienze.* La parte interessante succede proprio dove le due cose si incrociano.',
    de: 'Ich schreibe *Code* und gestalte *Erlebnisse.* Das Spannende passiert genau dort, wo sich beides kreuzt.',
  },
  stats: [
    { n: new Date().getFullYear() - CONFIG.startYear, s: '+', l: { es: 'años en la cancha', en: 'years in the game', pt: 'anos de estrada', fr: 'ans sur le terrain', it: 'anni sul campo', de: 'Jahre Erfahrung' } },
    { n: CONFIG.projects, s: '+', l: { es: 'proyectos entregados', en: 'projects shipped', pt: 'projetos entregues', fr: 'projets livrés', it: 'progetti consegnati', de: 'abgeschlossene Projekte' } },
    { n: TECHS.length, s: '', l: { es: 'tecnologías en uso', en: 'technologies in use', pt: 'tecnologias em uso', fr: 'technologies utilisées', it: 'tecnologie in uso', de: 'Technologien im Einsatz' } },
    { inf: true,     l: { es: 'cafés', en: 'coffees', pt: 'cafés', fr: 'cafés', it: 'caffè', de: 'Kaffees' } },
  ],
  // las tarjetas del stack están en config.js (stacks)
  // la trayectoria (experiencia laboral) está en config.js
  // TODO: proyectos reales (url opcional) · shift = grados de hue respecto a --BRAND_COLOR
  projects: [
    { title: { es: 'Proyecto Nébula', en: 'Project Nebula', pt: 'Projeto Nébula', fr: 'Projet Nébuleuse', it: 'Progetto Nebula', de: 'Projekt Nebula' },
      type: 'Web / WebGL', year: '2026', url: '#', shift: -1,
      desc: {
        es: 'Experiencia 3D en tiempo real para lanzamiento de producto.',
        en: 'Real-time 3D experience for a product launch.',
        pt: 'Experiência 3D em tempo real para lançamento de produto.',
        fr: 'Expérience 3D en temps réel pour un lancement produit.',
        it: 'Esperienza 3D in tempo reale per il lancio di un prodotto.',
        de: 'Echtzeit-3D-Erlebnis für einen Produktlaunch.',
      } },
    { title: 'Signal / Noise', type: { es: 'Instalación', en: 'Installation', pt: 'Instalação', it: 'Installazione' }, year: '2025', url: '#', shift: 112.9,
      desc: {
        es: 'Pieza audiovisual reactiva al sonido del espacio.',
        en: 'Audiovisual piece that reacts to the sound of the room.',
        pt: 'Peça audiovisual que reage ao som do ambiente.',
        fr: 'Pièce audiovisuelle qui réagit au son de l\'espace.',
        it: 'Opera audiovisiva che reagisce al suono dell\'ambiente.',
        de: 'Audiovisuelles Werk, das auf den Klang des Raums reagiert.',
      } },
    { title: 'Grid Systems', type: 'Design System', year: '2025', url: '#', shift: 187,
      desc: {
        es: 'Sistema de diseño + librería de componentes para producto.',
        en: 'Design system + component library for a product.',
        pt: 'Design system + biblioteca de componentes para produto.',
        fr: 'Design system + bibliothèque de composants pour un produit.',
        it: 'Design system + libreria di componenti per prodotto.',
        de: 'Designsystem + Komponentenbibliothek für ein Produkt.',
      } },
    { title: 'Kinetic Type', type: 'Motion', year: '2024', url: '#', shift: -55.1,
      desc: {
        es: 'Serie de tipografía cinética generativa.',
        en: 'A series of generative kinetic typography.',
        pt: 'Série de tipografia cinética generativa.',
        fr: 'Série de typographie cinétique générative.',
        it: 'Serie di tipografia cinetica generativa.',
        de: 'Serie generativer kinetischer Typografie.',
      } },
    { title: 'Dashboard Ops', type: 'App / Fullstack', year: '2024', url: '#', shift: 67,
      desc: {
        es: 'Panel en tiempo real con Node, websockets y dataviz.',
        en: 'Real-time dashboard with Node, websockets and dataviz.',
        pt: 'Painel em tempo real com Node, websockets e dataviz.',
        fr: 'Dashboard en temps réel avec Node, websockets et dataviz.',
        it: 'Dashboard in tempo reale con Node, websocket e dataviz.',
        de: 'Echtzeit-Dashboard mit Node, Websockets und Dataviz.',
      } },
  ],
  // íconos de redes (path SVG 24x24, simple-icons), por nombre en minúscula; los links están en config.js
  icons: {
    github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    behance: 'M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z',
    instagram: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  },
  // mensaje precargado de WhatsApp (el número está en config.js)
  waMsg: {
    es: '¡Hola Gonzalo! Vi tu portfolio y quería hablar con vos.',
    en: 'Hi Gonzalo! I saw your portfolio and wanted to get in touch.',
    pt: 'Oi Gonzalo! Vi seu portfólio e queria conversar com você.',
    fr: 'Salut Gonzalo ! J\'ai vu ton portfolio et j\'aimerais en parler avec toi.',
    it: 'Ciao Gonzalo! Ho visto il tuo portfolio e volevo parlarti.',
    de: 'Hallo Gonzalo! Ich habe dein Portfolio gesehen und wollte mit dir sprechen.',
  },
};
// links de perfiles (config.js) + su ícono (CV.icons); una red sin ícono se muestra solo con el nombre
const LINKS = CONFIG.links.map(({ name, url }) => ({ l: name, u: url, i: CV.icons[name.toLowerCase()] }));
// trayectoria (config.js), del más nuevo al más viejo; year sin "hasta" = trabajo actual
const EXP = [...CONFIG.experience].sort((a, b) => b.year[0] - a.year[0] || (b.year[1] ?? Infinity) - (a.year[1] ?? Infinity));

/* ---------------- textos de interfaz ----------------
   Para sumar un idioma: agregar su bloque acá (y su código en los { es, en } de CV, si no cae a es). */
const I18N = {
  es: {
    'exp.now': 'hoy',
    'nav.profile': 'Perfil', 'nav.stack': 'Stack', 'nav.exp': 'Trayectoria', 'nav.projects': 'Proyectos', 'nav.contact': 'Contacto',
    'hero.status': 'disponible para proyectos',
    'proj.end': '// fin del reel', 'proj.more': '¿Querés ver más?', 'proj.write': 'Escribime →',
    'cta': 'HABLEMOS',
    'contact.email': 'email — click para copiar', 'contact.wa': 'whatsapp — escribime directo',
    'foot.made': 'hecho a mano · sin templates', 'foot.top': '↑ volver arriba',
    'cur.top': 'top', 'cur.color': 'color', 'cur.reset': 'reset', 'cur.down': 'bajar', 'cur.view': 'ver', 'cur.copy': 'copiar', 'cur.chat': 'chatear', 'cur.open': 'abrir',
    'aria.reset': 'Restaurar color', 'aria.lang': 'Idioma',
    'toast.copied': 'mail copiado ✓', 'copied': 'copiado ✓',
    'boot': [['init', 'kernel zltrn 26.10'], ['mount', '/dev/creatividad'], ['load', 'shaders · fonts · coffee'], ['link', 'diseño ⇄ código'], ['check', 'pixel perfect'], ['ready', 'bienvenido']],
    'term.ph': 'escribí help', 'term.hello': 'ZLTRN/OS v26.10 — escribí <span class="a">help</span>', 'term.cmds': 'comandos',
    'term.opening': 'abriendo', 'term.nice': 'buen intento. probá', 'term.granted': '<span class="a">permiso concedido.</span> mandame un mail y arrancamos \\(^o^)/',
    'term.connecting': 'conectando con linkedin ...', 'term.ls': 'perfil/  stack/  trayectoria/  proyectos/  contacto/  .secretos',
    'term.secret': 'el mejor código es el que no escribiste.', 'term.nofile': 'cat: falta archivo', 'term.rm': 'ni en pedo.',
    'term.exit': 'no hay salida. solo más pixels.', 'term.notfound': 'comando no encontrado', 'term.lang': 'idioma',
  },
  en: {
    'exp.now': 'now',
    'nav.profile': 'Profile', 'nav.stack': 'Stack', 'nav.exp': 'Experience', 'nav.projects': 'Projects', 'nav.contact': 'Contact',
    'hero.status': 'available for projects',
    'proj.end': '// end of reel', 'proj.more': 'Want to see more?', 'proj.write': 'Get in touch →',
    'cta': "LET'S TALK",
    'contact.email': 'email — click to copy', 'contact.wa': 'whatsapp — message me directly',
    'foot.made': 'handmade · no templates', 'foot.top': '↑ back to top',
    'cur.top': 'top', 'cur.color': 'color', 'cur.reset': 'reset', 'cur.down': 'down', 'cur.view': 'view', 'cur.copy': 'copy', 'cur.chat': 'chat', 'cur.open': 'open',
    'aria.reset': 'Reset color', 'aria.lang': 'Language',
    'toast.copied': 'email copied ✓', 'copied': 'copied ✓',
    'boot': [['init', 'kernel zltrn 26.10'], ['mount', '/dev/creativity'], ['load', 'shaders · fonts · coffee'], ['link', 'design ⇄ code'], ['check', 'pixel perfect'], ['ready', 'welcome']],
    'term.ph': 'type help', 'term.hello': 'ZLTRN/OS v26.10 — type <span class="a">help</span>', 'term.cmds': 'commands',
    'term.opening': 'opening', 'term.nice': 'nice try. try', 'term.granted': '<span class="a">permission granted.</span> drop me an email and let\'s get started \\(^o^)/',
    'term.connecting': 'connecting to linkedin ...', 'term.ls': 'profile/  stack/  experience/  projects/  contact/  .secrets',
    'term.secret': 'the best code is the code you never wrote.', 'term.nofile': 'cat: missing file', 'term.rm': 'not a chance.',
    'term.exit': 'there is no exit. only more pixels.', 'term.notfound': 'command not found', 'term.lang': 'language',
  },
  pt: {
    'exp.now': 'hoje',
    'nav.profile': 'Perfil', 'nav.stack': 'Stack', 'nav.exp': 'Trajetória', 'nav.projects': 'Projetos', 'nav.contact': 'Contato',
    'hero.status': 'disponível para projetos',
    'proj.end': '// fim do reel', 'proj.more': 'Quer ver mais?', 'proj.write': 'Fala comigo →',
    'cta': 'BORA FALAR',
    'contact.email': 'email — clique para copiar', 'contact.wa': 'whatsapp — fala direto comigo',
    'foot.made': 'feito à mão · sem templates', 'foot.top': '↑ voltar ao topo',
    'cur.top': 'topo', 'cur.color': 'cor', 'cur.reset': 'reset', 'cur.down': 'descer', 'cur.view': 'ver', 'cur.copy': 'copiar', 'cur.chat': 'conversar', 'cur.open': 'abrir',
    'aria.reset': 'Restaurar cor', 'aria.lang': 'Idioma',
    'toast.copied': 'email copiado ✓', 'copied': 'copiado ✓',
    'boot': [['init', 'kernel zltrn 26.10'], ['mount', '/dev/criatividade'], ['load', 'shaders · fonts · coffee'], ['link', 'design ⇄ código'], ['check', 'pixel perfect'], ['ready', 'bem-vindo']],
    'term.ph': 'digite help', 'term.hello': 'ZLTRN/OS v26.10 — digite <span class="a">help</span>', 'term.cmds': 'comandos',
    'term.opening': 'abrindo', 'term.nice': 'boa tentativa. tenta', 'term.granted': '<span class="a">permissão concedida.</span> me manda um email e a gente começa \\(^o^)/',
    'term.connecting': 'conectando ao linkedin ...', 'term.ls': 'perfil/  stack/  trajetoria/  projetos/  contato/  .segredos',
    'term.secret': 'o melhor código é o que você não escreveu.', 'term.nofile': 'cat: arquivo faltando', 'term.rm': 'nem pensar.',
    'term.exit': 'não tem saída. só mais pixels.', 'term.notfound': 'comando não encontrado', 'term.lang': 'idioma',
  },
  fr: {
    'exp.now': 'auj.',
    'nav.profile': 'Profil', 'nav.stack': 'Stack', 'nav.exp': 'Parcours', 'nav.projects': 'Projets', 'nav.contact': 'Contact',
    'hero.status': 'disponible pour des projets',
    'proj.end': '// fin du reel', 'proj.more': 'Envie d\'en voir plus ?', 'proj.write': 'Écris-moi →',
    'cta': 'PARLONS',
    'contact.email': 'email — clique pour copier', 'contact.wa': 'whatsapp — écris-moi directement',
    'foot.made': 'fait main · sans templates', 'foot.top': '↑ retour en haut',
    'cur.top': 'haut', 'cur.color': 'couleur', 'cur.reset': 'reset', 'cur.down': 'descendre', 'cur.view': 'voir', 'cur.copy': 'copier', 'cur.chat': 'discuter', 'cur.open': 'ouvrir',
    'aria.reset': 'Réinitialiser la couleur', 'aria.lang': 'Langue',
    'toast.copied': 'email copié ✓', 'copied': 'copié ✓',
    'boot': [['init', 'kernel zltrn 26.10'], ['mount', '/dev/créativité'], ['load', 'shaders · fonts · coffee'], ['link', 'design ⇄ code'], ['check', 'pixel perfect'], ['ready', 'bienvenue']],
    'term.ph': 'tape help', 'term.hello': 'ZLTRN/OS v26.10 — tape <span class="a">help</span>', 'term.cmds': 'commandes',
    'term.opening': 'ouverture de', 'term.nice': 'bien essayé. essaie', 'term.granted': '<span class="a">accès accordé.</span> envoie-moi un mail et on démarre \\(^o^)/',
    'term.connecting': 'connexion à linkedin ...', 'term.ls': 'profil/  stack/  parcours/  projets/  contact/  .secrets',
    'term.secret': 'le meilleur code est celui que tu n\'as pas écrit.', 'term.nofile': 'cat : fichier manquant', 'term.rm': 'même pas en rêve.',
    'term.exit': 'il n\'y a pas de sortie. que des pixels.', 'term.notfound': 'commande introuvable', 'term.lang': 'langue',
  },
  it: {
    'exp.now': 'oggi',
    'nav.profile': 'Profilo', 'nav.stack': 'Stack', 'nav.exp': 'Percorso', 'nav.projects': 'Progetti', 'nav.contact': 'Contatti',
    'hero.status': 'disponibile per progetti',
    'proj.end': '// fine del reel', 'proj.more': 'Vuoi vedere di più?', 'proj.write': 'Scrivimi →',
    'cta': 'PARLIAMO',
    'contact.email': 'email — clicca per copiare', 'contact.wa': 'whatsapp — scrivimi direttamente',
    'foot.made': 'fatto a mano · niente template', 'foot.top': '↑ torna su',
    'cur.top': 'su', 'cur.color': 'colore', 'cur.reset': 'reset', 'cur.down': 'giù', 'cur.view': 'vedi', 'cur.copy': 'copia', 'cur.chat': 'chatta', 'cur.open': 'apri',
    'aria.reset': 'Ripristina colore', 'aria.lang': 'Lingua',
    'toast.copied': 'email copiata ✓', 'copied': 'copiato ✓',
    'boot': [['init', 'kernel zltrn 26.10'], ['mount', '/dev/creatività'], ['load', 'shaders · fonts · coffee'], ['link', 'design ⇄ codice'], ['check', 'pixel perfect'], ['ready', 'benvenuto']],
    'term.ph': 'scrivi help', 'term.hello': 'ZLTRN/OS v26.10 — scrivi <span class="a">help</span>', 'term.cmds': 'comandi',
    'term.opening': 'apro', 'term.nice': 'bel tentativo. prova', 'term.granted': '<span class="a">permesso accordato.</span> mandami una mail e partiamo \\(^o^)/',
    'term.connecting': 'connessione a linkedin ...', 'term.ls': 'profilo/  stack/  percorso/  progetti/  contatti/  .segreti',
    'term.secret': 'il miglior codice è quello che non hai scritto.', 'term.nofile': 'cat: file mancante', 'term.rm': 'neanche per sogno.',
    'term.exit': 'non c\'è uscita. solo altri pixel.', 'term.notfound': 'comando non trovato', 'term.lang': 'lingua',
  },
  de: {
    'exp.now': 'heute',
    'nav.profile': 'Profil', 'nav.stack': 'Stack', 'nav.exp': 'Werdegang', 'nav.projects': 'Projekte', 'nav.contact': 'Kontakt',
    'hero.status': 'verfügbar für Projekte',
    'proj.end': '// ende des reels', 'proj.more': 'Mehr sehen?', 'proj.write': 'Schreib mir →',
    'cta': 'REDEN WIR',
    'contact.email': 'email — klicken zum Kopieren', 'contact.wa': 'whatsapp — schreib mir direkt',
    'foot.made': 'handgemacht · keine templates', 'foot.top': '↑ nach oben',
    'cur.top': 'top', 'cur.color': 'farbe', 'cur.reset': 'reset', 'cur.down': 'runter', 'cur.view': 'ansehen', 'cur.copy': 'kopieren', 'cur.chat': 'chatten', 'cur.open': 'öffnen',
    'aria.reset': 'Farbe zurücksetzen', 'aria.lang': 'Sprache',
    'toast.copied': 'email kopiert ✓', 'copied': 'kopiert ✓',
    'boot': [['init', 'kernel zltrn 26.10'], ['mount', '/dev/kreativität'], ['load', 'shaders · fonts · coffee'], ['link', 'design ⇄ code'], ['check', 'pixel perfect'], ['ready', 'willkommen']],
    'term.ph': 'tippe help', 'term.hello': 'ZLTRN/OS v26.10 — tippe <span class="a">help</span>', 'term.cmds': 'befehle',
    'term.opening': 'öffne', 'term.nice': 'netter versuch. probier', 'term.granted': '<span class="a">zugriff gewährt.</span> schick mir eine mail und wir legen los \\(^o^)/',
    'term.connecting': 'verbinde mit linkedin ...', 'term.ls': 'profil/  stack/  werdegang/  projekte/  kontakt/  .geheimnisse',
    'term.secret': 'der beste code ist der, den du nie geschrieben hast.', 'term.nofile': 'cat: datei fehlt', 'term.rm': 'auf keinen fall.',
    'term.exit': 'es gibt keinen ausgang. nur mehr pixel.', 'term.notfound': 'befehl nicht gefunden', 'term.lang': 'sprache',
  },
};
// nombre nativo de cada idioma (menú del selector) y países que lo reciben por IP; el resto → en
const LANGS = {
  es: { name: 'Español',   cc: 'AR BO CL CO CR CU DO EC ES GQ GT HN MX NI PA PE PR PY SV UY VE' },
  en: { name: 'English',   cc: '' },
  pt: { name: 'Português', cc: 'BR PT AO MZ CV GW ST TL MO' },
  fr: { name: 'Français',  cc: 'FR BE LU MC SN CI ML BF NE GN BJ TG CM GA CG CD MG HT DJ KM TD CF BI NC PF RE GP MQ GF YT PM WF BL MF TN DZ MA' },
  it: { name: 'Italiano',  cc: 'IT SM VA' },
  de: { name: 'Deutsch',   cc: 'DE AT CH LI' },
};

(() => {
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover:hover) and (pointer:fine)').matches;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const pad = (n) => String(n).padStart(2, '0');
// una letra por span; el espacio va duro para que no colapse dentro de un flex
const letters = w => [...w].map(c => `<span>${c === ' ' ? '&nbsp;' : c}</span>`).join('');
// idioma: elección guardada > idioma del navegador; después lang() lo ajusta por IP
const LANG_KEY = 'zltrn-lang';
let LANG = (() => {
  try { const s = localStorage.getItem(LANG_KEY); if (I18N[s]) return s; } catch {}
  const nav = (navigator.language || '').slice(0, 2).toLowerCase();
  return I18N[nav] ? nav : 'en';
})();
// si a un texto le falta el idioma, cae a en (y después a es)
const tx = v => v && typeof v === 'object' && !Array.isArray(v) ? v[LANG] ?? v.en ?? v.es : v; // { es, en, … } → texto
const i18n = k => I18N[LANG][k] ?? I18N.en[k] ?? I18N.es[k] ?? k;
const cvAt = path => tx(path.split('.').reduce((o, k) => o?.[k], { ...CV, exp: EXP, stacks: CONFIG.stacks }));  // 'projects.1.desc' / 'exp.0.info' → texto
// alto del documento cacheado: leer scrollHeight en cada frame fuerza un layout; se actualiza solo cuando cambia
const DOC = { h: document.documentElement.scrollHeight };
new ResizeObserver(() => DOC.h = document.documentElement.scrollHeight).observe(document.body);
// los colores viven en styles.css (todos derivados de --BRAND_COLOR); acá solo se leen ya resueltos → "r,g,b"
const rgbOf = (css, el) => {
  let v;
  if (el) v = getComputedStyle(el).color;
  else { const e = document.createElement('i'); e.style.color = css; document.body.appendChild(e); v = getComputedStyle(e).color; e.remove(); }
  const n = v.match(/-?[\d.]+(e-?\d+)?/gi).map(Number).slice(0, 3);
  return (v.startsWith('color(') ? n.map(c => c * 255) : n).map(Math.round).join(',');
};

/* ---------------- render ---------------- */
function render() {
  // nombre: una letra por span (tilt por letra, como el CTA)
  $('.hero-title').setAttribute('aria-label', CV.name.join(' '));
  CV.name.forEach((n, i) => $(`#name-${i + 1}`).innerHTML = letters(n));
  $('#hero-loc').textContent = CV.location;
  $('#email-addr').textContent = CONFIG.email;
  $('#year').textContent = new Date().getFullYear();

  // los textos que cambian con el idioma llevan data-cv (ruta en CV) o data-i18n (clave en I18N): setLang() los reescribe
  const cv = (path) => `data-cv="${path}"`;

  $('#stats').innerHTML = CV.stats.map((s, i) => `
    <div class="stat rv" style="--d:${i * .08}s">
      <div class="v">${s.inf ? '∞' : `<span class="cnt" data-to="${s.n}">0</span>${s.s ? `<sup>${s.s}</sup>` : ''}`}</div>
      <div class="l mono" ${cv(`stats.${i}.l`)}></div>
    </div>`).join('');

  const mq = CONFIG.marquee.map(t => `<span>${t}</span>`).join('');
  $$('.mq-track').forEach(t => t.innerHTML = mq + mq);

  $('#stack-grid').innerHTML = CONFIG.stacks.map((s, i) => `
    <article class="card rv" style="--d:${i * .08}s">
      <div class="card-top mono"><span>${pad(i + 1)}</span><span>lvl ${s.lvl}/10</span></div>
      <div class="card-code">${s.code}</div>
      <h3 ${cv(`stacks.${i}.cat`)}></h3>
      <div class="tags">${s.items.map((_, k) => `<span ${cv(`stacks.${i}.items.${k}`)}></span>`).join('')}</div>
      <div class="meter" style="margin-top:20px">${Array.from({ length: 10 }, (_, k) => `<i class="${k < s.lvl ? 'f' : ''}"></i>`).join('')}</div>
    </article>`).join('');

  $('#tl-items').innerHTML = EXP.map((e, i) => `
    <div class="tl-item rv">
      <div class="tl-yr">${e.year[0]}<small>→ ${e.year[1] ?? '<span data-i18n="exp.now"></span>'}</small></div>
      <div class="tl-body"><h3 ${cv(`exp.${i}.position`)}></h3><div class="org mono">@ <span ${cv(`exp.${i}.company`)}></span></div><p ${cv(`exp.${i}.info`)}></p></div>
      <div class="tl-hash mono">${Math.random().toString(16).slice(2, 9)}</div>
    </div>`).join('');

  $('#hs-track').innerHTML = CV.projects.map((p, i) => `
    <a class="proj" href="${p.url}" data-i18n-cursor="cur.view" target="${p.url === '#' ? '_self' : '_blank'}" rel="noopener">
      <div class="proj-in">
        <div class="proj-art"><canvas style="--shift:${p.shift}" data-seed="${i}"></canvas><span class="proj-idx">${pad(i + 1)}</span><span class="proj-big">${pad(i + 1)}</span></div>
        <div class="proj-info">
          <div class="row mono"><span ${cv(`projects.${i}.type`)}></span><span>${p.year}</span></div>
          <h3><span ${cv(`projects.${i}.title`)}></span><span class="arr">↗</span></h3>
          <p ${cv(`projects.${i}.desc`)}></p>
        </div>
      </div>
    </a>`).join('') + `
    <div class="proj-end"><span class="mono" style="color:var(--mut)" data-i18n="proj.end"></span><p><span data-i18n="proj.more"></span> <a href="#contacto" data-i18n="proj.write"></a></p></div>`;
  $('#hs-tot').textContent = pad(CV.projects.length);

  $('#wa-num').textContent = CONFIG.whatsapp.label;

  $('#links').innerHTML = LINKS.map(l => `<a href="${l.u}" target="_blank" rel="noopener" data-i18n-cursor="cur.open"><span class="lk">${l.i ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${l.i}"/></svg>` : ''}${l.l}</span><span>↗</span></a>`).join('');
  // click en una red / whatsapp: glitch de 2s con su logo materializándose, después abre (ctrl/cmd/middle-click abren directo)
  const glitchLink = (a, logo) => a.addEventListener('click', e => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button) return;
    e.preventDefault(); if (glitching) return;
    glitchOut(2000, () => openExt(a.href), logo);
  });
  $$('#links a').forEach((a, i) => glitchLink(a, LINKS[i].i));
  glitchLink($('#wa-btn'), $('.wa-ico path').getAttribute('d'));
}

/* ---------------- idioma ---------------- */
// aplica LANG a todo lo marcado; fx = scramble en los textos que cambian (cambio en vivo, no en la carga)
function setLang(l, { save = false, fx = false } = {}) {
  if (!I18N[l]) return;
  LANG = l; document.documentElement.lang = l;
  if (save) try { localStorage.setItem(LANG_KEY, l); } catch {}
  // un Scramble por elemento: si cambian de idioma rápido, el nuevo corta al anterior en vez de pelearse
  const put = (el, s) => {
    if (el._sc) cancelAnimationFrame(el._sc.raf);
    if (el.textContent === s) return;
    if (fx && !RM) (el._sc ||= new Scramble(el)).set(s); else el.textContent = s;
  };
  $$('[data-i18n]').forEach(el => put(el, i18n(el.dataset.i18n)));
  $$('[data-cv]').forEach(el => put(el, cvAt(el.dataset.cv)));
  $$('[data-i18n-cursor]').forEach(el => el.dataset.cursor = i18n(el.dataset.i18nCursor));
  $$('[data-i18n-label]').forEach(el => el.setAttribute('aria-label', i18n(el.dataset.i18nLabel)));
  $$('[data-i18n-ph]').forEach(el => el.placeholder = i18n(el.dataset.i18nPh));

  // statement: una palabra por span (el scrub de scroll las va prendiendo)
  $('#statement').innerHTML = tx(CV.statement).split(' ')
    .map(w => w.startsWith('*') ? `<span class="w hl">${w.replace(/\*/g, '')}</span>` : `<span class="w">${w}</span>`).join(' ');
  // CTA: una letra por span (tilt por letra)
  const cta = $('#big-cta'), word = i18n('cta');
  cta.setAttribute('aria-label', word);
  cta.innerHTML = letters(word);
  fitCta();
  $('#wa-btn').href = `https://wa.me/${CONFIG.whatsapp.num}?text=${encodeURIComponent(tx(CV.waMsg))}`;

  $('#lang-cur').textContent = l.toUpperCase();
  $$('.lang-menu button').forEach(b => b.setAttribute('aria-checked', b.dataset.lang === l));
  dispatchEvent(new Event('lang'));
}

// el CTA va en una línea en todos los idiomas: si la palabra se pasa del ancho, achica la fuente
function fitCta() {
  const c = $('#big-cta');
  c.style.fontSize = '';
  const over = c.scrollWidth / c.clientWidth;
  if (over > 1) c.style.fontSize = `${parseFloat(getComputedStyle(c).fontSize) / over}px`;
}

// carga: país por IP (LANGS[].cc; el resto → en); si el visitante ya eligió a mano, manda eso
function lang() {
  const byCC = {};
  for (const [l, { cc }] of Object.entries(LANGS)) cc.split(' ').filter(Boolean).forEach(c => byCC[c] = l);
  let chose = false, saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch {}

  // selector: botón con el idioma actual + menú con todos
  const box = $('.lang'), btn = $('.lang-btn'), menu = $('.lang-menu');
  menu.innerHTML = Object.entries(LANGS).map(([l, { name }]) =>
    `<li><button type="button" role="menuitemradio" data-lang="${l}" data-cursor="${l}"><b>${l.toUpperCase()}</b>${name}</button></li>`).join('');
  const toggle = open => { menu.hidden = !open; btn.setAttribute('aria-expanded', open); };
  btn.addEventListener('click', () => toggle(menu.hidden));
  menu.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    chose = true; toggle(false); setLang(b.dataset.lang, { save: true, fx: true });
  });
  addEventListener('pointerdown', e => { if (!box.contains(e.target)) toggle(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });

  setLang(LANG);
  addEventListener('resize', fitCta); document.fonts?.ready.then(fitCta);
  if (I18N[saved]) return;
  const apply = cc => { if (!chose && cc) setLang(byCC[cc] || 'en', { fx: !document.body.classList.contains('loading') }); };
  let cc = null;
  try { cc = sessionStorage.getItem('zltrn-cc'); } catch {}
  if (cc) return apply(cc);
  fetch('https://get.geojs.io/v1/ip/country.json', { signal: AbortSignal.timeout?.(3000) })
    .then(r => r.json())
    .then(({ country }) => { try { sessionStorage.setItem('zltrn-cc', country); } catch {} apply(country); })
    .catch(() => {}); // sin respuesta: queda el idioma del navegador
}

/* ---------------- text scramble ---------------- */
class Scramble {
  constructor(el) { this.el = el; this.chars = '!<>-_\\/[]{}=+*^?#01ZXΔ'; }
  set(text) {
    const old = this.el.textContent, len = Math.max(old.length, text.length);
    this.q = [];
    for (let i = 0; i < len; i++) {
      const s = Math.floor(Math.random() * 18), e = s + Math.floor(Math.random() * 18) + 4;
      this.q.push({ from: old[i] || '', to: text[i] || '', s, e });
    }
    cancelAnimationFrame(this.raf); this.f = 0;
    return new Promise(r => { this.res = r; this.tick(); });
  }
  tick = () => {
    let out = '', done = 0;
    for (const q of this.q) {
      if (this.f >= q.e) { done++; out += q.to; }
      else if (this.f >= q.s) {
        if (!q.c || Math.random() < .28) q.c = this.chars[Math.random() * this.chars.length | 0];
        out += `<span class="sc">${q.c}</span>`;
      } else out += q.from;
    }
    this.el.innerHTML = out;
    if (done === this.q.length) this.res();
    else { this.f++; this.raf = requestAnimationFrame(this.tick); }
  };
}

/* ---------------- loader ---------------- */
function boot() {
  const L = $('#loader');
  if (RM) { L.remove(); return Promise.resolve(); }
  const lines = $('.ld-lines'), count = $('.ld-count'), bar = $('.ld-bar i');
  const msgs = () => i18n('boot'); // se lee al imprimir cada línea: si el idioma llega por IP a mitad del boot, sigue en el nuevo
  const dur = 1700, t0 = performance.now();
  let shown = 0;
  return new Promise(res => {
    (function step(now) {
      const p = clamp((now - t0) / dur, 0, 1), e = 1 - Math.pow(1 - p, 3);
      count.textContent = String(Math.round(e * 100)).padStart(3, '0');
      bar.style.transform = `scaleX(${e})`;
      while (shown < msgs().length && p >= shown / msgs().length) {
        const [k, v] = msgs()[shown++];
        lines.insertAdjacentHTML('beforeend', `<div><b>[${k}]</b> ${v}</div>`);
      }
      if (p < 1) requestAnimationFrame(step);
      else setTimeout(() => { L.classList.add('done'); res(); setTimeout(() => L.remove(), 1200); }, 220);
    })(t0);
  });
}

/* ---------------- hero terrain ---------------- */
function terrain() {
  const c = $('#field'), x = c.getContext('2d');
  const COLS = 84, ROWS = 46, H = 3.2;
  // colores fijos + opacidad por globalAlpha (armar un rgba() por partícula y por frame es caro)
  let ACC, FG, ACC2, ERR;
  const colors = () => { [ACC, FG, ACC2, ERR] = ['acc', 'fg', 'acc2', 'err'].map(v => `rgb(${rgbOf(`var(--${v})`)})`); };
  colors(); addEventListener('brand', () => { colors(); if (!run || RM) frame(); });
  let w, h, dpr, f, cx, cy, t = 0, run = true, cDocX = 0, cDocY = 0;
  const m = { x: 0, y: 0, tx: 0, ty: 0, sx: -1e4, sy: -1e4 };
  // levantamiento por partícula: sube rápido hacia el mouse, cae con gravedad cuando se aleja
  const lift = new Float32Array(COLS * ROWS), vel = new Float32Array(COLS * ROWS), RISE = .3, G = .0007;
  // sacudón: cuando el anillo de la onda del click alcanza una partícula, empujón (px de pantalla) que vuelve con resorte
  const N = COLS * ROWS, ox = new Float32Array(N), oy = new Float32Array(N), vx = new Float32Array(N), vy = new Float32Array(N);
  const hit = new Int32Array(N); // id de la última onda que golpeó a cada partícula
  const KICK = 14, SPRING = .07, DAMP = .87;
  let shaking = false;
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = c.clientWidth; h = c.clientHeight;
    c.width = w * dpr; c.height = h * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0);
    f = Math.max(w, 700) * .85; cx = w / 2; cy = h * .52;
    // posición del canvas en el documento (cacheada: pedirla por frame fuerza un layout)
    const r = c.getBoundingClientRect(); cDocX = r.left + scrollX; cDocY = r.top + scrollY;
  };
  resize(); addEventListener('resize', resize);
  addEventListener('pointermove', e => {
    m.tx = e.clientX / w - .5; m.ty = e.clientY / h - .5; m.cx = e.clientX; m.cy = e.clientY;
  });
  new IntersectionObserver(([en]) => { run = en.isIntersecting; if (run) loop(); }).observe(c);

  const hgt = (X, Z, tt) =>
    Math.sin(X * .32 + tt * .6) * .55 + Math.sin(Z * .38 - tt * .9) * .5 + Math.sin((X + Z) * .16 + tt * .35) * .9 +
    Math.sin(Math.hypot(X, Z - 20) * .35 - tt * 1.2) * .35;

  function frame() {
    t += .012;
    m.x = lerp(m.x, m.tx, .05); m.y = lerp(m.y, m.ty, .05);
    const camX = m.x * 8, camH = H + m.y * -1.2;
    // mouse → mundo (relativo al canvas, que se mueve con el scroll)
    const cb = { left: cDocX - scrollX, top: cDocY - scrollY }; // rect del canvas en el viewport, sin leer layout
    if (m.cx !== undefined) { m.sx = m.cx - cb.left; m.sy = m.cy - cb.top; }
    let mx = 1e4, mz = 1e4;
    if (m.sy > cy + 4) { const zz = camH * f / (m.sy - cy); mz = zz - 2; mx = (m.sx - cx) * zz / f + camX; }
    x.clearRect(0, 0, w, h);
    // solo se cambia fillStyle cuando cambia el color; la opacidad va por globalAlpha
    let col = null;
    const paint = (cc, al) => { if (cc !== col) x.fillStyle = col = cc; x.globalAlpha = al; };
    let energy = 0;
    // onda del click: se lee en coords de viewport (el canvas puede estar scrolleado)
    const now = performance.now(), W = waves(now), FR = W ? fronts(now) : [];
    if (FR.length) shaking = true;
    for (let r = ROWS; r >= 1; r--) {
      const Z = r, zz = Z + 2, depth = 1 - r / ROWS;
      for (let k = 0; k < COLS; k++) {
        const X = k - COLS / 2;
        let y = hgt(X, Z, t);
        const d2 = (X - mx) ** 2 + (Z - mz) ** 2;
        const i = (r - 1) * COLS + k, target = Math.exp(-d2 / 14);
        if (target >= lift[i]) { lift[i] += (target - lift[i]) * RISE; vel[i] = 0; }
        else { vel[i] += G; lift[i] = Math.max(target, lift[i] - vel[i]); }
        const bump = lift[i];
        y += bump * 2.2 * (1 + Math.sin(t * 6) * .1);
        let sx = cx + (X - camX) * f / zz;
        let sy = cy + (camH - y) * f / zz;
        let sp = 0;
        if (shaking) {
          for (const a of FR) {
            if (a.id <= hit[i]) continue;
            const dx = sx + ox[i] + cb.left - a.x, dy = sy + oy[i] + cb.top - a.y, d = Math.hypot(dx, dy) || 1;
            if (d > a.r) continue; // todavía no le llegó
            // le llegó el anillo: empujón en el sentido de la onda + azar; más fuerte con la onda fresca y en las filas de adelante
            hit[i] = a.id;
            const p = KICK * (.4 + Math.random() * .8) * waveKick(d) * Math.min(2, f / zz / 60);
            const ang = Math.atan2(dy, dx) + (Math.random() - .5) * 1.6;
            vx[i] += Math.cos(ang) * p; vy[i] += Math.sin(ang) * p;
          }
          vx[i] = (vx[i] - ox[i] * SPRING) * DAMP; vy[i] = (vy[i] - oy[i] * SPRING) * DAMP;
          ox[i] += vx[i]; oy[i] += vy[i];
          sx += ox[i]; sy += oy[i];
          sp = Math.abs(vx[i]) + Math.abs(vy[i]);
          energy += sp + Math.abs(ox[i]) + Math.abs(oy[i]);
        }
        let split = 0;
        if (W) { const wv = W(sx + cb.left, sy + cb.top); sx += wv.dx; sy += wv.dy; split = wv.e; }
        if (sx < -10 || sx > w + 10 || sy > h + 10) continue;
        const a = clamp(depth * 1.3, 0, 1) * (.25 + clamp((y + 1.5) / 4, 0, .75)) + clamp(sp * .04, 0, .5); // en movimiento brillan
        const s = Math.max(.6, 2.6 * f / zz / 60);
        // split RGB adentro del anillo (como el filtro sobre el resto de la página)
        if (split > .05) {
          const o = split * 9;
          paint(ERR, clamp(a * split * 1.4, 0, 1)); x.fillRect(sx - o, sy, s, s);
          paint(ACC2, clamp(a * split * 1.4, 0, 1)); x.fillRect(sx + o, sy, s, s);
        }
        if (bump > .25 || y > 1.55 || sp > 3) paint(ACC, clamp(a + bump * .6, 0, 1));
        else paint(FG, a * .8);
        x.fillRect(sx, sy, s, s);
      }
    }
    // ya se acomodaron todas: se deja de simular (y se limpian restos)
    if (shaking && !FR.length && energy < N * .01) { shaking = false; ox.fill(0); oy.fill(0); vx.fill(0); vy.fill(0); }
  }
  let ticking = false;
  function tick() { if (!run || RM) { ticking = false; return; } frame(); requestAnimationFrame(tick); }
  function loop() { if (ticking) return; ticking = true; tick(); }
  frame();
  return { start: loop };
}

/* ---------------- project art (generativo por card) ---------------- */
function projectArt() {
  const cvs = $$('.proj-art canvas');
  const items = cvs.map((c, i) => ({ c, x: c.getContext('2d'), seed: i, hov: 0, th: 0, vis: false }));
  let BG2;
  const colors = () => { items.forEach(o => o.col = `rgb(${rgbOf(null, o.c)})`); BG2 = `rgb(${rgbOf('var(--bg2)')})`; };
  colors(); addEventListener('brand', colors);
  const size = () => items.forEach(o => {
    const r = o.c.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
    o.w = r.width; o.h = r.height; o.c.width = r.width * d; o.c.height = r.height * d; o.x.setTransform(d, 0, 0, d, 0, 0);
  });
  size(); addEventListener('resize', size);
  items.forEach(o => {
    const card = o.c.closest('.proj');
    card.addEventListener('pointerenter', () => o.th = 1);
    card.addEventListener('pointerleave', () => o.th = 0);
    new IntersectionObserver(([e]) => o.vis = e.isIntersecting).observe(o.c);
  });
  const draws = [
    // 0: ondas concéntricas
    (o, t) => { const { x, w, h } = o; x.strokeStyle = o.col; for (let i = 0; i < 28; i++) { const r = ((i * 22 + t * 30 * (1 + o.hov * 2)) % 620); x.globalAlpha = (1 - r / 620) * .7; x.beginPath(); x.arc(w * .3, h * .6, r, 0, 7); x.stroke(); } },
    // 1: barras de audio
    (o, t) => { const { x, w, h } = o; const n = 48, bw = w / n; for (let i = 0; i < n; i++) { const v = (Math.sin(i * .4 + t * 3) * .5 + .5) * (Math.sin(i * .13 - t * 1.7) * .5 + .5); const bh = v * h * (.5 + o.hov * .4); x.fillStyle = o.col; x.globalAlpha = .25 + v * .7; x.fillRect(i * bw, h - bh, bw - 2, bh); } },
    // 2: grilla de módulos
    (o, t) => { const { x, w, h } = o; const g = 26; for (let i = 0; i < w / g; i++) for (let j = 0; j < h / g; j++) { const v = Math.sin(i * .5 + t * 1.5) * Math.cos(j * .5 - t) ; const s = (v * .5 + .5) * g * (.4 + o.hov * .5); x.fillStyle = o.col; x.globalAlpha = .15 + (v * .5 + .5) * .6; x.fillRect(i * g + (g - s) / 2, j * g + (g - s) / 2, s, s); } },
    // 3: líneas cinéticas
    (o, t) => { const { x, w, h } = o; x.strokeStyle = o.col; x.lineWidth = 1; for (let i = 0; i < 36; i++) { x.globalAlpha = .2 + (i / 36) * .6; x.beginPath(); for (let k = 0; k <= w; k += 8) { const y = h / 2 + Math.sin(k * .012 + i * .18 + t * (1.2 + o.hov * 2)) * (h * .32) * Math.sin(i * .09 + t * .3); k ? x.lineTo(k, y) : x.moveTo(k, y); } x.stroke(); } },
    // 4: scatter / dataviz
    (o, t) => { const { x, w, h } = o; for (let i = 0; i < 160; i++) { const px = (i * 97.3 % w), base = (i * 53.7 % h); const py = base + Math.sin(t * 1.5 + i) * (8 + o.hov * 20); const r = 1 + (i % 5); x.fillStyle = o.col; x.globalAlpha = .2 + (i % 7) / 9; x.beginPath(); x.arc(px, py, r, 0, 7); x.fill(); } x.globalAlpha = .7; x.strokeStyle = o.col; x.beginPath(); for (let k = 0; k <= w; k += 10) { const y = h * .7 - (k / w) * h * .4 + Math.sin(k * .03 + t * 2) * 14; k ? x.lineTo(k, y) : x.moveTo(k, y); } x.stroke(); },
  ];
  let t = 0;
  (function loop() {
    t += .016;
    for (const o of items) {
      if (!o.vis) continue;
      o.hov = lerp(o.hov, o.th, .08);
      o.x.globalAlpha = 1; o.x.fillStyle = BG2; o.x.fillRect(0, 0, o.w, o.h);
      draws[o.seed % draws.length](o, t);
      o.x.globalAlpha = 1;
    }
    if (!RM) requestAnimationFrame(loop);
  })();
}

/* ---------------- cursor + magnetic ---------------- */
function cursor() {
  if (!FINE) return;
  document.body.classList.add('has-cursor');
  const C = $('.cursor'), dot = $('.c-dot'), ring = $('.c-ring'), lbl = $('.c-ring span');
  const p = { x: innerWidth / 2, y: innerHeight / 2 }, r = { ...p };
  addEventListener('pointermove', e => { p.x = e.clientX; p.y = e.clientY; });
  addEventListener('pointerdown', () => C.classList.add('down'));
  addEventListener('pointerup', () => C.classList.remove('down'));
  document.addEventListener('pointerover', e => {
    const el = e.target.closest('[data-cursor], a, button');
    if (el) { C.classList.add('hover'); lbl.textContent = el.dataset.cursor || ''; }
  });
  document.addEventListener('pointerout', e => {
    const el = e.target.closest('[data-cursor], a, button');
    if (el && !el.contains(e.relatedTarget)) C.classList.remove('hover');
  });
  (function loop() {
    r.x = lerp(r.x, p.x, .18); r.y = lerp(r.y, p.y, .18);
    dot.style.transform = `translate3d(${p.x}px,${p.y}px,0)`;
    ring.style.transform = `translate3d(${r.x}px,${r.y}px,0)`;
    requestAnimationFrame(loop);
  })();

  $$('.mag').forEach(el => {
    el.addEventListener('pointermove', e => {
      const b = el.getBoundingClientRect();
      const dx = e.clientX - (b.left + b.width / 2), dy = e.clientY - (b.top + b.height / 2);
      el.style.transform = `translate(${dx * .18}px,${dy * .3}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transition = 'transform .6s cubic-bezier(.16,1,.3,1)'; el.style.transform = ''; setTimeout(() => el.style.transition = '', 600); });
  });

  // spotlight en cards
  $$('.card').forEach(el => el.addEventListener('pointermove', e => {
    const b = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - b.left}px`); el.style.setProperty('--my', `${e.clientY - b.top}px`);
  }));
  // tilt 3D en proyectos
  $$('.proj').forEach(el => {
    const inn = $('.proj-in', el);
    el.addEventListener('pointermove', e => {
      const b = el.getBoundingClientRect(), px = (e.clientX - b.left) / b.width - .5, py = (e.clientY - b.top) / b.height - .5;
      inn.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(10px)`;
    });
    el.addEventListener('pointerleave', () => inn.style.transform = '');
  });
  // mismo tilt 3D en botones de contacto (la perspectiva va en el transform: no necesitan wrapper)
  $$('.tilt').forEach(el => {
    el.addEventListener('pointermove', e => {
      const b = el.getBoundingClientRect(), px = (e.clientX - b.left) / b.width - .5, py = (e.clientY - b.top) / b.height - .5;
      el.style.transform = `perspective(1200px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(10px)`;
    });
    el.addEventListener('pointerleave', () => el.style.transform = '');
  });
  // letras con tilt 3D (CTA + nombre del hero): cada letra es su propia "card" y se apaga con la distancia al mouse
  // al salir vuelven despacio y escalonadas desde la letra más cercana al mouse (sale como una ola)
  const BACK = 'cubic-bezier(.45,.05,.25,1)', BACK_S = 1.3, STAGGER = .035;
  const tiltLetters = el => {
    let lastX = 0;
    el.addEventListener('pointermove', e => {
      lastX = e.clientX;
      $$('span', el).forEach(s => {
        s.style.transition = ''; // siguiendo al mouse: la transición corta del CSS
        const b = s.getBoundingClientRect(), cx = b.left + b.width / 2, cy = b.top + b.height / 2;
        const px = clamp((e.clientX - cx) / b.width, -.5, .5), py = clamp((e.clientY - cy) / b.height, -.5, .5);
        const f = Math.max(0, 1 - Math.abs(e.clientX - cx) / 420);
        s.style.transform = `perspective(600px) rotateY(${px * 50 * f}deg) rotateX(${-py * 50 * f}deg) translateZ(${f * 24}px)`;
      });
    });
    el.addEventListener('pointerleave', () => {
      const ss = $$('span', el), rank = ss.map(s => { const b = s.getBoundingClientRect(); return Math.abs(lastX - (b.left + b.width / 2)); });
      const order = [...rank].sort((a, b) => a - b);
      ss.forEach((s, i) => {
        const d = order.indexOf(rank[i]) * STAGGER;
        s.style.transition = `transform ${BACK_S}s ${BACK} ${d}s, color .4s, -webkit-text-stroke-color .4s`;
        s.style.transform = '';
      });
    });
  };
  ['#big-cta', '#name-1', '#name-2'].forEach(s => tiltLetters($(s)));
}

/* ---------------- sacudón de letras (nombre + CTA) ----------------
   Igual que las partículas: cuando el anillo de la onda del click alcanza una letra, sale empujada en el sentido
   de la onda (+ azar y un giro) y vuelve con resorte. Va en las propiedades `translate`/`rotate`, aparte del
   `transform` del tilt: se suman. */
function scatterLetters() {
  if (RM) return;
  const KICK = 22, SPRING = .07, DAMP = .87;
  const title = $('.hero-title');
  let active = [], running = false, letters = [];
  // el click arranca el loop (el empujón lo da la onda al llegar) y mide las letras UNA vez: centro en coords de documento
  // (medirlas por frame forzaría un layout en cada uno)
  addEventListener('pointerdown', e => {
    if (e.button) return;
    const sx = scrollX, sy = scrollY;
    letters = $$('#name-1 span, #name-2 span, #big-cta span').map(s => { const b = s.getBoundingClientRect(); return { s, x: b.left + b.width / 2 + sx, y: b.top + b.height / 2 + sy }; });
    if (!running) { running = true; requestAnimationFrame(loop); }
  });
  function loop() {
    const FR = fronts(performance.now()), vh = innerHeight, sx = scrollX, sy = scrollY;
    // borde de abajo del renglón: si el scroll ya corrió el nombre hacia su máscara, se mantiene; si no, se abre del todo
    const sunk = parseFloat(($('#name-1').style.translate || '0 0').split(' ')[1]) > .5;
    title.style.setProperty('--clip-b', sunk ? '0px' : '-100vh');
    if (FR.length) for (const { s, x: lx, y: ly } of letters) {
      const cxv = lx - sx, cyv = ly - sy; // centro en el viewport
      if (cyv < -300 || cyv > vh + 300) continue; // fuera de pantalla: no hace falta
      for (const a of FR) {
        if (a.id <= (s._hit || 0)) continue;
        const dx = cxv - a.x, dy = cyv - a.y, d = Math.hypot(dx, dy) || 1;
        if (d > a.r) continue; // todavía no le llegó
        s._hit = a.id;
        const p = KICK * (.4 + Math.random() * .8) * waveKick(d);
        const ang = Math.atan2(dy, dx) + (Math.random() - .5) * 1.6;
        const k = s._k ||= { ox: 0, oy: 0, vx: 0, vy: 0, r: 0, vr: 0 };
        k.vx += Math.cos(ang) * p; k.vy += Math.sin(ang) * p; k.vr += (Math.random() - .5) * 14 * waveFall(d);
        if (!active.includes(s)) active.push(s);
        // mientras dura, los renglones del nombre no recortan (si no, las letras se cortan al salir disparadas)
        title.classList.add('shaking');
      }
    }
    active = active.filter(s => {
      const k = s._k;
      k.vx = (k.vx - k.ox * SPRING) * DAMP; k.vy = (k.vy - k.oy * SPRING) * DAMP; k.vr = (k.vr - k.r * SPRING) * DAMP;
      k.ox += k.vx; k.oy += k.vy; k.r += k.vr;
      const still = Math.abs(k.ox) + Math.abs(k.oy) + Math.abs(k.vx) + Math.abs(k.vy) + Math.abs(k.r) + Math.abs(k.vr) < .05;
      if (still) { s._k = null; s.style.translate = s.style.rotate = ''; return false; }
      s.style.translate = `${k.ox.toFixed(1)}px ${k.oy.toFixed(1)}px`;
      s.style.rotate = `${k.r.toFixed(1)}deg`;
      return true;
    });
    if (active.length || FR.length) requestAnimationFrame(loop); // sigue mientras haya letras moviéndose u ondas en camino
    else { running = false; title.classList.remove('shaking'); }
  }
}

/* ---------------- glitch de texto con la onda ----------------
   Cuando el anillo de la onda del click pasa por un texto, algunos caracteres se cambian un momento por glifos random
   (más cuanto más cerca del click) y vuelven. Configuración: CONFIG.textGlitch (config.js).
   Layout intacto: antes de tocar nada se mide el ancho real de cada carácter en su lugar (kerning, letter-spacing,
   text-transform incluidos) y el nodo de texto se cambia por cajitas inline-block de exactamente ese ancho, agrupadas
   por palabra (solo se puede cortar línea donde había espacios, como antes). El glifo random vive adentro de su caja.
   Además el contenedor del texto queda con su tamaño congelado mientras dura: no puede crecer ni achicarse.
   Las cajas son etiquetas propias (zg-*) para que ninguna regla de CSS del sitio (p. ej. `.tags span`) las alcance.
   Inputs: su valor no es texto de la página → se dibuja una copia glitcheada encima y el texto real queda transparente
   (el cursor sigue visible); si se escribe durante el glitch, se corta al instante. Al terminar todo vuelve intacto. */
function textGlitch() {
  const CFG = CONFIG.textGlitch;
  if (RM || !CFG.enabled) return;
  const CHARS = CFG.chars, DUR = CFG.duration, AMT = CFG.amount, MIN = CFG.minAmount, EVERY = Math.max(1, CFG.refreshFrames | 0);
  const SKIP = 'script,style,svg,input,textarea,#loader,.cursor,zg-t'; // zg-t = texto que ya está glitcheando
  const live = new Map(), hitOf = new WeakMap(); // nodo/input → estado del glitch · → id de la última onda que lo golpeó
  let pend = [], running = false;
  const rnd = () => CHARS[Math.random() * CHARS.length | 0];

  // textos e inputs visibles al momento del click (rect en coords de documento, para seguir el scroll)
  const collect = () => {
    const vh = innerHeight, sy = scrollY, out = [], rg = document.createRange();
    const add = (n, r) => { if (r.width && r.bottom >= 0 && r.top <= vh) out.push({ n, l: r.left, r: r.right, t: r.top + sy, b: r.bottom + sy }); };
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.data.trim() && !n.parentElement.closest(SKIP) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
    });
    for (let n; (n = w.nextNode());) { rg.selectNodeContents(n); add(n, rg.getBoundingClientRect()); }
    for (const inp of $$('input:not([type]), input[type=text], input[type=search], input[type=email]')) if (inp.value.trim()) add(inp, inp.getBoundingClientRect());
    return out;
  };

  // ancho real de cada carácter tal como está renderizado: distancia hasta donde empieza el siguiente (incluye el kerning
  // del par); el último de cada palabra/línea usa su propio ancho → cada palabra suma exactamente lo que medía
  // También anota dónde arranca cada renglón: el glitch los reproduce con saltos explícitos y no deja cortar en otro lado
  const measure = n => {
    const rg = document.createRange(), rs = [], brs = new Set();
    for (let i = 0; i < n.data.length; i++) { rg.setStart(n, i); rg.setEnd(n, i + 1); rs.push(rg.getBoundingClientRect()); }
    let prev = null;
    rs.forEach((r, i) => {
      if (/\s/.test(n.data[i])) return;
      if (prev && r.top > prev.top + prev.height * .5) brs.add(i); // este carácter empieza un renglón nuevo
      prev = r;
    });
    const ws = rs.map((r, i) => {
      const nx = rs[i + 1];
      return nx && !/\s/.test(n.data[i + 1]) && Math.abs(nx.top - r.top) < 1 ? nx.left - r.left : r.width;
    });
    return { ws, brs };
  };
  // contenedor congelado mientras glitchea; varios textos en la misma caja comparten el lock
  const locks = new Map();
  const boxOf = n => { let el = n.parentElement; while (el.parentElement && getComputedStyle(el).display === 'inline') el = el.parentElement; return el; };
  const lock = (el, r) => {
    const l = locks.get(el);
    if (l) return l.count++;
    locks.set(el, { count: 1, w: el.style.width, h: el.style.height });
    el.style.width = `${r.width}px`; el.style.height = `${r.height}px`;
  };
  const unlock = el => {
    const l = locks.get(el);
    if (!l || --l.count) return;
    el.style.width = l.w; el.style.height = l.h; locks.delete(el);
  };
  // texto → palabras de cajitas de ancho fijo; los espacios quedan como texto. Los renglones del original se reproducen
  // con <br> (brs) y zg-t no corta línea en ningún otro lado (nowrap): el texto no puede partirse distinto
  const boxes = (data, ws, into, brs) => {
    const chars = [];
    let word = null;
    for (let i = 0; i < data.length; i++) {
      const ch = data[i];
      if (brs?.has(i)) { into.append(document.createElement('br')); word = null; }
      if (/\s/.test(ch)) { word = null; into.append(ch); continue; }
      if (!word) { word = document.createElement('zg-w'); into.append(word); }
      const c = document.createElement('zg-c');
      c.style.width = `${ws[i]}px`; c.textContent = ch;
      word.append(c); chars.push({ c, ch });
    }
    return chars;
  };

  // texto de la página: medir (lecturas) → devuelve una función que envuelve (escrituras)
  const prepText = n => {
    const cont = boxOf(n), cs = getComputedStyle(cont);
    // tamaño exacto de layout (con box-sizing border-box el width/height resuelto es la caja entera; no lo afectan transforms)
    const cr = { width: parseFloat(cs.width), height: parseFloat(cs.height) };
    // un solo carácter que vive solo en su propia caja (letras del nombre y del CTA): con la caja congelada alcanza
    // con cambiar el carácter; la estructura queda idéntica (ni la línea base se entera)
    if (n.data.length === 1 && cont === n.parentElement && cont.childNodes.length === 1) {
      const orig = n.data;
      return () => {
        lock(cont, cr);
        return { chars: [{ c: n, ch: orig }], alive: () => n.isConnected, end: ok => { if (ok) n.data = orig; unlock(cont); } };
      };
    }
    const { ws, brs } = measure(n);
    return () => {
      lock(cont, cr);
      const box = document.createElement('zg-t'), chars = boxes(n.data, ws, box, brs);
      n.replaceWith(box);
      return { chars, alive: () => box.isConnected, end: ok => { if (ok) box.replaceWith(n); unlock(cont); } };
    };
  };
  // input: copia glitcheada encima, alineada con su texto; el texto real transparente hasta que termine
  const ctx = document.createElement('canvas').getContext('2d');
  const prepInput = inp => {
    const cs = getComputedStyle(inp), host = inp.parentElement, hostStatic = getComputedStyle(host).position === 'static';
    const ls = parseFloat(cs.letterSpacing) || 0;
    ctx.font = cs.font;
    const val = inp.value, ws = Array.from({ length: val.length }, (_, i) => ctx.measureText(val[i]).width + ls); // por índice, como boxes()
    // posición del texto del input relativa al contenedor (que pasa a ser la referencia del absolute)
    const ir = inp.getBoundingClientRect(), hr = host.getBoundingClientRect(), hs = getComputedStyle(host);
    const left = ir.left - hr.left - parseFloat(hs.borderLeftWidth) + parseFloat(cs.borderLeftWidth) + parseFloat(cs.paddingLeft) - inp.scrollLeft;
    const top = ir.top - hr.top - parseFloat(hs.borderTopWidth), h = ir.height;
    return () => {
      const prev = { color: inp.style.color, pos: host.style.position };
      if (hostStatic) host.style.position = 'relative';
      const ov = document.createElement('zg-t');
      Object.assign(ov.style, {
        position: 'absolute', left: `${left}px`, top: `${top}px`, height: `${h}px`, display: 'flex', alignItems: 'center',
        font: cs.font, letterSpacing: cs.letterSpacing, color: cs.color, whiteSpace: 'pre', pointerEvents: 'none',
      });
      const chars = boxes(val, ws, ov);
      host.append(ov);
      inp.style.color = 'transparent'; // el caret-color del input sigue mostrando el cursor
      let dead = false;
      const stop = () => { dead = true; }; // escribieron: se corta ya
      inp.addEventListener('input', stop, { once: true });
      return {
        chars, alive: () => !dead && ov.isConnected,
        end: () => { inp.removeEventListener('input', stop); ov.remove(); inp.style.color = prev.color; if (hostStatic) host.style.position = prev.pos; },
      };
    };
  };

  addEventListener('pointerdown', e => {
    if (e.button) return;
    pend = collect();
    if (!running) { running = true; requestAnimationFrame(loop); }
  });
  function loop() {
    const now = performance.now(), FR = fronts(now), sy = scrollY, hits = [];
    // le llega el anillo a un texto (al punto más cercano de su caja) → arranca su glitch
    for (const p of pend) for (const a of FR) {
      if (a.id <= (hitOf.get(p.n) || 0)) continue;
      const dx = Math.max(p.l - a.x, 0, a.x - p.r), dy = Math.max(p.t - sy - a.y, 0, a.y - (p.b - sy)), d = Math.hypot(dx, dy);
      if (d > a.r) continue;
      hitOf.set(p.n, a.id);
      const amt = AMT * waveFall(d) + MIN, s = live.get(p.n);
      if (s) { s.t0 = now; s.amt = Math.max(s.amt, amt); }
      else if (p.n.isConnected) hits.push({ n: p.n, amt });
    }
    // primero se mide todo, después se escribe (sin forzar un layout por nodo)
    const ready = hits.map(h => ({ h, apply: h.n.nodeType === 3 ? prepText(h.n) : prepInput(h.n) }));
    ready.forEach(({ h, apply }) => live.set(h.n, { ...apply(), t0: now, amt: h.amt, f: 0 }));

    for (const [n, s] of live) {
      // si alguien más reescribió ese texto (scramble, reloj, idioma) o escribieron en el input: se suelta sin pisar nada
      if (!s.alive()) { s.end(false); live.delete(n); continue; }
      const k = (now - s.t0) / DUR;
      if (k >= 1) { s.end(true); live.delete(n); continue; } // vuelve el original
      if (s.f++ % EVERY) continue;
      const amt = s.amt * (1 - k * k); // se sostiene y se apaga al final
      for (const o of s.chars) {
        const g = /\s/.test(o.ch) || Math.random() >= amt ? o.ch : rnd();
        if (o.c.textContent !== g) o.c.textContent = g;
      }
    }
    if (FR.length || live.size) requestAnimationFrame(loop);
    else { running = false; pend = []; }
  }
}

/* ---------------- scroll engine ---------------- */
function scrollFX() {
  const bar = $('.progress i'), nav = $('.nav');
  const heroPar = $$('[data-hero-par]'), hero = $('#hero .hero-inner');
  const stmt = $('#statement');
  let words = $$('#statement .w'), lastOn = -1;
  addEventListener('lang', () => { words = $$('#statement .w'); lastOn = -1; }); // setLang rearma el statement
  const tl = $('.tl'), tlFill = $('.tl-line i'), tlItems = $$('.tl-item');
  const TL_FRONT = .8; // altura de pantalla (0 arriba – 1 abajo) hasta donde llega la línea de la trayectoria
  const track = $('#hs-track'), hsBar = $('.hs-bar i'), hsCur = $('#hs-cur');
  const mqs = $$('.mq').map(el => ({ el: $('.mq-track', el), dir: +el.dataset.dir, x: 0, half: 0 }));
  let ly = scrollY, last = scrollY, vel = 0, dist = 0, lastLy = null, lastCur = '';

  // medidas cacheadas (leerlas por frame fuerza layouts): posiciones en el documento sin transforms (cadena de offsetTop)
  // y anchos; se recalculan solo cuando algo cambia de tamaño
  const docTop = el => { let t = 0; for (let e = el; e; e = e.offsetParent) t += e.offsetTop; return t; };
  const M = {};
  const measure = () => {
    M.stmtTop = docTop(stmt); M.stmtH = stmt.offsetHeight;
    M.tlTop = docTop(tl); M.tlH = tl.offsetHeight;
    M.items = tlItems.map(docTop);
    HS.max = Math.max(0, track.scrollWidth - innerWidth); // lo usa también drag()
    mqs.forEach(m => m.half = m.el.scrollWidth / 2);
  };
  measure();
  const ro = new ResizeObserver(measure);
  [document.body, track, ...mqs.map(m => m.el)].forEach(el => ro.observe(el));
  addEventListener('resize', measure);

  (function loop() {
    const y = scrollY, vh = innerHeight;
    ly = lerp(ly, y, .1);
    vel = lerp(vel, y - last, .1);
    // nav hide on scroll down
    if (Math.abs(y - last) > 2) { dist += y - last; if (dist > 120 && y > vh * .8) nav.classList.add('hide'); if (dist < -60 || y < 100) { nav.classList.remove('hide'); dist = 0; } if (y - last > 0 && dist < 0) dist = 0; }
    last = y;

    bar.style.transform = `scaleX(${y / (DOC.h - vh)})`;

    // hero parallax + fade (solo si cambió)
    if (ly < vh * 1.2 && Math.abs(ly - lastLy) > .05) {
      lastLy = ly;
      heroPar.forEach(el => el.style.translate = `0 ${ly * +el.dataset.heroPar * 3}px`);
      hero.style.opacity = clamp(1 - ly / (vh * .7), 0, 1);
    }

    // statement scrub
    const sp = clamp((vh * .85 - (M.stmtTop - y)) / (M.stmtH + vh * .35), 0, 1);
    const on = Math.floor(sp * words.length * 1.05);
    if (on !== lastOn) { lastOn = on; words.forEach((w, i) => w.classList.toggle('on', i < on)); }

    // timeline fill
    const front = vh * TL_FRONT;
    tlFill.style.transform = `scaleY(${clamp((front - (M.tlTop - y)) / M.tlH, 0, 1)})`;
    // marcadores: se prenden cuando la línea llega a su altura y se apagan si retrocede (lit / unlit disparan la animación)
    tlItems.forEach((it, i) => {
      const lit = M.items[i] - y + 48 <= front;
      if (lit !== it.classList.contains('lit')) { it.classList.toggle('lit', lit); it.classList.toggle('unlit', !lit); }
    });

    // carrusel de proyectos (posición la maneja drag())
    const hp = clamp(HS.x / (HS.max || 1), 0, 1);
    track.style.transform = `translate3d(${-HS.x}px,0,0)`;
    hsBar.style.transform = `scaleX(${hp})`;
    const cur = pad(Math.min(CV.projects.length, Math.floor(hp * CV.projects.length) + 1));
    if (cur !== lastCur) hsCur.textContent = lastCur = cur;

    // marquee con inercia de scroll
    if (!RM) mqs.forEach(m => {
      m.x -= (0.6 + Math.abs(vel) * .25) * m.dir * (vel < 0 ? -1 : 1);
      if (m.x <= -m.half) m.x += m.half; if (m.x > 0) m.x -= m.half;
      m.el.style.transform = `translate3d(${m.x}px,0,0) skewX(${clamp(-vel * .3, -12, 12)}deg)`;
    });
    requestAnimationFrame(loop);
  })();
}

/* ---------------- drag: carrusel + página, con inercia ---------------- */
const HS = { x: 0, max: 0 }; // desplazamiento del carrusel (lo lee scrollFX)
function drag() {
  const track = $('#hs-track'), html = document.documentElement;
  const TH = 6, FR = .95, SKIP = 'input, textarea, select, label, [contenteditable], .term';
  const hs = { v: 0 }, pg = { v: 0 };
  let d = null, ax = null, kill = false;
  const max = () => HS.max; // ancho extra del carrusel, cacheado por scrollFX (leer scrollWidth por frame fuerza layout)
  // fuera de rango: resistencia elástica
  const rubber = (x, m) => x < 0 ? x * .35 : x > m ? m + (x - m) * .35 : x;

  addEventListener('pointerdown', e => {
    hs.v = pg.v = 0; // agarrar frena la inercia
    if (e.button !== 0 || !(e.target instanceof Element) || document.body.classList.contains('loading') || e.target.closest(SKIP)) return;
    const onTrack = track.contains(e.target), touch = e.pointerType !== 'mouse';
    if (touch && !onTrack) return; // en touch la página ya scrollea nativa
    d = { id: e.pointerId, x0: e.clientX, y0: e.clientY, lx: e.clientX, ly: e.clientY, t: performance.now(), hx: HS.x, sy: scrollY, onTrack, touch };
    ax = null;
  });
  addEventListener('pointermove', e => {
    if (!d || e.pointerId !== d.id) return;
    if (!ax) {
      const dx = e.clientX - d.x0, dy = e.clientY - d.y0;
      if (Math.hypot(dx, dy) < TH) return;
      // eje: horizontal solo sobre el carrusel; vertical solo con mouse; si no, se suelta (selección / scroll nativo)
      ax = d.onTrack && Math.abs(dx) > Math.abs(dy) ? 'x' : !d.touch && Math.abs(dy) >= Math.abs(dx) ? 'y' : null;
      if (!ax) { d = null; return; }
      html.setPointerCapture(e.pointerId);
      html.classList.add('grabbing'); track.classList.toggle('dragging', ax === 'x');
      getSelection().removeAllRanges();
      d.x0 = d.lx = e.clientX; d.y0 = d.ly = e.clientY;
    }
    const now = performance.now(), k = 16.67 / Math.max(1, now - d.t);
    if (ax === 'x') { hs.v = hs.v * .2 - (e.clientX - d.lx) * k * .8; HS.x = rubber(d.hx - (e.clientX - d.x0), max()); }
    else { pg.v = pg.v * .2 - (e.clientY - d.ly) * k * .8; scrollTo(0, d.sy - (e.clientY - d.y0)); }
    d.lx = e.clientX; d.ly = e.clientY; d.t = now;
  });
  const end = e => {
    if (!d || e.pointerId !== d.id) return;
    if (ax) {
      if (performance.now() - d.t > 80) hs.v = pg.v = 0; // se quedó quieto antes de soltar
      html.classList.remove('grabbing'); track.classList.remove('dragging');
      // fue un arrastre, no un click: se come el click que viene atrás
      if (e.type === 'pointerup') { kill = true; setTimeout(() => kill = false, 0); }
    }
    d = ax = null;
  };
  addEventListener('pointerup', end); addEventListener('pointercancel', end);
  addEventListener('click', e => { if (kill) { kill = false; e.preventDefault(); e.stopPropagation(); } }, true);
  addEventListener('dragstart', e => { if (track.contains(e.target) || d) e.preventDefault(); });

  // trackpad / shift+rueda horizontal sobre el carrusel
  track.addEventListener('wheel', e => {
    const dx = e.deltaX || (e.shiftKey ? e.deltaY : 0);
    if (!dx || Math.abs(dx) < Math.abs(e.shiftKey ? 0 : e.deltaY)) return;
    e.preventDefault(); hs.v = 0; HS.x = clamp(HS.x + dx, 0, max());
  }, { passive: false });
  addEventListener('wheel', () => pg.v = 0, { passive: true });

  // inercia: la velocidad del empuje sigue al soltar y se gasta con fricción
  let t0 = performance.now();
  (function loop(now) {
    const k = Math.min(3, (now - t0) / 16.67), m = max(); t0 = now;
    if (ax !== 'x') {
      HS.x += hs.v * k; hs.v *= FR ** k;
      if (HS.x < 0 || HS.x > m) { // pasado del borde: frena fuerte y vuelve con resorte
        const c = clamp(HS.x, 0, m);
        hs.v *= .6 ** k; HS.x = lerp(HS.x, c, 1 - .82 ** k);
        if (Math.abs(HS.x - c) < .5) HS.x = c;
      }
      if (Math.abs(hs.v) < .02) hs.v = 0;
    }
    if (ax !== 'y' && pg.v) { scrollBy(0, pg.v * k); pg.v *= FR ** k; if (Math.abs(pg.v) < .05) pg.v = 0; }
    requestAnimationFrame(loop);
  })(t0);
}

/* ---------------- floaters: parallax de profundidad ----------------
   z = multiplicador de scroll: 1 = se mueve con la página · <1 = más lejos · >1 = más cerca.
   El tamaño también se multiplica por z y el foco está en 1: cuanto más se aleja z de 1 (para cualquier lado), más desenfoque.
   Los lejanos van detrás del contenido (más tenues); los cercanos delante y solo en los costados para no tapar texto.
   Rendimiento: se dibujan en 2 canvas (atrás / adelante del contenido), no como elementos del DOM. Cada forma se
   pre-renderiza UNA vez con su desenfoque en un sprite (más 2 versiones tintadas para el split RGB de la onda);
   por frame solo se estampan sprites → sin filtros CSS por elemento ni repintados. */
function floaters() {
  if (RM) return;
  const { count, countMobile, zMin: Z_MIN, zMax: Z_MAX, blur: BLUR } = CONFIG.floaters; // ver config.js
  const COUNT = innerWidth < 760 ? countMobile : count;
  // formas en una caja de lado `s` centrada en 0,0 (mismas proporciones que el viewBox 24 de antes)
  const SHAPES = [
    (x, s) => { x.beginPath(); x.arc(0, 0, s * 9 / 24, 0, 7); x.stroke(); },   // círculo
    (x, s) => { x.beginPath(); x.arc(0, 0, s * 6 / 24, 0, 7); x.fill(); },     // círculo lleno
    (x, s) => x.strokeRect(-s * 8 / 24, -s * 8 / 24, s * 16 / 24, s * 16 / 24), // cuadrado
    (x, s) => x.fillRect(-s * 5 / 24, -s * 5 / 24, s * 10 / 24, s * 10 / 24),   // cuadrado lleno
  ];
  const COLORS = ['var(--acc)', 'var(--acc)', 'var(--acc2)', 'var(--fg)', 'var(--mut)'];
  // azar con semilla: mismas posiciones en cada carga
  let seed = 7;
  const rnd = (a = 1, b = 0) => b + ((seed = seed * 16807 % 2147483647) / 2147483647) * (a - b);

  const mk = cls => { const c = document.createElement('canvas'); c.className = cls; c.setAttribute('aria-hidden', true); return c; };
  const back = mk('floaters'), front = mk('floaters front');
  $('main').before(back); document.body.append(front);
  const bx = back.getContext('2d'), fx = front.getContext('2d');
  let dpr = 1, vw = 0, vh = 0;
  const size = () => {
    dpr = Math.min(devicePixelRatio || 1, 2); vw = back.clientWidth; vh = back.clientHeight;
    for (const c of [back, front]) { c.width = Math.round(vw * dpr); c.height = Math.round(vh * dpr); }
  };
  size();

  const items = Array.from({ length: COUNT }, () => {
    const z = Z_MIN + (Z_MAX - Z_MIN) * rnd() ** 1.6; // sesgado: hay más lejanos que cercanos
    const near = z > 1;
    return {
      z, near,
      size: rnd(34, 14) * z, // px a z = 1, multiplicado por la profundidad
      color: COLORS[rnd(COLORS.length) | 0],
      alpha: near ? .35 : .16 + .32 * (z - Z_MIN) / Math.max(.01, 1 - Z_MIN),
      blur: Math.abs(z - 1) * BLUR, // foco en z = 1: se desenfoca igual alejándose para atrás o para adelante
      shape: SHAPES[rnd(SHAPES.length) | 0],
      x: near ? (rnd() < .5 ? rnd(10, 1) : rnd(97, 88)) : rnd(97, 3), // vw
      u: rnd(),                                                       // dónde cae a lo largo del scroll
      rot: rnd(360), spin: rnd(.05, -.05), ph: rnd(6.28), amp: rnd(14, 4) * z,
      ox: 0, oy: 0, vx: 0, vy: 0, spinX: 0, av: 0, hit: 0,
    };
  });

  // sprite: la forma ya desenfocada (vía sombra de canvas, que desenfoca en todos los navegadores) en su color
  const sprite = (o, color) => {
    const pad = Math.ceil(o.blur * 2.5 + 2), S = o.size + pad * 2, c = document.createElement('canvas');
    c.width = c.height = Math.ceil(S * dpr);
    const x = c.getContext('2d');
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    x.strokeStyle = x.fillStyle = color; x.lineWidth = 1.5 * o.size / 24;
    if (o.blur > .2) {
      // se dibuja fuera del sprite y solo cae adentro su sombra desenfocada (shadowBlur ≈ 2 × radio de blur CSS)
      x.shadowColor = color; x.shadowBlur = o.blur * 2 * dpr; x.shadowOffsetX = S * 2 * dpr;
      x.translate(S / 2 - S * 2, S / 2);
    } else x.translate(S / 2, S / 2);
    o.shape(x, o.size);
    return { c, S };
  };
  const ERR = () => `rgb(${rgbOf('var(--err)')})`, ACC2 = () => `rgb(${rgbOf('var(--acc2)')})`;
  const build = () => {
    const err = ERR(), acc2 = ACC2();
    for (const o of items) {
      o.sp = sprite(o, `rgb(${rgbOf(o.color)})`);
      o.spErr = sprite(o, err); o.spAcc2 = sprite(o, acc2); // para el split RGB de la onda
    }
  };
  build();
  addEventListener('brand', build);
  addEventListener('resize', () => { const d = dpr; size(); if (d !== dpr) build(); });

  // sacudón (como las partículas del hero): cuando el anillo de la onda del click llega a cada uno, empujón en el sentido
  // de la onda, más fuerte cuanto más cerca (z); vuelve con resorte amortiguado, más un giro extra que se frena solo
  const KICK = 14, SPRING = .07, DAMP = .87;
  let shaking = false;

  const stamp = (x, sp, cx, cy, ang) => {
    const c = Math.cos(ang) * dpr, s = Math.sin(ang) * dpr;
    x.setTransform(c, s, -s, c, cx * dpr, cy * dpr);
    x.drawImage(sp.c, -sp.S / 2, -sp.S / 2, sp.S, sp.S);
  };
  let t = 0;
  (function loop() {
    t += 1 / 60;
    const sy = scrollY, max = DOC.h - vh;
    let energy = 0;
    const now = performance.now(), W = waves(now), FR = W ? fronts(now) : []; // onda del click
    if (FR.length) shaking = true;
    for (const x of [bx, fx]) { x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, x.canvas.width, x.canvas.height); }
    for (const o of items) {
      // recorrido propio de cada uno (max * z) repartido en toda la página; z escala la velocidad del scroll
      const y = o.u * (max * o.z + vh * 1.3) - vh * .15 - sy * o.z + Math.sin(t * .6 + o.ph) * o.amp;
      const x = o.x * vw / 100;
      if (shaking) {
        for (const a of FR) {
          if (a.id <= o.hit) continue;
          const dx = x + o.ox - a.x, dy = y + o.oy - a.y, d = Math.hypot(dx, dy) || 1;
          if (d > a.r) continue; // todavía no le llegó
          o.hit = a.id;
          const p = KICK * (.4 + Math.random() * .8) * waveKick(d) * o.z;
          const ang = Math.atan2(dy, dx) + (Math.random() - .5) * 1.6;
          o.vx += Math.cos(ang) * p; o.vy += Math.sin(ang) * p;
          o.av += (Math.random() - .5) * 16 * o.z * waveFall(d);
        }
        o.vx = (o.vx - o.ox * SPRING) * DAMP; o.vy = (o.vy - o.oy * SPRING) * DAMP;
        o.ox += o.vx; o.oy += o.vy;
        o.av *= .93; o.spinX += o.av;
        energy += Math.abs(o.vx) + Math.abs(o.vy) + Math.abs(o.ox) + Math.abs(o.oy) + Math.abs(o.av);
      }
      // centro de la forma (antes: esquina del elemento + medio tamaño)
      let cx = x + o.ox + o.size / 2, cy = y + o.oy + o.size / 2;
      if (cy < -240 || cy > vh + 240) continue; // fuera de pantalla: no se dibuja
      // onda: desplazamiento + split RGB (copias de color a los lados) mientras el anillo pasa por encima
      const wv = W && W(cx, cy), split = wv ? wv.e : 0;
      if (wv) { cx += wv.dx; cy += wv.dy; }
      const ctx = o.near ? fx : bx, ang = (o.rot + o.spinX + t * o.spin * 60) * Math.PI / 180;
      ctx.globalAlpha = o.alpha;
      if (split > .05) {
        const s = split * 10 * o.z;
        stamp(ctx, o.spErr, cx - s, cy, ang); stamp(ctx, o.spAcc2, cx + s, cy, ang);
      }
      stamp(ctx, o.sp, cx, cy, ang);
    }
    // ya se acomodaron: se deja de simular (el giro extra queda donde terminó)
    if (shaking && !FR.length && energy < items.length * .05) {
      shaking = false;
      items.forEach(o => { o.ox = o.oy = o.vx = o.vy = o.av = 0; });
    }
    requestAnimationFrame(loop);
  })();
}

/* ---------------- observers ---------------- */
function observers() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  $$('.rv').forEach(el => io.observe(el));

  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const to = +e.target.dataset.to, t0 = performance.now(), d = 1600;
    (function s(n) { const p = clamp((n - t0) / d, 0, 1); e.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(s); })(t0);
  }), { threshold: .6 });
  $$('.cnt').forEach(el => cio.observe(el));

  const links = $$('.side-index a, .nav ul a');
  const sio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    document.body.classList.toggle('in-hs', e.target.id === 'proyectos');
    links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === `#${e.target.id}`));
  }), { rootMargin: '-50% 0px -50% 0px' });
  $$('main section').forEach(s => sio.observe(s));

  // scramble en títulos de sección al entrar
  const tio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; tio.unobserve(e.target);
    const sc = new Scramble(e.target); sc.set(e.target.textContent);
  }), { threshold: 1 });
  $$('.s-title').forEach(el => tio.observe(el));
}

/* ---------------- roles loop ---------------- */
function roles() {
  const sc = new Scramble($('#role'));
  let i = 0;
  const next = () => sc.set(CV.roles[i++ % CV.roles.length]).then(() => setTimeout(next, 2200));
  next();
}

/* ---------------- misc ---------------- */
function clock() {
  const el = $('#clock');
  const fmt = new Intl.DateTimeFormat('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const tick = () => el.textContent = fmt.format(new Date());
  tick(); setInterval(tick, 1000);
}

function toast(msg) {
  let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.append(t); }
  t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2000);
}

function email() {
  const btn = $('#email-btn'), addr = $('#email-addr'), sc = new Scramble(addr);
  btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(CONFIG.email); } catch { location.href = `mailto:${CONFIG.email}`; return; }
    toast(i18n('toast.copied'));
    await sc.set(i18n('copied')); setTimeout(() => sc.set(CONFIG.email), 1100);
  });
}

function anchors() {
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href'); if (id.length < 2) return;
    const t = $(id); if (!t) return; e.preventDefault();
    scrollTo({ top: t.getBoundingClientRect().top + scrollY, behavior: RM ? 'auto' : 'smooth' });
  }));
}

function terminal() {
  const body = $('#term-body'), inp = $('#term-in');
  const out = (h, cls = '') => { body.insertAdjacentHTML('beforeend', `<div class="${cls}">${h}</div>`); body.scrollTop = body.scrollHeight; };
  const go = id => setTimeout(() => $(id).scrollIntoView({ behavior: 'smooth' }), 300);
  const hist = []; let hi = 0;
  const cmds = {
    help: () => out(`${i18n('term.cmds')}: ${['whoami', 'stack', 'exp', 'projects', 'contact', 'whatsapp', 'lang', 'clear', 'sudo'].map(c => `<span class="a">${c}</span>`).join(' · ')}`),
    whoami: () => out(`${CV.name.join(' ').toLowerCase()} — ${CV.roles.slice(0, 2).join(' + ')}. base: ${CV.location.split(' —')[0]}.`),
    stack: () => CONFIG.stacks.forEach(s => out(`<span class="a">${tx(s.cat).padEnd(12, '.')}</span> ${s.items.map(tx).join(', ')}`)),
    exp: () => EXP.forEach(e => out(`<span class="a">${e.year[0]}–${e.year[1] ?? i18n('exp.now')}</span> ${tx(e.position)} @ ${tx(e.company)}`)),
    projects: () => { out(`${i18n('term.opening')} selected_works/ …`); go('#proyectos'); },
    contact: () => out(`mail: <span class="a">${CONFIG.email}</span> · whatsapp: <span class="a">${CONFIG.whatsapp.label}</span> · ${LINKS.map(l => l.l.toLowerCase()).join(' · ')}`),
    whatsapp: () => { out(`${i18n('term.opening')} whatsapp …`); setTimeout(() => open($('#wa-btn').href, '_blank', 'noopener'), 400); },
    lang: a => {
      const l = a.toLowerCase();
      if (I18N[l]) { $(`.lang-menu button[data-lang="${l}"]`).click(); return out(`${i18n('term.lang')}: <span class="a">${l}</span>`); }
      out(`${i18n('term.lang')}: <span class="a">${LANG}</span> · ${Object.keys(I18N).map(k => `<span class="a">lang ${k}</span>`).join(' · ')}`);
    },
    clear: () => body.innerHTML = '',
    sudo: a => {
      if (!a.includes('hire')) return out(`${i18n('term.nice')} <span class="a">sudo hire-me</span>`);
      if (glitching) return;
      out(i18n('term.granted'));
      out(i18n('term.connecting'));
      const url = (LINKS.find(l => /linkedin/i.test(l.l)) || LINKS[0])?.u;
      glitchOut(2000, () => url ? openExt(url) : location.href = `mailto:${CONFIG.email}`);
    },
    ls: () => out(i18n('term.ls')),
    'cat': a => out(/secre|segre|geheim/.test(a) ? i18n('term.secret') : i18n('term.nofile')),
    rm: () => out(i18n('term.rm'), 'e'),
    exit: () => out(i18n('term.exit')),
  };
  out(i18n('term.hello'));
  // si el idioma cambia antes de que escriban algo, el saludo se reimprime en el nuevo
  let fresh = true;
  addEventListener('lang', () => { if (fresh) { body.innerHTML = ''; out(i18n('term.hello')); } });
  inp.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') { if (hi > 0) inp.value = hist[--hi]; e.preventDefault(); return; }
    if (e.key === 'ArrowDown') { inp.value = hist[++hi] || ''; hi = Math.min(hi, hist.length); return; }
    if (e.key !== 'Enter') return;
    const raw = inp.value.trim(); inp.value = ''; if (!raw) return;
    fresh = false;
    hist.push(raw); hi = hist.length;
    out(raw.replace(/</g, '&lt;'), 'c');
    const [c, ...a] = raw.split(/\s+/);
    (cmds[c.toLowerCase()] || (() => out(`${i18n('term.notfound')}: ${c.replace(/</g, '&lt;')}`, 'e')))(a.join(' '));
  });
  $('#term').addEventListener('click', () => inp.focus({ preventScroll: true }));
}

/* ---------------- glitch out (sudo hire-me / redes) ----------------
   intensidad g: 0 → 1 en `dur` ms; en el pico llama atPeak() y deja todo como estaba.
   logo (opcional): path SVG 24x24 que se va materializando glitcheado en el centro */
let glitching = false;
const openExt = url => { const w = open(url, '_blank'); if (w) w.opener = null; else location.href = url; };
function glitchOut(dur, atPeak, logo) {
  glitching = true;
  const root = document.documentElement, targets = $$('main, footer');
  const cv = document.createElement('canvas'), x = cv.getContext('2d');
  const pal = ['var(--acc)', 'var(--acc2)', 'var(--err)', 'var(--white)', 'var(--black)'].map(c => `rgb(${rgbOf(c)})`);
  const rnd = (a = 1, b = 0) => b + Math.random() * (a - b);
  const reset = () => {
    root.classList.remove('glitching'); root.style.removeProperty('filter'); root.style.removeProperty('--gx'); root.style.removeProperty('--ga');
    targets.forEach(t => t.style.removeProperty('transform')); cv.remove(); glitching = false;
  };
  if (RM) return setTimeout(() => { atPeak(); glitching = false; }, dur);
  cv.className = 'glitch-fx'; document.body.appendChild(cv);
  const w = cv.width = innerWidth, h = cv.height = innerHeight;
  // logo pre-renderizado en 3 tintes: principal + 2 para el split RGB
  const S = Math.round(Math.min(w, h) * .32), tint = c => {
    const o = document.createElement('canvas'), ox = o.getContext('2d'); o.width = o.height = S;
    ox.scale(S / 24, S / 24); ox.fillStyle = c; ox.fill(new Path2D(logo)); return o;
  };
  const L = logo && { main: tint(pal[0]), r: tint(pal[2]), b: tint(pal[1]) };
  root.classList.add('glitching');
  const t0 = performance.now();
  (function step(now) {
    const p = clamp((now - t0) / dur, 0, 1), g = p * p * (3 - 2 * p) * p; // arranca suave, explota al final
    // desplazamiento / skew del contenido
    const jit = Math.random() < g * .9;
    targets.forEach(t => t.style.transform = jit ? `translate(${rnd(-1, 1) * 46 * g}px,${rnd(-1, 1) * 10 * g}px) skewX(${rnd(-1, 1) * 8 * g}deg)` : '');
    // color: hue, contraste, flashes de invert
    root.style.filter = `hue-rotate(${Math.random() < g * .6 ? rnd(360) : 0}deg) saturate(${1 + g * 2.5}) contrast(${1 + g * .9})${Math.random() < g * g * .3 ? ' invert(1)' : ''}`;
    // split RGB del texto
    root.style.setProperty('--gx', `${rnd(-1, 1) * 14 * g}px`);
    root.style.setProperty('--ga', clamp((g - .15) * 2, 0, 1)); // entra recién con el glitch avanzado
    // overlay: bandas, bloques y scanlines
    x.clearRect(0, 0, w, h);
    const bands = Math.floor(g * g * 46 + g * 6);
    for (let i = 0; i < bands; i++) {
      x.globalAlpha = rnd(.2, .85) * Math.max(g, .3);
      x.fillStyle = pal[Math.random() * pal.length | 0];
      x.fillRect(rnd(w * .4, -w * .2), rnd(h), w * rnd(1, .15), rnd(4 + g * 70, 1));
    }
    for (let i = 0; i < g * 120; i++) {
      x.globalAlpha = rnd(.9, .3); x.fillStyle = pal[Math.random() * pal.length | 0];
      const s = rnd(4 + g * 26, 2); x.fillRect(rnd(w), rnd(h), s * rnd(4, 1), s);
    }
    // logo: aparece de a poco, cortado en franjas desplazadas, con split RGB y parpadeo
    if (L && Math.random() > (1 - p) * .55) {
      const ox = (w - S) / 2, oy = (h - S) / 2, a = clamp(p * 1.5, 0, 1), sp = 4 + 18 * (1 - p) + rnd(10 * g);
      for (let y = 0; y < S;) {
        const sh = Math.min(S - y, rnd(4 + 30 * p, 3)), big = Math.random() < .25;
        const dx = rnd(-1, 1) * (big ? 70 : 8) * (1.2 - p * .6);
        if (Math.random() < .12 * (1 - p)) { y += sh; continue; } // franja que todavía no apareció
        x.globalAlpha = a * .8;
        x.drawImage(L.r, 0, y, S, sh, ox + dx - sp, oy + y, S, sh);
        x.drawImage(L.b, 0, y, S, sh, ox + dx + sp, oy + y, S, sh);
        x.globalAlpha = a;
        x.drawImage(L.main, 0, y, S, sh, ox + dx, oy + y, S, sh);
        y += sh;
      }
    }
    x.globalAlpha = g * .25; x.fillStyle = pal[4];
    for (let y = 0; y < h; y += 3) x.fillRect(0, y, w, 1);
    if (p > .94) { x.globalAlpha = (p - .94) / .06 * .9; x.fillStyle = pal[3]; x.fillRect(0, 0, w, h); }
    x.globalAlpha = 1;
    if (p < 1) requestAnimationFrame(step);
    else { atPeak(); reset(); } // sync: con la pestaña nueva en foco el rAF de esta se congela
  })(t0);
  addEventListener('pageshow', reset, { once: true }); // por si vuelve con back (bfcache)
}

/* ---------------- click ripple: onda de distorsión sobre la página ----------------
   Un anillo grueso se expande desde el click y funciona como MÁSCARA: adentro del anillo el contenido real
   se deforma (refracción + tears horizontales + split RGB) vía el filtro SVG #wave sobre <html>.
   Cada frame se genera el mapa de desplazamiento (R = x, G = y, 128 = neutro) a 1/K de resolución. */
/* onda compartida: clickRipple la dibuja con el filtro SVG; las partículas (canvas del hero y floaters) la leen con waves()
   y se deforman solas, porque el filtro sobre <html> no siempre alcanza al canvas ni a las capas fijas compuestas */
const WAVE = { list: [], n: 0, DUR: 1400, T: 190, PX: 36 }; // T = grosor del anillo · PX = desplazamiento máx. (≈ scale del filtro / 2)
const fract = v => v - Math.floor(v);
// energía que le queda a la onda para el sacudón a `d` px del click: pegado al click 1.35, a 500px ~la mitad, y se apaga.
// Solo para el sacudón: la distorsión (glitch) de la onda no pierde fuerza con la distancia
const SCATTER_FALL = 700;
const waveFall = d => Math.exp(-d / SCATTER_FALL); // 1 pegado al click → 0 lejos (para el giro)
const waveKick = d => 1.35 * waveFall(d);          // empujón
// frentes de onda activos en `now`: { id, x, y, r (radio del centro del anillo), f (fuerza que le queda, 1 → 0) }.
// El sacudón de cada cosa se dispara cuando r la alcanza (no en el click): cada una guarda el id de la última onda que la golpeó
function fronts(now) {
  const out = [];
  for (const R of WAVE.list) {
    const p = (now - R.t0) / WAVE.DUR;
    if (p >= 0 && p < 1) out.push({ id: R.id, x: R.x, y: R.y, r: R.maxR * (1 - Math.pow(1 - p, 2.2)), f: Math.pow(1 - p, 1.3) });
  }
  return out;
}
// ondas activas en `now` → función (x, y) en coords de viewport → { dx, dy, e } (e = intensidad 0–1, para el split RGB)
function waves(now) {
  const act = [];
  for (const R of WAVE.list) {
    const p = (now - R.t0) / WAVE.DUR;
    if (p >= 0 && p < 1) act.push({ x: R.x, y: R.y, r: R.maxR * (1 - Math.pow(1 - p, 2.2)), f: Math.pow(1 - p, 1.3) });
  }
  if (!act.length) return null;
  const half = WAVE.T / 2, seed = Math.floor(now / 33); // tears: bandas horizontales que se re-sortean ~30 veces por segundo
  return (x, y) => {
    let dx = 0, dy = 0, e = 0;
    for (const a of act) {
      const ox = x - a.x, oy = y - a.y, d = Math.hypot(ox, oy) || 1, s = (d - a.r) / half;
      if (s <= -1 || s >= 1) continue;
      const k = (.5 + .5 * Math.cos(Math.PI * s)) * a.f, wv = Math.sin(Math.PI * s) * .6;
      const h = fract(Math.sin(Math.floor(y / 14) * 12.9898 + seed * 78.233) * 43758.5453);
      const tear = h < .4 ? h / .4 * 2 - 1 : 0;
      dx += (ox / d * wv + tear * .95) * k; dy += oy / d * wv * k; e = Math.max(e, k);
    }
    return { dx: clamp(dx, -1, 1) * WAVE.PX, dy: clamp(dy, -1, 1) * WAVE.PX, e };
  };
}

function clickRipple() {
  if (RM) return;
  const root = document.documentElement, ripples = WAVE.list, rnd = (a = 1, b = 0) => b + Math.random() * (a - b);
  const DUR = WAVE.DUR, T = WAVE.T;
  const A_WAVE = .6, A_TEAR = .95; // fuerza de refracción / tears (0–1 del scale del filtro)
  /* calidad adaptativa: el filtro sobre <html> cuesta proporcional a los píxeles de pantalla y a la máquina.
     Mientras corre la onda se miden los frames; si no da abasto (>40ms) baja un nivel en el momento y queda así.
     Las partículas, floaters, letras y el glitch de texto leen la onda por su cuenta (waves/fronts): siguen igual. */
  const LEVELS = [
    { K: 4, f: '#wave' },      // mapa 1/4 de resolución, 3 desplazamientos (split RGB)
    { K: 6, f: '#wave' },      // mapa más chico (menos JS + PNG)
    { K: 8, f: '#wave-lite' }, // 1 solo desplazamiento, sin split RGB en el filtro
    null,                      // sin filtro de página
  ];
  const dpr = devicePixelRatio || 1;
  let lvl = innerWidth * innerHeight * dpr * dpr > 8e6 ? 1 : 0; // pantallas enormes (4K, escalado alto): un nivel menos de arranque
  let filt, fe, K, EDGE, mw, mh, img, rows, mc, mx;
  const use = l => {
    lvl = l;
    const L = LEVELS[lvl];
    if (fe) fe.removeAttribute('href');
    if (!L) { if (!glitching) root.style.removeProperty('filter'); return; }
    filt = $(L.f); fe = $(L.f === '#wave' ? '#wave-map' : '#wave-map-lite'); K = L.K;
    EDGE = Math.round(56 / K); // px de mapa: la distorsión se apaga cerca de los bordes (no samplea afuera → sin blancos)
    mc = document.createElement('canvas'); mx = mc.getContext('2d'); mw = 0;
  };
  use(lvl);
  let running = false, frame = 0, last = 0;
  const dts = [];
  // clientWidth/Height: sin la scrollbar (ahí no hay contenido para samplear)
  const vwh = () => [root.clientWidth, root.clientHeight];
  const size = () => { const [vw, vh] = vwh(); mw = Math.ceil(vw / K); mh = Math.ceil(vh / K); mc.width = mw; mc.height = mh; img = mx.createImageData(mw, mh); rows = new Float32Array(mh); };

  addEventListener('pointerdown', e => {
    if (e.button) return;
    const x = e.clientX, y = e.clientY;
    // radio final fijo (diagonal + grosor): misma velocidad de expansión sin importar dónde se clickee,
    // y alcanza para barrer toda la pantalla desde cualquier punto
    const maxR = Math.hypot(...vwh()) + T;
    ripples.push({ id: ++WAVE.n, x, y, maxR, t0: performance.now() });
    if (!running) { running = true; last = 0; dts.length = 0; requestAnimationFrame(loop); }
  });

  // si un frame falla se descarta todo y se limpia: nunca queda trabado
  function loop(now) {
    // fps: mediana de los últimos 4 frames; si no da abasto, un nivel menos (desde ya, en esta misma onda)
    if (last) {
      dts.push(now - last); if (dts.length > 4) dts.shift();
      if (dts.length === 4 && lvl < LEVELS.length - 1 && [...dts].sort((a, b) => a - b)[1] > 40) { use(lvl + 1); dts.length = 0; }
    }
    last = now;
    try { draw(now); } catch { ripples.length = 0; }
    if (ripples.length) requestAnimationFrame(loop);
    else { if (!glitching) root.style.removeProperty('filter'); fe?.removeAttribute('href'); running = false; }
  }

  function draw(now) {
    // ondas vencidas fuera (la lista la comparten las partículas: el ciclo de vida sigue aunque no haya filtro)
    const act = [];
    for (let i = ripples.length - 1; i >= 0; i--) {
      const R = ripples[i], p = Math.max(0, (now - R.t0) / DUR);
      if (p >= 1) { ripples.splice(i, 1); continue; }
      act.push({ x: R.x, y: R.y, r: R.maxR * (1 - Math.pow(1 - p, 2.2)), f: Math.pow(1 - p, 1.3) });
    }
    if (!act.length || !LEVELS[lvl]) return;

    const [vw, vh] = vwh(), sy = scrollY;
    if (Math.ceil(vw / K) !== mw || Math.ceil(vh / K) !== mh) size();
    // el filtro trabaja en coords del documento: su región = el viewport actual (no procesa toda la página)
    for (const el of [filt, fe]) { el.setAttribute('x', 0); el.setAttribute('y', sy); el.setAttribute('width', vw); el.setAttribute('height', vh); }

    // tears: bloques de filas con desplazamiento horizontal aleatorio, se re-sortean cada 2 frames
    if (frame++ % 2 === 0) for (let y = 0; y < mh;) {
      const n = 1 + (Math.random() * 6 | 0), v = Math.random() < .4 ? rnd(-1, 1) : 0;
      for (let k = 0; k < n && y < mh; k++) rows[y++] = v;
    }

    const half = T / 2 / K, d = img.data;
    const A = act.map(a => ({ cx: a.x / K, cy: a.y / K, r: a.r / K, f: a.f }));
    for (let y = 0, i = 0; y < mh; y++) {
      const tear = rows[y], ey = Math.min(1, y / EDGE, (mh - 1 - y) / EDGE);
      // filas que ningún anillo toca: neutras de una (sin recorrer píxel por píxel con raíces/trig)
      let rowHit = false;
      for (const a of A) if (Math.abs(y - a.cy) < a.r + half) { rowHit = true; break; }
      if (!rowHit || ey <= 0) { d.fill(128, i, i + mw * 4); for (let x = 0; x < mw; x++) d[i + x * 4 + 3] = 255; i += mw * 4; continue; }
      for (let x = 0; x < mw; x++, i += 4) {
        const edge = Math.min(ey, x / EDGE, (mw - 1 - x) / EDGE);
        let dx = 0, dy = 0;
        if (edge > 0) for (const a of A) {
          const ox = x - a.cx, oy = y - a.cy, dist = Math.sqrt(ox * ox + oy * oy) || 1, s = (dist - a.r) / half;
          if (s <= -1 || s >= 1) continue;
          const e = (.5 + .5 * Math.cos(Math.PI * s)) * a.f, wv = Math.sin(Math.PI * s) * A_WAVE;
          dx += (ox / dist * wv + tear * A_TEAR) * e;
          dy += (oy / dist * wv) * e;
        }
        d[i] = 128 + Math.max(-1, Math.min(1, dx * edge)) * 127;
        d[i + 1] = 128 + Math.max(-1, Math.min(1, dy * edge)) * 127;
        d[i + 2] = 128; d[i + 3] = 255;
      }
    }
    mx.putImageData(img, 0, 0);
    fe.setAttribute('href', mc.toDataURL());
    if (!glitching) root.style.filter = `url(${LEVELS[lvl].f})`;
  }
}

/* ---------------- brand color picker ---------------- */
function brandPicker() {
  // el color inicial (guardado o el de config.js) ya lo aplicó el script del <head>, antes del primer pintado
  const inp = $('#brand-picker'), hex = $('#brand-hex'), rst = $('#brand-reset'), root = document.documentElement, KEY = 'zltrn-brand';
  const toHex = rgb => '#' + rgb.split(',').map(n => (+n).toString(16).padStart(2, '0')).join('');
  let custom = false;
  try { custom = !!localStorage.getItem(KEY); } catch {}
  const sync = () => {
    const v = toHex(rgbOf('var(--BRAND_COLOR)'));
    inp.value = v; hex.textContent = v;
    rst.hidden = !custom;
    $('meta[name="theme-color"]').content = `rgb(${rgbOf('var(--bg)')})`;
  };
  const set = v => {
    custom = !!v;
    root.style.setProperty('--BRAND_COLOR', v || CONFIG.brandColor);
    try { v ? localStorage.setItem(KEY, v) : localStorage.removeItem(KEY); } catch {}
    sync(); dispatchEvent(new Event('brand'));
  };
  sync();
  inp.addEventListener('input', () => set(inp.value));
  rst.addEventListener('click', () => set(null));
}

/* ---------------- go ---------------- */
render();
lang();
brandPicker();
history.scrollRestoration = 'manual'; scrollTo(0, 0);
const field = terrain();
clock(); cursor(); anchors(); email(); terminal(); projectArt(); scrollFX(); drag(); floaters(); scatterLetters(); textGlitch(); clickRipple();boot().then(() => {
  document.body.classList.remove('loading');
  document.body.classList.add('ready');
  observers();
  roles();
  if (!RM) field.start();
});
})();
