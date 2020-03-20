<template>
  <div class="information">
    <div># information</div>
    <template v-for="n in newsList">
      <div class="content" :key="n.id">{{n.date}}: {{n.text}}</div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { NewsContent } from "@/types/news"

export default Vue.extend({
  props: {
    newsList: {
      type: Array as PropType<NewsContent[]>,
      required: false,
      default:  () => ([])
    }
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
@media only screen and (max-width: 767px){
  .information {
    padding: 20px;
  }
}
</style>
