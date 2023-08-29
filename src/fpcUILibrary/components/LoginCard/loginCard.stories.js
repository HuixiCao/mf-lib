import LoginCard from './LoginCard.vue';

export default {
  title: 'Components/LoginCard',
  tags: ['autodocs'],
  component: LoginCard,
  // parameters: {
  //   docs: {
  //     description: {
  //       component: 'This is a default login card',
  //     },
  //   },
  // },
};

export const Example1 = () => ({
  components: { LoginCard },
  setup() {
    const loginHandler = (value) => {
      alert(JSON.stringify(value));
    };
    return {
      loginHandler,
    };
  },
  template: '<LoginCard @onLogin="loginHandler"></LoginCard>',
});

export const Example2 = () => ({
  components: { LoginCard },
  setup() {
    const loginHandler = (value) => {
      alert(JSON.stringify(value));
    };
    const logoUrl = require('../../../assets/logo.png');

    return {
      loginHandler,
      logoUrl,
    };
  },
  template:
    '<LoginCard @onLogin="loginHandler"  :logoUrl="logoUrl" :databaseId="{isRequired:false}"/>',
});
