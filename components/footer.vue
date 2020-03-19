<template>
  <div class="footer">
    <div class="copyright">
      <pre
        v-highlightjs
      ><code class="json">{"copyright":"2020 MizukiSonoko"}</code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {}
});
</script>

<style lang="postcss" scoped>
.footer {
  width: 100%;
  bottom: 0;
  text-align: center;
  padding: 40px;
  .copyright {
    color: #e4decd;
    .json {
      background: #393939;
    }
  }
}
</style>
