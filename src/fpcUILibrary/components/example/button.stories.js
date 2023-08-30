import FpcButton from './button.vue';
// import FpcButton from '../src/button.vue';

export default {
  title: 'FPC Button',
  // tags: ['autodocs'],
  component: FpcButton,
};

export const Test = {
  // components: { FpcButton },
  // template: '<FpcButton></FpcButton>',
  args: {
    variant: 'primary',
  },
};
