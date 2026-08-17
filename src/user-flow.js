import '@fontsource/nunito/latin-400.css';
import '@fontsource/nunito/latin-600.css';
import '@fontsource/nunito/latin-700.css';
import '@fontsource/nunito/latin-800.css';
import '@fontsource/nunito/latin-900.css';
import '@fontsource/nunito/latin-700-italic.css';
import '@fontsource/nunito/latin-900-italic.css';
import Alpine from 'alpinejs';
import routeplanner, {
  QUESTIONS,
  SCHOOLS,
  LEVEL_LABELS,
  CAREER_LABELS,
} from './routeplanner.js';
import './styles.css';
import './user-flow.css';

const INTEREST_LABELS = {
  techniek: 'Techniek & maken',
  creatief: 'Kunst & creatief',
  sport: 'Sport & bewegen',
  zorg: 'Zorg & mensen',
  natuur: 'Natuur & dieren',
  talen: 'Talen & wereld',
};

const LEARNING_LABELS = {
  doen: 'Vooral doen & maken',
  denken: 'Vooral denken & ontdekken',
  mix: 'Mix van doen en denken',
  buiten: 'Leren buiten de klas',
};

const VALUE_LABELS = {
  klein: 'Kleinschalig',
  uitdaging: 'Veel keuze & uitdaging',
  dichtbij: 'Dichtbij huis',
  projecten: 'Creatieve vakken & projecten',
  sport: 'Sport & activiteiten',
  modern: 'Modern gebouw',
};

const ACADEMIC_LEVELS = ['havo', 'atheneum', 'gymnasium'];
const VOCATIONAL_LEVELS = ['praktijk', 'vmbo-b', 'vmbo-k', 'vmbo-t'];

function schoolNames(filter) {
  return SCHOOLS.filter(filter).map((school) => school.name);
}

function optionEffect(questionId, value) {
  if (questionId === 'location') {
    if (value === 'elders' || value === 'overslaan') {
      return {
        points: '+7 voor iedere school',
        description: 'Er wordt geen plaatsvoordeel toegepast. Alle scholen krijgen dezelfde woonplaatsbasis.',
        schools: [],
      };
    }
    return {
      points: '+14 lokaal / +2 elders',
      description: 'Scholen in de gekozen plaats krijgen een duidelijk voordeel ten opzichte van scholen in een andere plaats.',
      schools: schoolNames((school) => school.location === value),
    };
  }

  if (questionId === 'advice') {
    if (value === 'onbekend') {
      return {
        points: '+30 op afgeleid niveau',
        description: 'Het niveau wordt later afgeleid uit de doorleerwens: werk → praktijk, mbo → vmbo GL/TL, hbo → havo en wo → atheneum.',
        schools: [],
      };
    }
    return {
      points: '+36 exact / +16 aansluitend',
      description: 'Dit antwoord bepaalt eerst welke scholen bovenaan mogen staan en is daarmee de zwaarste keuze in de schoolmatch.',
      schools: schoolNames((school) => school.levels.includes(value)),
    };
  }

  if (questionId === 'interests') {
    return {
      points: '+6 per match, max. +18',
      description: 'Er mogen maximaal drie interesses worden gekozen. Bij “nog geen idee” voor beroep bepaalt de eerste interesse ook de opleidingsrichting.',
      schools: schoolNames((school) => school.interests.includes(value)),
    };
  }

  if (questionId === 'career') {
    if (value === 'onbekend') {
      return {
        points: '+5 voor iedere school',
        description: 'Er komt geen beroepsvoordeel voor één school. Voor de vervolgopleidingen wordt de eerste gekozen interesse gebruikt.',
        schools: [],
      };
    }
    return {
      points: '+16 bij een match',
      description: 'Scholen waarvan het profiel bij dit toekomstbeeld past krijgen extra punten. Dezelfde richting bepaalt de vervolgopleidingen.',
      schools: schoolNames((school) => school.careers.includes(value)),
    };
  }

  if (questionId === 'ambition') {
    const wantsAcademic = ['hbo', 'wo'].includes(value);
    return {
      points: '+8 passend schooltype',
      description: wantsAcademic
        ? 'Scholen met havo, atheneum of gymnasium krijgen extra punten. Deze keuze bepaalt ook hoeveel onderwijsstappen in de route verschijnen.'
        : 'Scholen met praktijkonderwijs of vmbo krijgen extra punten. Deze keuze bepaalt ook het mbo-niveau in de route.',
      schools: schoolNames((school) => school.levels.some((level) => (wantsAcademic ? ACADEMIC_LEVELS : VOCATIONAL_LEVELS).includes(level))),
    };
  }

  if (questionId === 'learning') {
    return {
      points: '+7 bij een match',
      description: 'Scholen die deze manier van leren in hun profiel hebben, krijgen extra punten.',
      schools: schoolNames((school) => school.learning.includes(value)),
    };
  }

  if (questionId === 'values') {
    if (value === 'dichtbij') {
      return {
        points: '+8 in dezelfde plaats',
        description: 'De eerder gekozen woonplaats wordt opnieuw gebruikt. Alleen scholen in die plaats krijgen deze bonus.',
        schools: [],
      };
    }
    return {
      points: '+8 bij een match',
      description: 'Scholen waarvan het profiel deze voorkeur bevat, krijgen extra punten.',
      schools: schoolNames((school) => school.values.includes(value)),
    };
  }

  return { points: 'Geen directe score', description: '', schools: [] };
}

function buildQuestionRows() {
  return QUESTIONS.map((question, index) => {
    const options = question.id === 'location'
      ? [...question.options, { value: 'overslaan', label: 'Vraag overslaan', tone: 'gray' }]
      : question.options;

    return {
      ...question,
      number: index + 1,
      options: options.map((option) => ({
        ...option,
        effect: optionEffect(question.id, option.value),
      })),
    };
  });
}

function routeFor(advice, ambition) {
  const app = routeplanner();
  Object.assign(app.answers, {
    advice,
    ambition,
    career: 'ondernemen',
    interests: ['techniek'],
  });
  return app.routeCards.map((card) => ({
    label: card.type === 'future' ? 'Interesse/baan' : card.value,
    duration: card.duration,
    type: card.type,
  }));
}

function buildRouteRows() {
  const adviceOptions = QUESTIONS.find((question) => question.id === 'advice').options;
  const ambitionOptions = QUESTIONS.find((question) => question.id === 'ambition').options;

  return adviceOptions.map((advice) => ({
    advice: advice.label,
    routes: ambitionOptions.map((ambition) => ({
      ambition: ambition.label,
      path: routeFor(advice.value, ambition.value),
    })),
  }));
}

function programsFor(direction, ambition) {
  const app = routeplanner();
  Object.assign(app.answers, {
    ambition,
    career: direction === 'talen' ? 'onbekend' : direction,
    interests: [direction],
  });
  return app.recommendedPrograms;
}

function buildProgramRows() {
  return Object.entries(CAREER_LABELS).map(([key, label]) => ({
    key,
    label,
    vocational: programsFor(key, 'hbo'),
    university: programsFor(key, 'wo'),
  }));
}

function buildSchoolProfiles() {
  return SCHOOLS.map((school) => ({
    ...school,
    levelsText: school.levels.map((level) => LEVEL_LABELS[level] || level).join(', '),
    interestsText: school.interests.map((item) => INTEREST_LABELS[item] || item).join(', '),
    careersText: school.careers.map((item) => CAREER_LABELS[item] || item).join(', '),
    learningText: school.learning.map((item) => LEARNING_LABELS[item] || item).join(', '),
    valuesText: school.values.map((item) => VALUE_LABELS[item] || item).join(', '),
  }));
}

const SCORE_STEPS = [
  ['Startscore', '+12', 'Iedere school begint met dezelfde basis.'],
  ['Onderwijsniveau', '+36 / +30 / +16', 'Exact, afgeleid of aansluitend niveau.'],
  ['Woonplaats', '+14 / +7 / +2', 'Zelfde plaats, neutraal of andere plaats.'],
  ['Interesses', 'max. +18', 'Zes punten per passende interesse.'],
  ['Toekomstberoep', '+16 of +5', 'Passend beroep of nog geen idee.'],
  ['Doorleerwens', '+8', 'Praktisch of theoretisch schooltype past.'],
  ['Manier van leren', '+7', 'De leerstijl staat in het schoolprofiel.'],
  ['Belangrijk op school', '+8', 'De school biedt de gekozen voorkeur.'],
  ['Techniekcollege', '+8 of −10', 'Extra correctie voor wel of geen technische interesse.'],
];

window.Alpine = Alpine;
Alpine.data('userFlow', () => ({
  questions: buildQuestionRows(),
  routeRows: buildRouteRows(),
  programRows: buildProgramRows(),
  schools: buildSchoolProfiles(),
  scoreSteps: SCORE_STEPS,
  totalChoices: buildQuestionRows().reduce((total, question) => total + question.options.length, 0),

  toggleAll(open) {
    this.$root.querySelectorAll('details').forEach((details) => {
      details.open = open;
    });
  },
}));
Alpine.start();
