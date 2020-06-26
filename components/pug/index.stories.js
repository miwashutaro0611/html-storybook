import { renderer } from 'storypug'

import Templete from './index.pug'
import './_index.scss'

const { html } = renderer()

export default {
  title: 'Heading',
}

export const HeadingTem2 = () => {
  return html(Templete)
}

HeadingTem2.story = {
  parameters: { pugCode: 'pug/index.pug' },
}
