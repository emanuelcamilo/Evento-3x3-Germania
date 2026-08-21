const intro=document.querySelector('#intro');
const landing=document.querySelector('#landing');
const hero=document.querySelector('#inicio');
const button=document.querySelector('#enter-event');
let ticking=false;
function updateBackground(){const height=Math.max(document.documentElement.scrollHeight-window.innerHeight,1);const progress=Math.min(window.scrollY/height,1);const heroProgress=Math.min(window.scrollY/window.innerHeight,1);const root=document.documentElement.style;root.setProperty('--bg-x',`${20+progress*55}%`);root.setProperty('--bg-y',`${progress*35}%`);root.setProperty('--bg-drift',`${progress*-13}rem`);root.setProperty('--hero-drift',`${progress*3.25}rem`);root.setProperty('--line-top',`${16+progress*20}%`);root.setProperty('--hero-radius',`${Math.round(56*(1-heroProgress))}px`);ticking=false}
function onScroll(){if(!ticking){requestAnimationFrame(updateBackground);ticking=true}}
function enterEvent(){if(document.body.classList.contains('has-entered'))return;document.body.classList.add('has-entered');intro.setAttribute('aria-hidden','true');landing.removeAttribute('aria-hidden');landing.removeAttribute('inert');updateBackground();setTimeout(()=>hero.focus({preventScroll:true}),800)}
button.addEventListener('click',enterEvent);intro.addEventListener('click',event=>{if(!event.target.closest('button,a,input,select,textarea'))enterEvent()});document.addEventListener('keydown',event=>{if(event.key==='Enter'&&document.activeElement===document.body)enterEvent()});window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',updateBackground);
