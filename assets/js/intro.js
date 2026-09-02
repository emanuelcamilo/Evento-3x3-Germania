const intro = document.querySelector('#intro');
const landing = document.querySelector('#landing');
const hero = document.querySelector('#inicio');
const enterButton = document.querySelector('#enter-event');
const siteHeader = document.querySelector('.site-header');
const menuButton = document.querySelector('.header__toggle');
const primaryNavigation = document.querySelector('#primary-navigation');
const partnerCarousel = document.querySelector('.partners__carousel');
const partnerLogos = partnerCarousel ? [...partnerCarousel.querySelectorAll('.partner-logo')] : [];
let ticking = false;

function setMenuState(isOpen) {
  siteHeader.classList.toggle('is-menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
}

function updateScrollEffects() {
  const pageHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const pageProgress = Math.min(window.scrollY / pageHeight, 1);
  const isMobileViewport = window.matchMedia('(max-width: 42rem)').matches;
  const heroProgress = Math.min(window.scrollY / (window.innerHeight * (isMobileViewport ? .75 : .55)), 1);
  const root = document.documentElement.style;

  root.setProperty('--background-shift', `${28 + pageProgress * 38}%`);
  root.setProperty('--hero-scale', (1 - heroProgress * (isMobileViewport ? .16 : .1)).toFixed(3));
  root.setProperty('--hero-radius', `${Math.round(heroProgress * (isMobileViewport ? 56 : 40))}px`);

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
  if (document.body.classList.contains('has-entered')) return;

  document.body.classList.add('has-entered');
  intro.setAttribute('aria-hidden', 'true');
  landing.removeAttribute('aria-hidden');
  landing.removeAttribute('inert');
  updateScrollEffects();
  window.setTimeout(() => hero.focus({ preventScroll: true }), 800);
}

enterButton.addEventListener('click', enterEvent);
menuButton.addEventListener('click', () => setMenuState(!siteHeader.classList.contains('is-menu-open')));
primaryNavigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuState(false);
});
partnerLogos.forEach((partner) => {
  partner.addEventListener('click', () => {
    const partnerToFeature = partner.classList.contains('is-featured')
      ? partnerLogos.find((item) => item !== partner)
      : partner;

    partnerLogos.forEach((item) => {
      const isFeatured = item === partnerToFeature;
      item.classList.toggle('is-featured', isFeatured);
      item.setAttribute('aria-pressed', String(isFeatured));
    });
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
