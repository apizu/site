<template>
  <div class="container">
    <div class="top">
      <img src="/img/top.jpg" class="top-image" />
      <div>
        <div class="message">Aizu for Computer.</div>
        <div class="code">
          <pre v-highlightjs><code class="sh">$ curl {WIP}</code></pre>
        </div>
      </div>
    </div>
    <information />
  </div>
</template>

<script>
import Information from "@/components/information.vue";

export default {
  components: {
    Information
  }
};
</script>

<style lang="postcss" scoped>
.container {
  width: 100%;
  color: #e4decd;
  .top {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .top-image {
      width: 30%;
      pointer-events: none;
      user-select: none;
    }

    .message {
      padding: 8px 0;
    }
    .code {
      padding: 8px 0;
    }
  }
}
</style>
