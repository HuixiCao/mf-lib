<template>
  <q-layout v-bind="layoutOption">
    <q-header>
      <slot name="header"> </slot>
    </q-header>
    <slot name="drawer"> </slot>
    <q-page-container>
      <slot name="container"> <router-view /> </slot>
    </q-page-container>

    <q-footer>
      <slot name="footer"> </slot>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { QLayoutProps } from 'quasar';
defineProps<{
  layoutOption?: QLayoutProps;
}>();
</script>
