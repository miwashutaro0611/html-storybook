const { resolve } = require('path')

module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: ['@storybook/addon-knobs/register'],
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
