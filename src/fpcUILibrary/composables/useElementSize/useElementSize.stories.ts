import { ref, computed, Ref } from 'vue';
import { useElementSize } from './useElementSize';

export default {
  title: 'Hooks/useElementSize',
  tags: ['autodocs'],
  argTypes: {
    element: {
      description: 'A `Ref` to an `HTMLElement` or `null`.',
      type: { name: 'Ref<HTMLElement | null>' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is a hook that returns the size of an element. Use it to track the size of an element even when it changes at runtime. Could use this one instead of the $nextTick',
      },
    },
  },
};

export const Example1 = {
  render: () => ({
    setup() {
      const element = ref(null);
      const { width, height } = useElementSize(element);
      const text = computed(() => {
        return `width: ${width.value}, height: ${height.value}`;
      });

      return { element, text };
    },
    template: `
      <div> Resize the box to see size changes </div>
      <textarea ref="element"  v-text="text" />
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

export const Example2 = {
  render: () => ({
    setup() {
      const element: Ref<HTMLElement | null> = ref(null);
      const { width, height } = useElementSize(element);
      const text = computed(() => {
        return `width: ${width.value}, height: ${height.value}`;
      });
      const changeSize = () => {
        if (element.value) {
          element.value.style.width = '200px';
          element.value.style.height = '200px';
        }
      };
      return { element, text, changeSize };
    },
    template: `
        <div @click="changeSize"> <button> Click me to resize the textArea </button></div>
        <div ref="element"  :style= "{ 'border': '1px solid red' }">{{text}}</div>
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
