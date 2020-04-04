import { text } from "@storybook/addon-knobs"

export const Template = () => {
  const cardTitle = text('Title', 'タイトル')
  const cardText = text('Text', 'テキストテキスト')
  return `
    <div class='c-card'>
      <p class='c-card__title'>${cardTitle}</p>
      <p class='c-card__text'>
        ${cardText}
      </p>
    </div>
    <div class='c-card c-card--large'>
      <p class='c-card__title'>${cardTitle}</p>
      <p class='c-card__text'>
        ${cardText}
      </p>
    </div>
  `
}

export const TemplateInclude = () => {
  const cardTitle = text('Title', 'タイトル')
  const cardText = text('Text', 'テキストテキスト')
  return `
    {include 'text.php' valueTitle='${cardTitle}' valuetext='${cardText}'}
  `
}