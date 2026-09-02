const intro = document.querySelector('#intro');
const landing = document.querySelector('#landing');
const hero = document.querySelector('#inicio');
const enterButton = document.querySelector('#enter-event');
const welcomeTransition = document.querySelector('#welcome-transition');
const siteHeader = document.querySelector('.site-header');
const menuButton = document.querySelector('.header__toggle');
const primaryNavigation = document.querySelector('#primary-navigation');
const partnerCarousel = document.querySelector('.partners__carousel');
const partnerLogos = partnerCarousel ? [...partnerCarousel.querySelectorAll('.partner-logo')] : [];
const partnerNotes = [...document.querySelectorAll('.partner-note')];
const INTRO_EXIT_DURATION = 500;
const WELCOME_SCREEN_DURATION = 1000;
const WELCOME_EXIT_DURATION = 900;
let ticking = false;

function resetToHero() {
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  document.documentElement.style.removeProperty('scroll-behavior');
}

function setMenuState(isOpen) {
  siteHeader.classList.toggle('is-menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
}

function updateScrollEffects() {
  const pageHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const pageProgress = Math.min(window.scrollY / pageHeight, 1);
  const isMobileViewport = window.matchMedia('(max-width: 42rem)').matches;
  const heroProgress = Math.min(window.scrollY / (window.innerHeight * (isMobileViewport ? .85 : .55)), 1);
  const root = document.documentElement.style;

  root.setProperty('--background-shift', `${28 + pageProgress * 38}%`);
  root.setProperty('--hero-scale', (1 - heroProgress * (isMobileViewport ? .2 : .1)).toFixed(3));
  root.setProperty('--hero-radius', `${Math.round(heroProgress * (isMobileViewport ? 72 : 40))}px`);

  const headerProgress = Math.min(Math.max((window.scrollY - window.innerHeight * .62) / (window.innerHeight * .28), 0), 1);
  const isHeaderVisible = headerProgress > .02 && document.body.classList.contains('has-entered');
  root.setProperty('--header-opacity', headerProgress.toFixed(2));
  root.setProperty('--header-offset', `${-130 + headerProgress * 130}%`);
  siteHeader.classList.toggle('is-visible', isHeaderVisible);
  siteHeader.toggleAttribute('inert', !isHeaderVisible);
  siteHeader.setAttribute('aria-hidden', String(!isHeaderVisible));
  if (!isHeaderVisible) setMenuState(false);
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
}

function enterEvent() {
  if (document.body.classList.contains('has-entered') || document.body.classList.contains('is-intro-exiting') || document.body.classList.contains('is-transitioning')) return;

  resetToHero();
  document.body.classList.add('is-intro-exiting');
  intro.setAttribute('aria-hidden', 'true');

  window.setTimeout(() => {
    document.body.classList.remove('is-intro-exiting');
    document.body.classList.add('is-transitioning');
    welcomeTransition.setAttribute('aria-hidden', 'false');
    welcomeTransition.removeAttribute('inert');

    window.setTimeout(() => {
      document.body.classList.remove('is-transitioning');
      document.body.classList.add('is-transition-exiting', 'has-entered');
      landing.removeAttribute('aria-hidden');
      landing.removeAttribute('inert');
      resetToHero();
      updateScrollEffects();

      window.setTimeout(() => {
        document.body.classList.remove('is-transition-exiting');
        welcomeTransition.setAttribute('aria-hidden', 'true');
        welcomeTransition.setAttribute('inert', '');
        hero.focus({ preventScroll: true });
      }, WELCOME_EXIT_DURATION);
    }, WELCOME_SCREEN_DURATION);
  }, INTRO_EXIT_DURATION);
}

enterButton.addEventListener('click', enterEvent);
menuButton.addEventListener('click', () => setMenuState(!siteHeader.classList.contains('is-menu-open')));
primaryNavigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuState(false);
});
function setFeaturedPartner(partnerToFeature) {
  const featuredIndex = partnerLogos.indexOf(partnerToFeature);

  partnerLogos.forEach((item, index) => {
    const position = (index - featuredIndex + partnerLogos.length) % partnerLogos.length;
    const isFeatured = position === 0;
    item.classList.toggle('is-featured', isFeatured);
    item.classList.toggle('is-next', position === 1);
    item.classList.toggle('is-back', position > 1);
    item.setAttribute('aria-pressed', String(isFeatured));
  });

  partnerNotes.forEach((note, index) => {
    const isActive = index === featuredIndex;
    note.classList.toggle('is-active', isActive);
    note.setAttribute('aria-hidden', String(!isActive));
  });
}

partnerLogos.forEach((partner) => {
  partner.addEventListener('click', () => {
    const nextPartner = partner.classList.contains('is-featured')
      ? partnerLogos[(partnerLogos.indexOf(partner) + 1) % partnerLogos.length]
      : partner;
    setFeaturedPartner(nextPartner);
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && siteHeader.classList.contains('is-menu-open')) {
    setMenuState(false);
    menuButton.focus();
  }
});
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', updateScrollEffects);
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
window.addEventListener('pageshow', resetToHero);
resetToHero();
