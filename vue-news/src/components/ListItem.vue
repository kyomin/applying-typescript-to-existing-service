<template>
  <ul class="news-list">
    <li v-for="news in items" :key="news.id" class="post">
      <div class="points">
        {{ news.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="news.domain">
            <a :href="news.url">{{ news.title }}</a
            ><small class="link-text" v-if="news.domain"
              >({{ news.domain }})</small
            >
          </template>
          <template v-else>
            <router-link :to="`/item/${news.id}`">{{ news.title }}</router-link
            ><small
              ><a class="link-text" :href="news.domain" v-if="news.domain"
                >({{ news.domain }})</a
              ></small
            >
          </template>
        </p>
        <small v-if="news.user" class="link-text">
          by
          <router-link :to="`/user/${news.user}`" class="link-text">{{
            news.user
          }}</router-link>
        </small>
        <small v-if="news.time_ago" class="link-text">
          {{ timeAgo(news) }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { NewsItem } from "../api/index";

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<NewsItem[]>,
      required: true,
    },
  },
  methods: {
    // NewsItem.time_ago가 string임을 알기 때문에 안전하게 concat 함수를 호출할 수 있다.
    // 만일 오타나 없는 함수를 호출하면 힌트가 뜬다.
    timeAgo(news: NewsItem): string {
      return news.time_ago.concat(", 2022");
    },
  },
});
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
