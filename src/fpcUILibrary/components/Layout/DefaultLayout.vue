<template>
  <DefaultLayoutFrame>
    <template #header>
      <DefaultToolBar>
        <template #toolbarItemsLeft>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </template>
        <template #toolbarItemsRight>
          <q-btn flat dense round icon="search" aria-label="Search" />
          <q-btn flat dense round icon="settings" aria-label="Settings" />
        </template>
      </DefaultToolBar>
    </template>

    <template #drawer>
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class="bg-primary text-white"
      >
        <q-list>
          <q-item to="/" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/Footer" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Footer</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    </template>

    <template #footer> </template>
  </DefaultLayoutFrame>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DefaultToolBar from './components/Toolbar/DefaultToolBar.vue';
import DefaultLayoutFrame from './components/Layout/DefaultLayoutFrame.vue';
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
