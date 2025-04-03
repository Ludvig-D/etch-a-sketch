const container = document.querySelector('.container');

const size = 16;

let width = 100 / 16;

for (let i = 0; i < size * size; i++) {
  const div = document.createElement('div');
  div.style.width = `${width}%`;
  div.classList.add('divs');
  container.appendChild(div);
}
