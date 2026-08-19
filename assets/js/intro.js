const intro = document.querySelector('#intro');
const nextState = document.querySelector('#next-state');
const enterButton = document.querySelector('#enter-event');

function enterEvent() {
  if (document.body.classList.contains('has-entered')) return;
  document.body.classList.add('has-entered');
  intro.setAttribute('aria-hidden', 'true');
  nextState.removeAttribute('aria-hidden');
  nextState.removeAttribute('inert');
  window.setTimeout(() => nextState.focus({ preventScroll: true }), 700);
}

enterButton.addEventListener('click', enterEvent);
intro.addEventListener('click', (event) => {
  if (!event.target.closest('button, a, input, select, textarea')) enterEvent();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && document.activeElement === document.body) enterEvent();
});
