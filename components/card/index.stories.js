import copyCodeBlock from '@pickra/copy-code-block'

export default {
  title: 'Card',
};

const Templete = `
  <div class='c-card'>
    <p class='c-card__title'>タイトル</p>
    <p class='c-card__text'>
      テキストテキストテキスト
    </p>
  </div>
`

export const CardTem = () =>  {
  return Templete
}

export const CardCode = () =>  {
  return (Templete + copyCodeBlock(Templete))
}