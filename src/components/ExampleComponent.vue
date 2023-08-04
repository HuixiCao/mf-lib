<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
    <fpcButton />
    <fpcButton2 msg="123" />
    <fpcButton3 />
    <app />
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import { TestButton2Props } from '@mf-typescript/template/Components';
import {
  defineAsyncComponent,
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref,
} from 'vue';
import { Todo, Meta } from './models';
const fpcButton = defineAsyncComponent(() => import('template/Button'));
const fpcButton2 = defineAsyncComponent(() => import('template/Button2'));

const fpcButton3 = defineAsyncComponent(() =>
  import('template/Components').then((m) => m.TestButton2)
);
import('template/Components').then((m) => console.log(m.TestButton));
import('template/Components').then((m) => console.log(m));

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: 'ExampleComponent',
  components: {
    fpcButton,
    fpcButton2,
    fpcButton3,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')) };
  },
});
</script>
