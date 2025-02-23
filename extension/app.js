function get(selector) {
  return document.querySelector(selector);
}

function toggle() {
  get('#square-top').classList.toggle('animate');

  get('#start').classList.toggle('hide');
  get('#stop').classList.toggle('hide');

  get('#toggle').classList.toggle('grow');
}

get('#toggle').addEventListener('click', toggle);

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    toggle();
    e.preventDefault();
  }
});

get('#square-top').addEventListener('animationiteration', () => {
  get('#square-bottom').classList.toggle('stroke--primary');
  get('#square-bottom').classList.toggle('stroke--secondary');

  get('#square-top').classList.toggle('stroke--primary');
  get('#square-top').classList.toggle('stroke--secondary');
});

document.addEventListener('animationcancel', () => {
  get('#square-top').classList.add('stroke--primary');
  get('#square-top').classList.remove('stroke--secondary');

  get('#square-bottom').classList.add('stroke--secondary');
  get('#square-bottom').classList.remove('stroke--primary');
});