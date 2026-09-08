import Alpine from 'alpinejs';
import './version-b.css';
import './components/site-header.js';
import './components/site-footer.js';
import routeplanner from './routeplanner.js';

window.Alpine = Alpine;

const VERSION_B_COLORS = {
  '#db127a': '#5B2DA3',
  '#e51075': '#5B2DA3',
  '#0094d7': '#00897B',
  '#009fe3': '#00897B',
  '#ed8c1f': '#D39B00',
  '#f7941d': '#D39B00',
};

const VERSION_B_MATCH_COLORS = [
  '#5B2DA3',
  '#5141A7',
  '#4055A4',
  '#2B699B',
  '#087E8B',
  '#268373',
  '#5F8655',
  '#9C8B2E',
  '#D39B00',
];

function versionBColor(color) {
  return VERSION_B_COLORS[color?.toLowerCase()] || color;
}

Alpine.data('routeplannerB', () => {
  const planner = routeplanner({ storageKey: 'groep8-routeplanner-b-v1' });
  const routeCardsGetter = Object.getOwnPropertyDescriptor(planner, 'routeCards').get;
  const programsGetter = Object.getOwnPropertyDescriptor(planner, 'recommendedPrograms').get;

  Object.defineProperties(planner, {
    routeCards: {
      configurable: true,
      get() {
        return routeCardsGetter.call(this).map((card) => ({
          ...card,
          color: versionBColor(card.color),
        }));
      },
    },
    recommendedPrograms: {
      configurable: true,
      get() {
        return programsGetter.call(this).map((program) => ({
          ...program,
          color: versionBColor(program.color),
        }));
      },
    },
  });

  planner.matchRankColor = (index) =>
    VERSION_B_MATCH_COLORS[index] || VERSION_B_MATCH_COLORS.at(-1);

  return planner;
});

Alpine.start();
