<template>
  <div>
    <nav
      class="nav nav-channel-home d-flex flex-wrap mx-15 mt-6 pt-12 pb-3 text-center text-dark-2 bg-white fs-16"
    >
      <nuxt-link
        v-for="(channel, index) in userList"
        :key="`channel-nav-${index}`"
        :to="channel.path"
        class="nav-link"
        >{{ channel.name }}</nuxt-link
      >
    </nav>
    <div class="bg-white bfc" style="margin-top: -0.84rem">
      <div class="news news-top px-15 bg-white" style="margin-top: 0.84rem">
        <nuxt-link
          v-for="(news, index) in stickNews"
          :key="`stick-news-${index}`"
          :to="`/news/${news._id}`"
          class="py-12 bb-1px d-block"
        >
          <p class="title text-dark-6 fs-18 lh-26 mb-3">{{ news.title }}</p>
          <div class="info text-gray-4 fs-12 lh-16">
            <span class="text-red mr-9">置顶</span>
            <span class="mr-9">{{ news.author.username }}</span>
            <span class="mr-9">{{ news.createdAt }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- start of banner news -->
    <div class="news news-swiper bg-white">
      <div v-swiper="swiperOption" @slideChange="slideChange">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(items, index) in realBannerNews"
            :key="`swiper-news-${index}`"
          >
            <news-list class="news-swiper" :newsList="items"></news-list>
          </div>
        </div>
      </div>
    </div>
    <!-- end of banner news -->

    <!-- start of home news -->
    <news-list class="mt-9" :newsList="homeNews"></news-list>
    <!-- end of home news -->

    <div
      class="more more-load d-flex jc-center ai-center bg-white mt-6"
      ref="more"
      @click="pullWrapper"
    >
      <span class="text-blue-1">加载更多</span
      ><img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNTYgNC4wOGw0LjM2IDUuODEzYS4xLjEgMCAwIDAgLjE2IDBsNC4zNi01LjgxM0EuMi4yIDAgMCAxIDEyLjYgNGgxYS4yLjIgMCAwIDEgLjE2LjMybC01LjI4IDcuMDRhLjYuNiAwIDAgMS0uOTYgMEwyLjI0IDQuMzJBLjIuMiAwIDAgMSAyLjQgNGgxYS4yLjIgMCAwIDEgLjE2LjA4eiIgZmlsbD0iIzUwNzZGNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"
        alt="down icon"
      />
    </div>

    <footer ref="footer" class="mt-6 bg-gray-bg">
      <nav class="bg-white">
        <ul class="nav nav-bottom d-flex flex-wrap text-center">
          <li v-for="(item, index) in bottomList" :key="index" class="nav-item">
            <nuxt-link :to="item.path" class="nav-link text-gray-6">{{
              item.name
            }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div>
        <div class="d-flex jc-center ai-center fs-12 mb-15">
          <span>反馈</span>
          <span class="mx-9 text-gray">|</span>
          <span>举报中心</span>
          <span class="mx-9 text-gray">|</span>
          <span>隐私政策</span>
          <span class="mx-9 text-gray">|</span>
          <span>电脑版</span>
        </div>
        <div class="fs-12 text-gray-4 text-center">
          Copyright © 1998 - 2020 Tencent. All Rights Reserved
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import { chunk } from 'lodash'
import { throttle, isShow } from './../assets/js/utils'
import NewsList from './../components/NewsList'

export default {
  layout: 'main',
  async asyncData({ $axios }) {
    const stickNews = await $axios.$get('/news', {
      params: {
        type: 'tag',
        name: 'stick'
      }
    })
    const bannerNews = await $axios.$get('/news', {
      params: {
        type: 'tag',
        name: 'banner',
        page: 1,
        limit: 18
      }
    })
    const homeNews = await $axios.$get('/news', {
      params: {
        type: 'tag',
        name: 'home'
      }
    })
    return {
      stickNews,
      bannerNews,
      homeNews
    }
  },
  async fetch({ store, $axios }) {
    await store.dispatch('channel/fetchChannel')
  },
  directives: {
    swiper: directive
  },
  components: {
    NewsList
  },

  data() {
    return {
      userChannelList: [],
      swiperOption: {},
      query: {
        type: 'tag',
        name: 'home',
        page: 1,
        limit: 10
      }
    }
  },

  computed: {
    userList() {
      const userList = this.userChannelList.slice(0, 17).map((item) => ({
        name: item.name,
        path: `/channels/${item._id}`
      }))
      userList.push({
        name: '更多',
        path: '/channel'
      })
      return userList
    },
    bottomList() {
      const bottomList = this.userChannelList.slice(0, 18).map((item) => ({
        name: item.name,
        path: `/channels/${item._id}`
      }))
      return bottomList
    },
    realBannerNews() {
      return chunk(this.bannerNews, 3)
    },
    pullLazy() {
      return throttle(this.pull, 200)
    }
  },
  mounted() {
    const userChannelList = JSON.parse(localStorage.getItem('userChannelList'))
    if (userChannelList) {
      this.userChannelList = userChannelList
    } else {
      this.userChannelList = this.$store.getters['channel/userChannelList']
      localStorage.setItem(
        'userChannelList',
        JSON.stringify(this.$store.getters['channel/userChannelList'])
      )
    }

    window.addEventListener('scroll', this.pullLazy)
  },
  destroyed() {
    window.removeEventListener('scroll', this.pullLazy)
  },
  methods: {
    async pull() {
      if (isShow(this.$refs.more) && this.query.page <= 5) {
        await this.pullWrapper()
      }
    },
    async pullWrapper() {
      this.query.page += 1
      const res = await this.$axios.$get('/news', {
        params: this.query
      })
      this.homeNews = this.homeNews.concat(res)
      // this.homeNews.push(res)
    },
    slideChange() {
      const evt = window.document.createEvent('HTMLEvents')
      evt.initEvent('scroll', true)
      window.dispatchEvent(evt)
    }
  }
}
</script>

<style lang="scss"></style>
