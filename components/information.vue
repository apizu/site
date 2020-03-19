<template>
  <div class="information">
    <div># information</div>
    <template v-for="info in infoList">
      <div class="content" :key="info.id">{{info.date}}: {{info.text}}</div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
  data() {
    return {
      // Mock data.
      // ToDo get data from server.
      infoList: [
        {
          id: "5702312ef2be444c9eceee9e588924c4",
          text: "release web site",
          date: "2020/03/18"
        }
      ]
    };
  }
});
</script>

<style lang="postcss" scoped>
.information {
  width: 100%;
  bottom: 0;
  text-align: center;
  padding: 40px;
  .content {
    margin: 20px;
  }
}
</style>
