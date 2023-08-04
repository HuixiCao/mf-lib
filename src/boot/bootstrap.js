import { defineAsyncComponent } from 'vue';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const fpcButton = defineAsyncComponent(() => import('template/Button'));
// import fpcButton from 'template/Button';

// console.log('fpcButton', fpcButton);
export default async ({ app }) => {
  console.log('bootstrapping');
  // app.component('fpc-button', fpcButton);
};
