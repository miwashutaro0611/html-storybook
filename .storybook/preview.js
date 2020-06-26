import { configure, addParameters, addDecorator } from '@storybook/html'
import { withA11y } from '@storybook/addon-a11y'
import { themes } from '@storybook/theming'
import { withHTML } from '@whitespace/storybook-addon-html/html';
import {dirname } from 'path'

import '../scss/style.scss'

const customViewports = {
  iPhone5: {
    name: 'iPhone5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPhone6: {
    name: 'iPhone6,7,8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPhoneX: {
    name: 'iPhoneX',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhoneXsMax: {
    name: 'iPhoneXsMax',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
}

addDecorator(withA11y)

addDecorator(
  withHTML({
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'ignore',
    },
  })
);

addParameters({
  viewport: { viewports: customViewports },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#333' },
    { name: 'facebook', value: '#3b5998' },
    { name: 'twitter', value: '#00aced' },
  ],
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' }
  }
})

const pugContext = require.context('../components/', true, /\.stories\.pug$/);
pugContext.keys().forEach(function(pathStr) {
  // const ext = path.extname(pathStr)
  const dirName = dirname(pathStr) !== '.' ? dirname(pathStr).replace('./','') : 'Others'
  // const filePath = path.dirname(pathStr) !== '.' ? `${dirName}/${path.basename(pathStr)}` : path.basename(pathStr)
  // const fileName = path.basename(pathStr.replace('.stories',''),`${ext}`)
  // const pugSrc = require(`../components/${filePath}`);
  storiesOf( dirName , module)
    .add({
      pugCode: [pathStr.replace('./','')]
    })
});

configure([
  pugContext,
  require.context('../components/', true, /\.stories\.js$/)
], module);