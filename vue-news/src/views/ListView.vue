<template>
  <div>
    <ListItem :items="newsItems" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchNews, NewsItem } from "../api";
import ListItem from "../components/ListItem.vue";

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },
  methods: {
    async fetchNewsItems() {
      /* 
        이제 여기서 response.data는 NewsItem[] 타입임을 안다.
        따라서 response.data는 배열의 메서드를 호출할 수 있고,
        response.data[0]은 NewsItem의 속성에 접근할 수 있도록 자동 완성이 된다.
      */
      const response = await fetchNews();
      this.newsItems = response.data;
    },
  },
  created() {
    this.fetchNewsItems();
  },
});
</script>

<style>
</style>
