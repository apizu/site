<template>
  <div>
    <nuxt />
    <my-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyFooter from "@/components/Footer.vue";

export default Vue.extend({
  components: {
    MyFooter
  }
});
</script>

<style>
html {
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: #393939;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
