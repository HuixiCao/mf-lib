<template>
  <q-card bordered class="q-ma-md q-pa-lg shadow-1 centered-card">
    <div class="row items-center justify-center">
      <img class="loginPage-Logo" :src="logoUrl" />
    </div>
    <q-card-section>
      <q-form ref="formRef" class="q-gutter-md" @click.prevent="submit">
        <q-input v-bind="userName.options" v-model="loginData.email" />
        <q-input
          v-bind="password.options"
          v-model="loginData.password"
          :type="shouldHidePassword ? 'password' : 'text'"
        >
          <template v-slot:prepend>
            <q-icon
              :name="shouldHidePassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="shouldHidePassword = !shouldHidePassword"
            />
          </template>
        </q-input>
        <q-input
          v-if="databaseId.isRequired"
          v-bind="databaseId.options"
          v-model="loginData.databaseId"
        />
        <q-card-actions>
          <q-btn
            type="submit"
            size="lg"
            label="Login"
            color="primary"
            class="full-width"
          />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { QInputProps, QForm } from 'quasar';

const shouldHidePassword = ref(true);
const formRef = ref<QForm | null>(null);

export interface LoginData {
  email: string;
  password: string;
  databaseId?: string;
}
const loginData = reactive<LoginData>({
  email: '',
  password: '',
  databaseId: '',
});

export interface LoginCardOptions {
  logoUrl: string;
  userName: {
    options: Partial<QInputProps>;
  };
  password: {
    options: Partial<QInputProps>;
  };
  databaseId: {
    isRequired: boolean;
    options: Partial<QInputProps>;
  };
}
const props = withDefaults(defineProps<LoginCardOptions>(), {
  logoUrl: () => {
    return require('../../../assets/fpc_logo.png');
  },
  userName: () => {
    return {
      options: {
        square: true,
        filled: true,
        clearable: true,
        label: 'Email',
        maxlength: '50',
        lazyRules: true,
        rules: [
          (val) => (val && val.length > 0) || 'Please input Email',
          (val) => (val && val.length < 255) || 'maximum 255 characters',
        ],
      },
    };
  },
  password: () => {
    return {
      options: {
        square: true,
        filled: true,
        clearable: true,
        autocomplete: 'on',
        label: 'Password',
        maxlength: '30',
        lazyRules: true,
        rules: [
          (val) => (val && val.length > 0) || 'Please input password',
          (val) => (val && val.length < 255) || 'maximum 255 characters',
        ],
      },
    };
  },
  databaseId: () => {
    return {
      isRequired: true,
      options: {
        square: true,
        filled: true,
        clearable: true,
        label: 'Database',
        maxlength: '30',
        rules: [
          (val) => (val && val.length > 0) || 'Please input databaseId',
          (val) => (val && val.length < 50) || 'maximum 50 characters',
        ],
      },
    };
  },
});

const emit = defineEmits<{
  (e: 'onLogin', value: LoginData): void;
}>();
const submit = async () => {
  const isValid = await formRef.value?.validate();
  if (!isValid) return;

  if (!props.databaseId.isRequired) {
    delete loginData.databaseId;
  }
  emit('onLogin', loginData);
};
</script>

<style lang="scss" scoped>
.loginPage-Logo {
  width: 100%;
  max-width: 700px;
}
</style>
