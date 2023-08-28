<template>
  <q-page>
    <div class="row items-center justify-evenly">
      <buttonVue></buttonVue>
      <AbsentRequestForm :formData="formData" />
    </div>

    <div class="q-mt-lg"></div>
    <FpcFooter />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import buttonVue from 'src/fpcUILibrary/components/example/button.vue';
import AbsentRequestForm from 'src/fpcUILibrary/components/absentRequestFrom/AbsentRequestForm.vue';
import FpcFooter from 'src/fpcUILibrary/components/Footer/FpcFooter.vue';
const formData = ref({
  AbsentReasonCode: '',
  StartDateTime: '',
  EndDateTime: '',
  Note: '',
});
</script>
