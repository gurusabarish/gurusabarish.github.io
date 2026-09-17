/**
 * main.js — Entry point
 * Imports and initialises all feature modules.
 */

import { initReveal }        from './modules/reveal.js';
import { initMobileNav }     from './modules/nav.js';
import { fillTimelineDurations, fillHeroStats, fillCareerTotal } from './modules/dates.js';
import { initContactForm }   from './modules/contact.js';
import { initSmoothScroll }  from './modules/smooth-scroll.js';
import { initTheme }         from './modules/theme.js';

initTheme();
initReveal();
initMobileNav();
fillTimelineDurations();
fillHeroStats();
fillCareerTotal();
initContactForm();
initSmoothScroll();
