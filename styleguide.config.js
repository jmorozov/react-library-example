const { createConfig, babel, css, setOutput, match, file } = require('webpack-blocks');
const typescript = require('@webpack-blocks/typescript');

const pkg = require('./package.json');

module.exports = {
   title: `${pkg.name} v${pkg.version}`,
   showSidebar: true,
   usageMode: 'expand',
   skipComponentsWithoutExample: true,
   webpackConfig: createConfig([
      // setOutput('./build/bundle.js'),
      babel(),
      css(),
      match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [file()]),
      typescript()
   ]),
   propsParser: require('react-docgen-typescript').withDefaultConfig().parse
};
