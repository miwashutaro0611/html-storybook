const { resolve } = require('path')

module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    resolve(__dirname, './pugCode/register'),
    '@whitespace/storybook-addon-html/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds/register',
    'storybook-dark-mode/register',
    'storypug'
  ],
  webpackFinal: async(config, {configType}) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
      include: resolve(__dirname, '../'),
    })
    return config
  }
}
