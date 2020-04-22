<template>
  <div class="news news-list px-15 bg-white">
    <div v-for="(news, index) in newsList" :key="`news-${index}`">
      <nuxt-link
        :to="`/news/${news._id}`"
        class="news-item d-flex ai-start py-12"
        v-if="news.covers.length === 1"
      >
        <div class="flex-1 d-flex flex-column">
          <p class="news-item-title mb-12">
            {{ news.title }}
          </p>
          <div class="news-item-info">
            <span>{{ news.author.username }}</span>
            <span>{{ Math.ceil(Math.random(0, 10) * 1000) }}评</span>
            <span>{{ news.createddAt }}</span>
          </div>
        </div>
        <div class="ml-15">
          <img
            class="news-item-cover"
            src="./../assets/img/image-placeholder-logo.svg"
            v-lazy="news.covers[0]"
            data-lazy="true"
            alt=""
          />
        </div>
      </nuxt-link>
      <nuxt-link
        :to="`/news/${news._id}`"
        class="news-item d-flex flex-column pt-9 pb-6"
        v-else
      >
        <div class="flex-1">
          <p class="news-item-title mb-6">{{ news.title }}</p>
          <div class="d-flex jc-between ai-center mb-6">
            <img
              v-for="(item, index) in news.covers"
              :key="index"
              src="./../assets/img/image-placeholder-logo.svg"
              v-lazy="item"
              data-lazy="true"
              alt=""
              class="news-item-cover"
            />
          </div>
          <div class="news-item-info">
            <span>{{ news.author.username }}</span>
            <span>{{ Math.ceil(Math.random(0, 10) * 1000) }}评</span>
            <span>{{ news.createdAt }}</span>
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
