import copyCodeBlock from '@pickra/copy-code-block'
import Templete from './index.html'
import './_index.scss'

export default {
  title: 'Heading',
};

export const HeadingTem = () =>  {
  return Templete
}

export const HeadingCode = () =>  {
  return (Templete + copyCodeBlock(Templete))
}