<template>
  <q-toolbar>
    <slot name="toolbarItemsLeft"> </slot>
    <q-toolbar-title> {{ toolbarTitle }} </q-toolbar-title>
    <q-space />

    <div class="q-gutter-sm row items-center no-wrap">
      <slot name="toolbarItemsRight"> </slot>
    </div>
  </q-toolbar>
</template>

<script setup lang="ts">
defineProps<{
  toolbarTitle?: string;
}>();
</script>
