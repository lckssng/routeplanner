import Alpine from 'alpinejs';
import './styles.css';
import './components/site-header.js';
import './components/site-footer.js';
import routeplanner from './routeplanner.js';

window.Alpine = Alpine;
Alpine.data('routeplanner', routeplanner);
Alpine.start();
