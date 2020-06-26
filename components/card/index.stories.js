import { withKnobs } from "@storybook/addon-knobs"
import {Template} from './index.js'

import README from './README.md'

const params = {
  title: 'Card',
  decorators: [withKnobs],
  parameters: {
    notes: { README }
  }
}

export const CardTem = () =>  {
  return Template()
}

export default params