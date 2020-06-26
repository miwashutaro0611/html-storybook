import './_index.scss'

const params = {
  title: 'Button',
}

export const ButtonTem = () => {
  const btn = document.createElement('button')
  btn.classList.add('c-button')
  btn.type = 'button'
  btn.innerText = 'Hello Button'
  btn.addEventListener('click', (e) => console.log(e))
  return btn
}

export default params
