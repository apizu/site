<template>
  <div class="container">
    <img src="/img/top.png" class="top-image" />
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
  .top-image {
    width: 30%;
    pointer-events: none;
    user-select: none;
  }
}
</style>
