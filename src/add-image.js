import Nintendo from './nintendo.jpg';

const addImage = () => {
  const img = document.createElement('img');
  img.alt = 'Nintendo';
  img.width = 300;
  img.src = Nintendo;
  const body = document.querySelector('body');
  body.appendChild(img);
};

console.log(Nintendo);

export { addImage as default };