<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <Toolbar />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toolbar from 'src/fpcUILibrary/components/Toolbar/ToolBar.vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    Toolbar,
  },
});
</script>
