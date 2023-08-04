<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import testButton from 'fpcTemplate/template';
export default defineComponent({
  name: 'MainLayout',
});
</script>
