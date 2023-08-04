// import '@quasar/extras/roboto-font/roboto-font.css';
// // These are optional
// import '@quasar/extras/material-icons/material-icons.css';
// import '@quasar/extras/animate/fadeInUp.css';
// import '@quasar/extras/animate/fadeOutDown.css';
// import '@quasar/extras/animate/fadeInRight.css';
// import '@quasar/extras/animate/fadeOutRight.css';

// // Loads the quasar styles and registers quasar functionality with storybook
import 'quasar/dist/quasar.css';

// This is also where you would setup things such as pinia for storybook
import { Quasar } from 'quasar';
import { setup } from '@storybook/vue3';
setup((app) => {
  app.use(Quasar, {});
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
