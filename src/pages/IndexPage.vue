<template>
  <q-page class="row items-center justify-evenly">
    <div>123</div>
    <buttonVue></buttonVue>
    <AbsentRequestForm :formData="formData"
  /></q-page>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import buttonVue from 'src/fpcUILibrary/components/example/button.vue';
import AbsentRequestForm from 'src/fpcUILibrary/components/absentRequestFrom/AbsentRequestForm.vue';

const formData = ref({
  AbsentReasonCode: '',
  StartDateTime: '',
  EndDateTime: '',
  Note: '',
});
</script>
