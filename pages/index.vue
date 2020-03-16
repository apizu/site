<template>
  <div class="container">
    <img src="/img/top.png" class="top-image" />
    <div>
      <div class="message">Aizu for Computer.</div>
      <div class="code">
        <pre v-highlightjs><code class="sh">$ curl {WIP}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="postcss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #e4decd;
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
</style>
