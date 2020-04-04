import copyCodeBlock from '@pickra/copy-code-block'
import { withKnobs, text } from "@storybook/addon-knobs"

export default {
  title: 'Card',
  decorators: [withKnobs]
}

const Templete = () => {
  const cardTitle = text('Title', 'タイトル')
  const cardText = text('Text', 'テキストテキスト')
  return `
    <div class='c-card'>
      <p class='c-card__title'>${cardTitle}</p>
      <p class='c-card__text'>
        ${cardText}
      </p>
    </div>
  `
}

export const CardTem = () =>  {
  return Templete()
}

export const CardCode = () =>  {
  return (Templete() + copyCodeBlock(Templete()))
}