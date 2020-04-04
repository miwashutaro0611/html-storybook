import './_index.scss'

export default {
  title: 'Demo',
};

export const Button = () => {
  const btn = document.createElement('button');
  btn.classList.add('c-button')
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};