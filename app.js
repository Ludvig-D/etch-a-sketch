const container = document.querySelector('.container');
const changeSize = document.querySelector('.changeSize');

let size = 16;

const color = () => {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  let color = `rgba(${red}, ${green}, ${blue}, 1)`;
  return color;
};

const flexGrid = (width) => {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.style.width = `${100 / width}%`;
    div.style.opacity = 1;
    div.addEventListener('mouseenter', () => {
      div.style.opacity = div.style.opacity - 0.1;
      div.style.backgroundColor = color();
    });
    div.classList.add('divs');
    container.appendChild(div);
  }
};

flexGrid(16);

changeSize.addEventListener('click', () => {
  size = prompt('Choose between 16 - 100');
  if (size >= 16 && size <= 100) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    flexGrid(size);
  } else {
    alert('It has to be a number between 16 and 100!!!');
  }
});
