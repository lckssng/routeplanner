const STORAGE_KEY = 'groep8-routeplanner-v1';

const QUESTIONS = [
  {
    id: 'location',
    title: 'Waar woon je?',
    subtitle: 'Handig om scholen dichtbij te vinden. Je mag deze vraag overslaan.',
    columns: 2,
    options: [
      { value: 'heerlen', label: 'Heerlen', icon: '●', tone: 'orange' },
      { value: 'landgraaf', label: 'Landgraaf', icon: '●', tone: 'blue' },
      { value: 'kerkrade', label: 'Kerkrade', icon: '●', tone: 'pink' },
      { value: 'elders', label: 'Ergens anders', icon: '●', tone: 'black' },
    ],
  },
  {
    id: 'advice',
    title: 'Welk schooladvies heb je?',
    subtitle: 'Weet je het nog niet zeker? Geen probleem, kies dan de laatste optie.',
    columns: 2,
    options: [
      { value: 'praktijk', label: 'Praktijk', icon: 'P', tone: 'orange' },
      { value: 'vmbo-b', label: 'Vmbo basis', icon: 'B', tone: 'blue' },
      { value: 'vmbo-k', label: 'Vmbo kader', icon: 'K', tone: 'blue' },
      { value: 'vmbo-t', label: 'Vmbo GL/TL', icon: 'V', tone: 'blue' },
      { value: 'havo', label: 'Havo', icon: 'H', tone: 'pink' },
      { value: 'gymnasium', label: 'Gymnasium', icon: 'G', tone: 'purple' },
      { value: 'atheneum', label: 'Atheneum', icon: 'A', tone: 'purple' },
      { value: 'onbekend', label: 'Weet ik niet', icon: '💡', tone: 'gold' },
    ],
  },
  {
    id: 'interests',
    title: 'Waar liggen je interesses?',
    subtitle: 'Wat maakt je blij? Wat vind je leuk om te doen? Kies er maximaal drie.',
    columns: 2,
    multi: true,
    max: 3,
    options: [
      { value: 'techniek', label: 'Techniek & maken', icon: '⚙', tone: 'gray' },
      { value: 'creatief', label: 'Kunst & creatief', icon: '🎨', tone: 'orange' },
      { value: 'sport', label: 'Sport & bewegen', icon: '🏃', tone: 'gray' },
      { value: 'zorg', label: 'Zorg & mensen', icon: '💗', tone: 'pink' },
      { value: 'natuur', label: 'Natuur & dieren', icon: '🌿', tone: 'green' },
      { value: 'talen', label: 'Talen & wereld', icon: '🌍', tone: 'blue' },
    ],
  },
  {
    id: 'career',
    title: 'Wat lijkt je later een leuke baan?',
    subtitle: 'Nog geen idee? Heel normaal, kies wat het dichtst in de buurt komt.',
    columns: 2,
    options: [
      { value: 'zorg', label: 'Iets met zorg & mensen', icon: '🩺', tone: 'gray' },
      { value: 'techniek', label: 'Iets met bouwen & techniek', icon: '🏗', tone: 'orange' },
      { value: 'ict', label: 'Iets met ICT & computers', icon: '💻', tone: 'black' },
      { value: 'ondernemen', label: 'Iets met geld & ondernemen', icon: '📈', tone: 'pink' },
      { value: 'creatief', label: 'Iets creatiefs & media', icon: '🎬', tone: 'black' },
      { value: 'natuur', label: 'Iets met natuur & dieren', icon: '🌱', tone: 'green' },
      { value: 'sport', label: 'Iets met sport & bewegen', icon: '⚽', tone: 'blue' },
      { value: 'recht', label: 'Iets met recht & veiligheid', icon: '⚖', tone: 'gray' },
      { value: 'onderwijs', label: 'Iets met kinderen & onderwijs', icon: '🎓', tone: 'black' },
      { value: 'onbekend', label: '(Nog) geen idee', icon: '💡', tone: 'gold' },
    ],
  },
  {
    id: 'ambition',
    title: 'Hoe ver wil je doorleren?',
    subtitle: 'Je mag altijd van gedachten veranderen, je route ligt nooit vast.',
    columns: 2,
    options: [
      { value: 'werk', label: 'Zo snel mogelijk aan het werk', icon: '💼', tone: 'brown' },
      { value: 'mbo', label: 'MBO-diploma halen', icon: '🏫', tone: 'black' },
      { value: 'hbo', label: 'HBO-diploma halen', icon: '🎓', tone: 'black' },
      { value: 'wo', label: 'WO-diploma halen', icon: '♟', tone: 'black' },
    ],
  },
  {
    id: 'learning',
    title: 'Hoe leer jij het liefst?',
    subtitle: 'Op welke manier vind jij het leren leuk? Er is geen goed of fout, kies wat bij jou past.',
    columns: 2,
    options: [
      { value: 'doen', label: 'Vooral doen & maken', icon: '🛠', tone: 'gray' },
      { value: 'denken', label: 'Vooral denken & ontdekken', icon: '💡', tone: 'gold' },
      { value: 'mix', label: 'Een mix van doen en denken', icon: '⚒', tone: 'gray' },
      { value: 'buiten', label: 'Leren buiten de klas', icon: '▣', tone: 'brown' },
    ],
  },
  {
    id: 'values',
    title: 'Wat vind je belangrijk?',
    subtitle: 'Waar voel jij je het fijnst? Wat is het belangrijkste ding waar een school aan moet doen volgens jou.',
    columns: 2,
    options: [
      { value: 'klein', label: 'Kleinschalige school', icon: '🎒', tone: 'red' },
      { value: 'uitdaging', label: 'Veel keuze & uitdagingen', icon: '⚖', tone: 'gray' },
      { value: 'dichtbij', label: 'Dichtbij huis', icon: '🏠', tone: 'brown' },
      { value: 'projecten', label: 'Creatieve vakken & projecten', icon: '🎨', tone: 'green' },
      { value: 'sport', label: 'Sport & activiteiten', icon: '🏃', tone: 'gold' },
      { value: 'modern', label: 'Modern & nieuw gebouw', icon: '🏫', tone: 'green' },
    ],
  },
];

const SCHOOLS = [
  {
    id: 'brandenberg',
    name: 'Beroepscollege Brandenberg',
    location: 'landgraaf',
    levels: ['vmbo-b', 'vmbo-k', 'vmbo-t'],
    website: 'https://brandenberg.bcpl.nl/',
    color: '#e51075',
    initials: 'BB',
    levelLabel: 'vmbo basis, kader & tl',
    interests: ['creatief', 'sport', 'zorg'],
    careers: ['ondernemen', 'zorg', 'creatief', 'sport'],
    learning: ['doen', 'mix', 'buiten'],
    values: ['klein', 'projecten', 'sport', 'dichtbij'],
  },
  {
    id: 'nieuwe-thermen',
    name: 'De Nieuwe Thermen',
    location: 'heerlen',
    levels: ['vmbo-t', 'havo'],
    website: 'https://www.nieuwethermen.nl/',
    color: '#00a6df',
    initials: 'NT',
    levelLabel: 'vmbo-t & havo onderbouw',
    interests: ['techniek', 'creatief', 'natuur', 'talen'],
    careers: ['ict', 'ondernemen', 'creatief', 'natuur'],
    learning: ['mix', 'buiten', 'denken'],
    values: ['uitdaging', 'projecten', 'modern'],
  },
  {
    id: 'sintermeerten',
    name: 'Sintermeertencollege',
    location: 'heerlen',
    levels: ['vmbo-t', 'havo', 'atheneum', 'gymnasium'],
    website: 'https://www.sintermeerten.nl/',
    color: '#8554c8',
    initials: 'SM',
    levelLabel: 'mavo, havo, atheneum & gymnasium',
    interests: ['sport', 'zorg', 'natuur', 'talen'],
    careers: ['zorg', 'sport', 'recht', 'onderwijs'],
    learning: ['denken', 'mix'],
    values: ['uitdaging', 'sport', 'projecten'],
  },
  {
    id: 'holz',
    name: 'Beroepscollege Holz',
    location: 'kerkrade',
    levels: ['vmbo-b', 'vmbo-k', 'vmbo-t'],
    website: 'https://holz.bcpl.nl/',
    color: '#f7941d',
    initials: 'BH',
    levelLabel: 'vmbo basis, kader & tl',
    interests: ['techniek', 'creatief', 'zorg'],
    careers: ['techniek', 'zorg', 'creatief', 'onderwijs'],
    learning: ['doen', 'mix'],
    values: ['klein', 'projecten', 'dichtbij'],
  },
  {
    id: 'bernardinus',
    name: 'Bernardinuscollege',
    location: 'heerlen',
    levels: ['havo', 'atheneum', 'gymnasium'],
    website: 'https://bernardinuscollege.nl/',
    color: '#e51075',
    initials: 'BC',
    levelLabel: 'havo, atheneum & gymnasium',
    interests: ['techniek', 'creatief', 'talen'],
    careers: ['techniek', 'ict', 'ondernemen', 'creatief', 'recht'],
    learning: ['denken', 'mix'],
    values: ['uitdaging', 'projecten', 'modern'],
  },
  {
    id: 'eijkhagen',
    name: 'Eijkhagen College',
    location: 'landgraaf',
    levels: ['vmbo-t', 'havo', 'atheneum', 'gymnasium'],
    website: 'https://eijkhagen.nl/',
    color: '#f7941d',
    initials: 'EC',
    levelLabel: 'vmbo-tl, havo, atheneum & gymnasium',
    interests: ['techniek', 'creatief', 'sport', 'talen'],
    careers: ['techniek', 'ict', 'ondernemen', 'creatief', 'sport', 'recht'],
    learning: ['denken', 'mix'],
    values: ['uitdaging', 'sport', 'projecten', 'modern'],
  },
  {
    id: 'herle',
    name: 'Beroepscollege Herle',
    location: 'heerlen',
    levels: ['vmbo-b', 'vmbo-k', 'vmbo-t'],
    website: 'https://herle.bcpl.nl/',
    color: '#00a6df',
    initials: 'HE',
    levelLabel: 'vmbo basis, kader & tl',
    interests: ['techniek', 'creatief', 'zorg'],
    careers: ['techniek', 'ondernemen', 'zorg', 'creatief'],
    learning: ['doen', 'mix', 'buiten'],
    values: ['klein', 'projecten', 'sport'],
  },
  {
    id: 'ppl',
    name: 'Beroepscollege PPL',
    location: 'heerlen',
    levels: ['praktijk'],
    website: 'https://ppl.bcpl.nl/',
    color: '#e51075',
    initials: 'PP',
    levelLabel: 'praktijkonderwijs',
    interests: ['techniek', 'creatief', 'sport', 'zorg', 'natuur'],
    careers: ['techniek', 'ondernemen', 'zorg', 'creatief', 'natuur', 'sport', 'onderwijs'],
    learning: ['doen', 'buiten', 'mix'],
    values: ['klein', 'dichtbij', 'projecten'],
  },
  {
    id: 'techniekcollege',
    name: 'Techniekcollege Parkstad',
    location: 'heerlen',
    levels: ['vmbo-b', 'vmbo-k'],
    website: 'https://www.tcpl.nl/',
    color: '#00a6df',
    initials: 'TC',
    levelLabel: 'bovenbouw vmbo basis & kader',
    interests: ['techniek'],
    careers: ['techniek'],
    learning: ['doen', 'mix'],
    values: ['klein', 'modern', 'projecten'],
  },
];

const PROGRAMS = {
  ondernemen: [
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Commerciële Economie', url: 'https://www.zuyd.nl/opleidingen/commerciele-economie', color: '#009fe3' },
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Finance & Control', url: 'https://www.zuyd.nl/opleidingen/finance-control', color: '#e51075' },
    { level: 'Mbo', school: 'VISTA college', name: 'Ondernemer handel', url: 'https://vistacollege.nl/opleiding/ondernemer-handel', color: '#f7941d' },
  ],
  zorg: [
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Verpleegkunde', url: 'https://www.zuyd.nl/opleidingen/verpleegkunde', color: '#009fe3' },
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Social Work', url: 'https://www.zuyd.nl/opleidingen/social-work', color: '#e51075' },
    { level: 'Mbo', school: 'VISTA college', name: 'Mbo-verpleegkundige', url: 'https://vistacollege.nl/opleiding/mbo-verpleegkundige', color: '#f7941d' },
  ],
  techniek: [
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Engineering', url: 'https://www.zuyd.nl/opleidingen/engineering', color: '#009fe3' },
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Built Environment', url: 'https://www.zuyd.nl/opleidingen/built-environment', color: '#e51075' },
    { level: 'Mbo', school: 'VISTA college', name: 'Technicus engineering', url: 'https://vistacollege.nl/opleiding/technicus-engineering-maakindustrie', color: '#f7941d' },
  ],
  ict: [
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'HBO-ICT', url: 'https://www.zuyd.nl/opleidingen/ict', color: '#009fe3' },
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Technische Informatica', url: 'https://www.zuyd.nl/opleidingen/technische-informatica', color: '#e51075' },
    { level: 'Mbo', school: 'VISTA college', name: 'Software developer', url: 'https://vistacollege.nl/opleiding/software-developer', color: '#f7941d' },
  ],
  creatief: [
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Communication & Multimedia Design', url: 'https://www.zuyd.nl/opleidingen/communication-and-multimedia-design', color: '#009fe3' },
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Vormgeving | Design', url: 'https://www.zuyd.nl/opleidingen/vormgeving-design', color: '#e51075' },
    { level: 'Mbo', school: 'VISTA college', name: 'Mediavormgever', url: 'https://vistacollege.nl/opleiding/mediavormgever', color: '#f7941d' },
  ],
  natuur: [
    { level: 'Mbo', school: 'Yuverta Heerlen', name: 'Dierverzorging', url: 'https://www.yuverta.nl/mbo/richtingen/dier-mens-en-zorg/dierverzorging/', color: '#009fe3' },
    { level: 'Mbo', school: 'Yuverta Heerlen', name: 'Dierenartsassistent', url: 'https://www.yuverta.nl/mbo/richtingen/dier-mens-en-zorg/dierenartsassistent-paraveterinair/', color: '#e51075' },
    { level: 'Mbo', school: 'Yuverta Heerlen', name: 'Natuur en water', url: 'https://www.yuverta.nl/mbo/richtingen/natuur-en-water/', color: '#f7941d' },
  ],
  sport: [
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Fysiotherapie', url: 'https://www.zuyd.nl/opleidingen/fysiotherapie', color: '#009fe3' },
    { level: 'Mbo', school: 'VISTA CIOS', name: 'Sport- en bewegingsleider', url: 'https://vistacollege.nl/cios/opleiding/sport-en-bewegingsleider', color: '#e51075' },
    { level: 'Mbo', school: 'VISTA CIOS', name: 'CIOS Topsportopleiding', url: 'https://vistacollege.nl/opleiding/cios-topsportopleiding', color: '#f7941d' },
  ],
  recht: [
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'HBO-Rechten', url: 'https://www.zuyd.nl/opleidingen/hbo-rechten', color: '#009fe3' },
    { level: 'Mbo', school: 'VISTA college', name: 'Publieke veiligheid', url: 'https://vistacollege.nl/opleiding/publieke-veiligheid', color: '#e51075' },
    { level: 'Wo', school: 'Maastricht University', name: 'European Law School', url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/european-law-school', color: '#f7941d' },
  ],
  onderwijs: [
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Leraar Basisonderwijs', url: 'https://www.zuyd.nl/opleidingen/leraar-basisonderwijs', color: '#009fe3' },
    { level: 'Mbo', school: 'VISTA college', name: 'Onderwijsassistent', url: 'https://vistacollege.nl/entree/opleiding/onderwijsassistent', color: '#e51075' },
    { level: 'Mbo', school: 'VISTA college', name: 'Gespecialiseerd pedagogisch medewerker', url: 'https://vistacollege.nl/opleiding/gespecialiseerd-pedagogisch-medewerker', color: '#f7941d' },
  ],
  talen: [
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'European Studies', url: 'https://www.zuyd.nl/opleidingen/european-studies', color: '#009fe3' },
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'International Business', url: 'https://www.zuyd.nl/opleidingen/international-business', color: '#e51075' },
    { level: 'Hbo', school: 'Zuyd Hogeschool', name: 'Internationale Communicatie en Talen', url: 'https://www.zuyd.nl/opleidingen/internationale-communicatie-en-talen', color: '#f7941d' },
  ],
};

const WO_PROGRAM_CATALOG = {
  internationalBusiness: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'International Business',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/international-business',
  },
  economics: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Economics and Business Economics',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/economics-and-business-economics',
  },
  businessAnalytics: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Business Analytics',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/business-analytics',
  },
  medicine: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Geneeskunde',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/medicine',
  },
  healthSciences: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Gezondheidswetenschappen',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/health-sciences',
  },
  biomedicalSciences: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Biomedical Sciences',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/biomedical-sciences',
  },
  circularEngineering: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Circular Engineering',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/circular-engineering',
  },
  computerScience: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Computer Science',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/computer-science',
  },
  scienceProgramme: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Maastricht Science Programme',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/maastricht-science-programme',
  },
  dataScience: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Data Science and Artificial Intelligence',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/data-science-and-artificial-intelligence',
  },
  digitalSociety: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Digital Society',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/digital-society',
  },
  artsAndCulture: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Arts and Culture',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/arts-and-culture',
  },
  globalStudies: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Global Studies',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/global-studies',
  },
  psychology: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Psychologie',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/psychology',
  },
  europeanLaw: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'European Law School',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/european-law-school',
  },
  dutchLaw: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Rechtsgeleerdheid',
    url: 'https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/rechtsgeleerdheid',
  },
  taxLaw: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'Fiscaal Recht',
    url: 'https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/fiscaal-recht',
  },
  europeanStudies: {
    level: 'Wo',
    school: 'Maastricht University',
    name: 'European Studies',
    url: 'https://www.maastrichtuniversity.nl/education/bachelor/programmes/european-studies',
  },
};

const WO_PROGRAMS = {
  ondernemen: ['internationalBusiness', 'economics', 'businessAnalytics'],
  zorg: ['medicine', 'healthSciences', 'biomedicalSciences'],
  techniek: ['circularEngineering', 'computerScience', 'scienceProgramme'],
  ict: ['dataScience', 'computerScience', 'digitalSociety'],
  creatief: ['artsAndCulture', 'digitalSociety', 'globalStudies'],
  natuur: ['scienceProgramme', 'circularEngineering', 'biomedicalSciences'],
  sport: ['healthSciences', 'psychology', 'biomedicalSciences'],
  recht: ['europeanLaw', 'dutchLaw', 'taxLaw'],
  onderwijs: ['psychology', 'biomedicalSciences', 'artsAndCulture'],
  talen: ['europeanStudies', 'globalStudies', 'artsAndCulture'],
};

const PROGRAM_COLORS = ['#009fe3', '#e51075', '#f7941d'];

const LEVEL_LABELS = {
  praktijk: 'Praktijkonderwijs',
  'vmbo-b': 'Vmbo basis',
  'vmbo-k': 'Vmbo kader',
  'vmbo-t': 'Vmbo GL/TL',
  havo: 'Havo',
  atheneum: 'Atheneum',
  gymnasium: 'Gymnasium',
};

const SECONDARY_DURATIONS = {
  praktijk: 'ongeveer 5 jaar',
  'vmbo-b': '4 jaar',
  'vmbo-k': '4 jaar',
  'vmbo-t': '4 jaar',
  havo: '5 jaar',
  atheneum: '6 jaar',
  gymnasium: '6 jaar',
};

const CAREER_LABELS = {
  zorg: 'Zorg & mensen',
  techniek: 'Techniek',
  ict: 'ICT',
  ondernemen: 'Ondernemen',
  creatief: 'Creatief & media',
  natuur: 'Natuur & dieren',
  sport: 'Sport & bewegen',
  recht: 'Recht & veiligheid',
  onderwijs: 'Onderwijs',
  talen: 'Talen & wereld',
};

const ROUTE_CARD_INFO = {
  Praktijkonderwijs: 'Je leert vooral door te doen en loopt veel stage. Je bereidt je voor op werk of, als dat bij je past, een vervolg op het mbo.',
  'Vmbo basis': 'Een praktische vmbo-route met veel beroepsgerichte lessen. Met dit diploma kun je meestal door naar mbo niveau 2.',
  'Vmbo kader': 'Een combinatie van praktijk en theorie. Met dit diploma kun je meestal door naar mbo niveau 3 of 4.',
  'Vmbo GL/TL': 'Een vmbo-route met meer theoretische vakken. Hierna kun je naar mbo niveau 3 of 4 en soms doorstromen naar de havo.',
  Havo: 'Een vijfjarige, vooral theoretische opleiding die voorbereidt op het hbo. Doorstromen naar het vwo kan ook.',
  Atheneum: 'Vwo zonder de klassieke talen Grieks en Latijn. Het atheneum bereidt je voor op een studie aan de universiteit.',
  Gymnasium: 'Vwo met Grieks en Latijn. Het gymnasium bereidt je voor op een studie aan de universiteit.',
  'Havo 4 en 5': 'Na vmbo GL/TL kun je onder voorwaarden instromen in havo 4. In deze twee leerjaren haal je een havodiploma.',
  'Vwo 5 en 6': 'Na de havo kun je onder voorwaarden naar vwo 5. Met het vwo-diploma kun je door naar de universiteit.',
  'Mbo niveau 1': 'De entreeopleiding leert je de basis voor eenvoudig werk. Daarna kun je gaan werken of door naar mbo niveau 2.',
  'Mbo niveau 2': 'Je leert voor een praktisch beroep op basisniveau. Daarna kun je werken of verder leren op mbo niveau 3 of 4.',
  'Mbo niveau 3': 'Je leert een vak zelfstandig uitvoeren. Daarna kun je werken en bij sommige routes doorleren op mbo niveau 4.',
  'Mbo niveau 4': 'Je wordt opgeleid tot vakman, specialist of middenkaderfunctionaris. Met dit diploma kun je werken of door naar het hbo.',
  'Hbo-bachelor': 'Een praktijkgerichte opleiding in het hoger onderwijs. Je werkt veel met projecten, opdrachten uit de praktijk en stages.',
  'Wo-bachelor': 'Een wetenschappelijke opleiding aan een universiteit. Je leert theorie onderzoeken, analyseren en nieuwe kennis ontwikkelen.',
  'Schakeltraject + wo-master': 'Een schakel- of premastertraject vult kennis aan na het hbo. Als je wordt toegelaten, kun je daarna een universitaire master volgen.',
};

const ADJACENT_LEVELS = {
  praktijk: ['vmbo-b'],
  'vmbo-b': ['praktijk', 'vmbo-k'],
  'vmbo-k': ['vmbo-b', 'vmbo-t'],
  'vmbo-t': ['vmbo-k', 'havo'],
  havo: ['vmbo-t', 'atheneum', 'gymnasium'],
  atheneum: ['havo', 'gymnasium'],
  gymnasium: ['havo', 'atheneum'],
};

function emptyAnswers() {
  return Object.fromEntries(QUESTIONS.map((question) => [question.id, question.multi ? [] : null]));
}

function inferredLevel(answers) {
  if (answers.advice && answers.advice !== 'onbekend') return answers.advice;
  return { werk: 'praktijk', mbo: 'vmbo-t', hbo: 'havo', wo: 'atheneum' }[answers.ambition] || 'vmbo-t';
}

function routeKey(answers) {
  if (answers.career && answers.career !== 'onbekend') return answers.career;
  const fallback = answers.interests?.[0];
  return fallback || 'ondernemen';
}

function snakePlacement(index, total) {
  const row = Math.floor(index / 3);
  const rowStart = row * 3;
  const rowCount = Math.min(3, total - rowStart);
  const position = index - rowStart;
  const leftToRight = row % 2 === 0;
  const visualPosition = leftToRight ? position : rowCount - position - 1;
  const centeredStart = 3 - rowCount + 1;

  return {
    row: row + 1,
    columnStart: centeredStart + visualPosition * 2,
    leftToRight,
  };
}

function addRouteLayout(cards) {
  if (cards.length <= 4) {
    return cards.map((card, index) => ({
      ...card,
      arrowDirection: index === cards.length - 1 ? 'none' : 'right',
    }));
  }

  return cards.map((card, index) => {
    const placement = snakePlacement(index, cards.length);
    const nextPlacement = index < cards.length - 1
      ? snakePlacement(index + 1, cards.length)
      : null;
    let arrowDirection = 'none';

    if (nextPlacement?.row === placement.row) {
      arrowDirection = placement.leftToRight ? 'right' : 'left';
    } else if (nextPlacement) {
      if (nextPlacement.columnStart < placement.columnStart) arrowDirection = 'down-left';
      else if (nextPlacement.columnStart > placement.columnStart) arrowDirection = 'down-right';
      else arrowDirection = 'down';
    }

    return {
      ...card,
      gridColumn: `${placement.columnStart} / span 2`,
      gridRow: placement.row,
      arrowDirection,
    };
  });
}

function buildRouteCards(answers) {
  const level = inferredLevel(answers);
  const ambition = answers.ambition || 'mbo';
  const cards = [];
  let cardNumber = 0;

  const addCard = (eyebrow, value, duration, color, type = 'education') => {
    cardNumber += 1;
    cards.push({
      id: `route-${cardNumber}`,
      eyebrow,
      value,
      duration,
      color,
      type,
      info: type === 'future'
        ? ''
        : ROUTE_CARD_INFO[value] || 'Deze onderwijsstap helpt je verder richting de vervolgopleiding die bij jouw route past.',
    });
  };

  const addSecondary = (value, duration) => addCard('Middelbare school', value, duration, '#e51075');
  const addMbo = (levelNumber, duration) => addCard('Mbo', `Mbo niveau ${levelNumber}`, duration, '#f7941d');
  const addHbo = () => addCard('Hbo', 'Hbo-bachelor', '4 jaar', '#009fe3');
  const addWoBachelor = () => addCard('Wo', 'Wo-bachelor', '3 jaar', '#7d50c8');
  const addWoAfterHbo = () => addCard('Wo', 'Schakeltraject + wo-master', 'ongeveer 1–3 jaar', '#7d50c8');

  addSecondary(LEVEL_LABELS[level] || 'Ontdekken', SECONDARY_DURATIONS[level] || 'duur verschilt');

  if (ambition === 'werk' || ambition === 'mbo') {
    if (level === 'praktijk') addMbo(1, '1 jaar');
    else if (level === 'vmbo-b') addMbo(2, '1–2 jaar');
    else if (level === 'vmbo-k') addMbo(3, '2–3 jaar');
    else addMbo(4, '3–4 jaar');
  }

  if (ambition === 'hbo') {
    if (level === 'praktijk') {
      addMbo(1, '1 jaar');
      addMbo(2, '1–2 jaar');
      addMbo(4, '3–4 jaar');
    } else if (level === 'vmbo-b') {
      addMbo(2, '1–2 jaar');
      addMbo(4, '3–4 jaar');
    } else if (level === 'vmbo-k' || level === 'vmbo-t') {
      addMbo(4, '3–4 jaar');
    }
    addHbo();
  }

  if (ambition === 'wo') {
    if (level === 'atheneum' || level === 'gymnasium') {
      addWoBachelor();
    } else if (level === 'havo') {
      addSecondary('Vwo 5 en 6', '2 jaar');
      addWoBachelor();
    } else if (level === 'vmbo-t') {
      addSecondary('Havo 4 en 5', '2 jaar');
      addSecondary('Vwo 5 en 6', '2 jaar');
      addWoBachelor();
    } else {
      if (level === 'praktijk') addMbo(1, '1 jaar');
      if (level === 'praktijk' || level === 'vmbo-b') addMbo(2, '1–2 jaar');
      addMbo(4, '3–4 jaar');
      addHbo();
      addWoAfterHbo();
    }
  }

  addCard(
    'Jouw interesse/baan',
    CAREER_LABELS[routeKey(answers)] || 'Nog ontdekken',
    '',
    '#35a854',
    'future',
  );

  return addRouteLayout(cards);
}

function schoolMatch(school, answers) {
  const level = inferredLevel(answers);
  const exactLevel = school.levels.includes(level);
  const adjacentLevel = school.levels.some((item) => ADJACENT_LEVELS[level]?.includes(item));
  let score = 12;
  const reasons = [];

  if (exactLevel) {
    score += answers.advice === 'onbekend' ? 30 : 36;
    reasons.push('past bij je niveau');
  } else if (adjacentLevel) {
    score += 16;
    reasons.push('aansluitend niveau');
  }

  if (!answers.location || answers.location === 'elders') {
    score += 7;
  } else if (school.location === answers.location) {
    score += 14;
    reasons.push(`in ${answers.location[0].toUpperCase()}${answers.location.slice(1)}`);
  } else {
    score += 2;
  }

  const selectedInterests = answers.interests || [];
  const interestMatches = selectedInterests.filter((interest) => school.interests.includes(interest));
  score += Math.min(18, interestMatches.length * 6);
  if (interestMatches.length) reasons.push('sluit aan op je interesses');

  if (answers.career === 'onbekend' || !answers.career) {
    score += 5;
  } else if (school.careers.includes(answers.career)) {
    score += 16;
    reasons.push('past bij je toekomstidee');
  }

  const academic = school.levels.some((item) => ['havo', 'atheneum', 'gymnasium'].includes(item));
  const vocational = school.levels.some((item) => ['praktijk', 'vmbo-b', 'vmbo-k', 'vmbo-t'].includes(item));
  if ((['hbo', 'wo'].includes(answers.ambition) && academic) || (['werk', 'mbo'].includes(answers.ambition) && vocational)) {
    score += 8;
  }

  if (school.learning.includes(answers.learning)) {
    score += 7;
    reasons.push('jouw manier van leren');
  }

  if (answers.values === 'dichtbij') {
    if (school.location === answers.location) score += 8;
  } else if (school.values.includes(answers.values)) {
    score += 8;
    reasons.push('biedt wat jij belangrijk vindt');
  }

  if (school.id === 'techniekcollege') {
    const technical = answers.career === 'techniek' || selectedInterests.includes('techniek');
    score += technical ? 8 : -10;
  }

  let percentage = Math.round(22 + (Math.max(0, score) / 111) * 76);
  if (!exactLevel && !adjacentLevel && answers.advice && answers.advice !== 'onbekend') percentage = Math.min(percentage, 49);
  if (adjacentLevel && !exactLevel) percentage = Math.min(percentage, 79);
  percentage = Math.max(24, Math.min(98, percentage));

  return {
    ...school,
    percentage,
    reasons: reasons.slice(0, 3),
    levelFitRank: exactLevel ? 2 : adjacentLevel ? 1 : 0,
  };
}

export default function routeplanner() {
  return {
    view: 'intro',
    currentStep: 0,
    answers: emptyAnswers(),
    showAllSchools: false,
    selectionMessage: '',

    init() {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (!saved || saved.version !== 1) return;
        this.answers = { ...emptyAnswers(), ...saved.answers };
        this.currentStep = Math.min(Math.max(Number(saved.currentStep) || 0, 0), QUESTIONS.length - 1);
        this.view = ['intro', 'quiz', 'results'].includes(saved.view) ? saved.view : 'intro';
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    },

    get question() {
      return QUESTIONS[this.currentStep];
    },

    get progress() {
      return ((this.currentStep + 1) / QUESTIONS.length) * 100;
    },

    get canContinue() {
      const value = this.answers[this.question.id];
      return this.question.multi ? value.length > 0 : Boolean(value);
    },

    get matchedSchools() {
      return SCHOOLS
        .map((school) => schoolMatch(school, this.answers))
        .sort((a, b) => b.levelFitRank - a.levelFitRank || b.percentage - a.percentage);
    },

    get visibleSchools() {
      return this.showAllSchools ? this.matchedSchools : this.matchedSchools.slice(0, 3);
    },

    get routeKey() {
      return routeKey(this.answers);
    },

    get routeCards() {
      return buildRouteCards(this.answers);
    },

    get routeSummary() {
      const first = this.routeCards[0]?.value || 'de middelbare school';
      const last = this.routeCards.at(-1)?.value.toLowerCase() || 'jouw interesses';
      return `Met jouw antwoorden lijkt een route vanuit ${first} richting ${last} goed bij je te passen.`;
    },

    get recommendedPrograms() {
      if (this.answers.ambition === 'wo') {
        const programIds = WO_PROGRAMS[this.routeKey] || WO_PROGRAMS.ondernemen;
        return programIds.map((programId, index) => ({
          ...WO_PROGRAM_CATALOG[programId],
          color: PROGRAM_COLORS[index],
        }));
      }
      return PROGRAMS[this.routeKey] || PROGRAMS.ondernemen;
    },

    showIntro() {
      this.view = 'intro';
      this.selectionMessage = '';
      this.persist();
      this.moveToTop();
    },

    start(reset = false) {
      if (reset) {
        this.answers = emptyAnswers();
        this.currentStep = 0;
        this.showAllSchools = false;
      }
      this.view = 'quiz';
      this.persist();
      this.moveToTop('vragen');
    },

    isSelected(value) {
      const answer = this.answers[this.question.id];
      return this.question.multi ? answer.includes(value) : answer === value;
    },

    select(value) {
      this.selectionMessage = '';
      if (this.question.multi) {
        const selected = [...this.answers[this.question.id]];
        const index = selected.indexOf(value);
        if (index >= 0) selected.splice(index, 1);
        else if (selected.length < this.question.max) selected.push(value);
        else this.selectionMessage = `Je kunt maximaal ${this.question.max} interesses kiezen.`;
        this.answers[this.question.id] = selected;
      } else {
        this.answers[this.question.id] = value;
      }
      this.persist();
    },

    next() {
      if (!this.canContinue) return;
      if (this.currentStep === QUESTIONS.length - 1) {
        this.view = 'results';
        this.showAllSchools = false;
        this.persist();
        this.moveToTop('resultaat');
        return;
      }
      this.currentStep += 1;
      this.selectionMessage = '';
      this.persist();
      this.moveToTop('vragen');
    },

    skip() {
      if (this.currentStep !== 0) return;
      this.answers.location = null;
      this.currentStep = 1;
      this.persist();
      this.moveToTop('vragen');
    },

    back() {
      if (this.currentStep === 0) {
        this.view = 'intro';
        this.persist();
        this.moveToTop();
        return;
      }
      this.currentStep -= 1;
      this.selectionMessage = '';
      this.persist();
      this.moveToTop('vragen');
    },

    editAnswers() {
      this.view = 'quiz';
      this.currentStep = QUESTIONS.length - 1;
      this.persist();
      this.moveToTop('vragen');
    },

    persist() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version: 1,
        view: this.view,
        currentStep: this.currentStep,
        answers: this.answers,
      }));
    },

    moveToTop(anchor = '') {
      history.replaceState(null, '', anchor ? `#${anchor}` : location.pathname);
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    },
  };
}

export {
  QUESTIONS,
  SCHOOLS,
  LEVEL_LABELS,
  CAREER_LABELS,
};
