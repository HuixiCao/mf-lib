<template>
  <q-form ref="formRef" class="q-gutter-y-md">
    <!-- Reason selection -->
    <q-select
      dense
      filled
      v-model="formValue.AbsentReasonCode"
      :options="absentReasonOptions"
      option-value="Id"
      option-label="Description"
      map-options
      label="Absent Reason"
      clearable
      emit-value
    />
    <!-- Date range pick -->
    <q-input
      label="Start Date Time"
      filled
      readonly
      v-model="formValue.StartDateTime"
    >
      <!-- Note: v-if  does not allow change date when edit avoid update creates multiple date -->
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="formValue.StartDateTime" :mask="defaultMaskFormat">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="formValue.StartDateTime" :mask="defaultMaskFormat">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-input
      label="End Date Time"
      filled
      readonly
      v-model="formValue.EndDateTime"
    >
      <!-- Note: v-if  does not allow change date when edit avoid update creates multiple date -->
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="formValue.EndDateTime" :mask="defaultMaskFormat">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="formValue.EndDateTime" :mask="defaultMaskFormat">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <!-- Note -->
    <q-input
      dense
      v-model="formValue.Note"
      filled
      type="textarea"
      label="Notes"
      maxlength="200"
      clearable
    />
    <!-- submit -->
    <q-btn color="primary" class="full-width q-mt-md" @click="onSubmit()">
      submit</q-btn
    >
  </q-form>
</template>

<script setup lang="ts">
import { $moment } from 'src/libs';
import { Ref, computed, ref, watch } from 'vue';
import { QForm } from 'quasar';
interface AbsentRequestFormProps {
  formData: {
    AbsentReasonCode: string;
    StartDateTime: string;
    EndDateTime: string;
    Note: string;
  };
}
const props = defineProps<AbsentRequestFormProps>();
const emit = defineEmits<{
  (e: 'onSubmit', value: AbsentRequestFormProps['formData'] | null): void;
}>();

const defaultMaskFormat = 'YYYY-MM-DD HH:mm:ss';

const absentReasonOptions = ref([
  {
    Id: '1',
    Description: 'Sick',
  },
  {
    Id: '2',
    Description: 'Vacation',
  },
  {
    Id: '3',
    Description: 'Personal',
  },
  {
    Id: '4',
    Description: 'Bereavement',
  },
  {
    Id: '5',
    Description: 'Jury Duty',
  },
  {
    Id: '6',
    Description: 'Military',
  },
  {
    Id: '7',
    Description: 'Other',
  },
]);
const formRef = ref<QForm | null>(null);
const formValue: Ref<AbsentRequestFormProps['formData']> = ref({
  AbsentReasonCode: '',
  StartDateTime: $moment().format(defaultMaskFormat),
  EndDateTime: $moment().format(defaultMaskFormat),
  Note: '',
});
watch(
  () => props.formData,
  () => {
    formValue.value = {
      ...props.formData,
      StartDateTime: $moment(props.formData?.StartDateTime).format(
        defaultMaskFormat
      ),
      EndDateTime: $moment(props.formData?.EndDateTime).format(
        defaultMaskFormat
      ),
    };
  }
);

const onSubmit = async () => {
  if (!formRef.value) return;
  const isValid = await formRef.value.validate();
  if (!isValid) {
    return;
  }
  console.log('formValue.value', formValue.value);
  emit('onSubmit', formValue.value);
};
</script>

<style lang="scss"></style>
