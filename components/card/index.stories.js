import copyCodeBlock from '@pickra/copy-code-block'
import { withKnobs } from "@storybook/addon-knobs"
import {Template, TemplateInclude} from './index.js'

import README from './README.md'

export default {
  title: 'Card',
  decorators: [withKnobs],
  parameters: {
    notes: { README }
  }
}

export const CardTem = () =>  {
  return Template()
}

export const CardCode = () =>  {
  return (Template() + copyCodeBlock(Template()) + copyCodeBlock(TemplateInclude()))
}