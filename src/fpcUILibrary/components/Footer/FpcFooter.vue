<template>
  <div class="col q-pa-md" :style="{ backgroundColor: backgroundColor }">
    <div class="row q-pa-md">
      <!-- logo -->
      <div class="col col-12 col-md-5 q-pa-sm">
        <div :style="{ width: '60%' }">
          <img :style="{ width: '100%' }" src="../../../assets//fpc_logo.png" />
        </div>
      </div>

      <!-- about -->
      <div class="row col-12 col-md-7 link-font-color">
        <div class="row col-12 col-md q-pa-sm">
          <div class="col-12">
            <a
              :style="{ color: linkFontColor }"
              href="https://www.fleetprofitcenter.com/why-fleet-profit-center/"
              style="text-decoration: none"
              >Why Fleet Profit Center</a
            >
          </div>
          <div class="col-12">
            <a
              :style="{ color: linkFontColor }"
              href="https://www.fleetprofitcenter.com/partners/"
              style="text-decoration: none"
              >Partners</a
            >
          </div>
          <div class="col-12">
            <a
              :style="{ color: linkFontColor }"
              href="https://www.fleetprofitcenter.com/free-demo/"
              style="text-decoration: none"
              >Free Demo</a
            >
          </div>
          <div class="col-12">
            <a
              :style="{ color: linkFontColor }"
              href="https://www.fleetprofitcenter.com/support/"
              style="text-decoration: none"
              >Support</a
            >
          </div>
        </div>
        <div class="row col-12 col-md q-pa-sm">
          <div class="col-12">
            <a
              :style="{ color: linkFontColor }"
              href="https://www.fleetprofitcenter.com/about/"
              style="text-decoration: none"
              >About</a
            >
          </div>
          <div class="col-12">
            <a
              :style="{ color: linkFontColor }"
              href="https://www.fleetprofitcenter.com/industries/"
              style="text-decoration: none"
              >Industries</a
            >
          </div>
          <div class="col-12">
            <a
              :style="{ color: linkFontColor }"
              href="https://www.fleetprofitcenter.com/solutions/"
              style="text-decoration: none"
              >Solutions</a
            >
          </div>
          <div class="col-12">
            <a
              :style="{ color: linkFontColor }"
              href="https://www.fleetprofitcenter.com/learn/"
              style="text-decoration: none"
            >
              Learn</a
            >
          </div>
        </div>
      </div>
    </div>
    <q-separator inset spaced />
    <div>
      <span> © 2023 Fleet Profit Center | All rights reserved. </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FooterProps {
  backgroundColor: string;
  linkFontColor: string;
}
withDefaults(defineProps<FooterProps>(), {
  backgroundColor: '#F2F2F2',
  linkFontColor: '#1a237e',
});
</script>
