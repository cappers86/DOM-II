// Your code goes here
const Display = document.querySelector(".main-navigation");
console.log(Display);

Display.style.backgroundColor = "blue";
Display.addEventListener("mouseover", (e) => {
    console.log('Mouse has been moved to', `[${event.screenX}, ${event.screenY}]`);
});
const divIntro = document.querySelector(`.text-content `);

divIntro.addEventListener(`keydown`, (e) => {
    console.log(`Detected keypress: ${event.key}`);
});

window.addEventListener("wheel", (e) => {
    const delta = Math.sign(event.deltaY);
    console.info(delta);
});
const img = document.querySelector(".img-content");
img.addEventListener(`drag`, (e) => {
    console.log(event);
}, false);

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  console.log(scroll_pos);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);

  const adventure = document.querySelector(`aside`);

  adventure.addEventListener(`dblclick`, function (e){
    adventure.classList.toggle(`large`);
  });

  const navOne = document.querySelector('a');

navOne.addEventListener('click', (event) => {
    event.preventDefault();
});
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});