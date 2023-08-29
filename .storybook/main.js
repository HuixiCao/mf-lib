/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/fpcUILibrary/**/*.mdx',
    '../src/fpcUILibrary/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/vue3-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
