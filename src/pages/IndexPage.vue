<template>
  <q-page class="row items-center justify-evenly">
    <div>123</div>
    <buttonVue></buttonVue
  ></q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import buttonVue from 'src/fpcUILibrary/components/example/button.vue';
export default defineComponent({
  name: 'IndexPage',
  components: {
    buttonVue,
  },
});
</script>
