import { text, color } from "@storybook/addon-knobs"

export const Template = () => {
  const cardTitle = text('Title', 'タイトル')
  const cardText = text('Text', 'テキストテキスト')

  const label = 'Color';
  const defaultValue = '#ff00ff';

  const cardColor = color(label, defaultValue)

  return `
    <div class='c-card'>
      <p class='c-card__title' style='color: ${cardColor}'>${cardTitle}</p>
      <p class='c-card__text'>
        ${cardText}
      </p>
    </div>
    <div class='c-card c-card--large'>
      <p class='c-card__title' style='color: ${cardColor}'>${cardTitle}</p>
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