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
    <news :news-list="newsList" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import News from "@/components/News.vue";

export default Vue.extend({
  components: {
    News
  },
  data(){
    return {
      newsList: []
    }
  },
  watch: {
    newsList() {
      this.newsList = this.$store.state.getters.newsList;
      console.log("watch newsList ", this.$store.state, this.newsList);
    }
  },
  created() {
    this.$store.dispatch("get_news", () => {
      console.log("newsList ", this.$store.state.getters, this.newsList);
      this.newsList = this.$store.state.getters.newsList;
    });
  },
});
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
  @media only screen and (max-width: 767px){
    .top {
      display: block;
      min-height: 50vh;
      .top-image {
        padding: 20px;
        padding-top: 60px;
        width: 70%;
      }
      .code {
        padding: 20px;
      }
    }
  }
}
</style>
