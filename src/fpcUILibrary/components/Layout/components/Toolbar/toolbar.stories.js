import DefaultToolBar from './DefaultToolBar.vue';

export default {
  title: 'Components/DefaultToolBar',
  tags: ['autodocs'],
  component: DefaultToolBar,
  parameters: {
    docs: {
      description: {
        component:
          'This is a default toolbar, use slot to customize the toolbar.',
      },
    },
  },
};

export const Example = {
  render: () => ({
    components: { DefaultToolBar },
    // setup() {},
    template: `
      <q-layout>
        <q-header>
          <DefaultToolBar toolbarTitle='FpcToolbar'>
            <template #toolbarItemsLeft>
              <q-btn
                flat
                dense
                round
                icon="menu"
                aria-label="Menu"
              />
            </template>

            <template #toolbarItemsRight>
              <q-btn flat dense round icon="search" aria-label="Search" />
              <q-btn flat dense round icon="settings" aria-label="Settings" />
            </template>
          </DefaultToolBar>
        </q-header>
      </q-layout>
      `,
  }),
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
