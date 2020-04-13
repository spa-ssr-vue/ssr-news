<template>
  <div class="news news-list px-15 bg-white">
    <div v-for="(news, index) in newsList" :key="index">
      <nuxt-link
        to="/"
        class="news-item d-flex ai-start py-12"
        v-if="news.covers.length === 1"
      >
        <div>
          <p class="news-item-title mb-12">
            {{ news.title }}
          </p>
          <div class="news-item-info">
            <span>{{ news.author }}</span>
            <span>{{ news.comment }}评</span>
            <span>{{ news.time }}</span>
          </div>
        </div>
        <div class="ml-15">
          <img class="news-item-cover" :src="news.covers[0]" alt="" />
        </div>
      </nuxt-link>
      <nuxt-link to="/" class="news-item pt-9 pb-6" v-else>
        <div>
          <p class="news-item-title mb-6">{{ news.title }}</p>
          <div class="d-flex jc-between ai-center mb-6">
            <img
              v-for="(item, index) in news.covers"
              :key="index"
              :src="item"
              alt=""
              class="news-item-cover"
            />
          </div>
          <div class="news-item-info">
            <span>{{ news.author }}</span>
            <span>{{ news.comment }}评</span>
            <span>{{ news.time }}</span>
          </div>
        </div>
        <div></div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsList: { type: Array, required: true }
  }
}
</script>

<style></style>
