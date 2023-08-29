<template>
  <q-page>
    <div class="row items-center justify-evenly">
      <buttonVue></buttonVue>
      <AbsentRequestForm :formData="formData" />
    </div>

    <div class="q-mt-lg"></div>
    <LoginCard @onLogin="loginHandler" :logoUrl="logoUrl" />
    <FpcFooter />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import buttonVue from 'src/fpcUILibrary/components/example/button.vue';
import AbsentRequestForm from 'src/fpcUILibrary/components/absentRequestFrom/AbsentRequestForm.vue';
import FpcFooter from 'src/fpcUILibrary/components/Footer/FpcFooter.vue';
import LoginCard from 'src/fpcUILibrary/components/LoginCard/LoginCard.vue';
const formData = ref({
  AbsentReasonCode: '',
  StartDateTime: '',
  EndDateTime: '',
  Note: '',
});

const loginHandler = (value: any) => {
  console.log('loginHandler', value);
};

const logoUrl = require('../assets/logo.png');
</script>
