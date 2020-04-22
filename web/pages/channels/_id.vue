<template>
  <div class="channels">
    <div class="channels-header fs-18 text-white">
      <div class="d-flex ai-center">
        <nuxt-link to="/" class="d-flex ai-center">
          <img src="./../../assets/img/ui-icon_log.svg" alt="" /><span
            class="ml-3"
            >首页</span
          >
        </nuxt-link>
        <div class="sep"></div>
        <div class="flex-1">{{ channel.name }}频道</div>
        <nuxt-link to="/channel">
          <img
            class="channel"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjE4OCAzLjc1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAgMTQuNjI1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAtNy4zMTNIMi44MTNhLjE4OC4xODggMCAwIDAtLjE4OC4xODh2MS41YzAgLjEwMy4wODQuMTg4LjE4OC4xODhoMTguMzc1YS4xODguMTg4IDAgMCAwIC4xODctLjE4OHYtMS41YS4xODguMTg4IDAgMCAwLS4xODgtLjE4OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=="
            alt="更多频道"
        /></nuxt-link>
      </div>
      <nav ref="nav">
        <ul
          class="nav nav-channels d-flex ai-center text-white fs-16"
          :class="isFixed ? 'fixed' : ''"
        >
          <li class="nav-item px-12">
            <nuxt-link
              :to="`/channels/${parentChannel._id}`"
              class="nav-link"
              >{{ parentChannel.name === '新闻' ? '精选' : '推荐' }}</nuxt-link
            >
          </li>
          <li
            v-for="(channel, index) in channelList"
            :key="`channel-${index}`"
            class="nav-item px-12"
          >
            <nuxt-link :to="`/channels/${channel._id}`" class="nav-link">{{
              channel.name
            }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div>{{ id }}</div>
    <div class="channels-body">
      <div v-if="banner" class="banner">
        <div class="swiper" v-swiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in banner"
              :key="index"
            >
              <img class="w-100" :src="item.url" alt="" />
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
      <div><news-list :newsList="newsList"></news-list></div>
    </div>
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
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import { throttle, isShow } from './../../assets/js/utils'
import NewsList from './../../components/NewsList'

export default {
  layout: 'app',
  async asyncData({ params, $axios }) {
    const res = await $axios.$get(`/channels/${params.id}`, {
      params: {
        page: 1,
        limit: 10
      }
    })

    return {
      id: params.id,
      channel: res.channel,
      channelList: res.channelList,
      newsList: res.newsList
    }
  },
  components: {
    NewsList
  },
  data() {
    return {
      isFixed: false,
      banner: [
        {
          title: '',
          url: 'https://inews.gtimg.com/newsapp_ls/0/11528374649_640330/0'
        },
        {
          title: '',
          url: 'https://inews.gtimg.com/newsapp_ls/0/11526467638_640330/0'
        },
        {
          title: '',
          url: 'https://inews.gtimg.com/newsapp_ls/0/11528374649_640330/0'
        }
      ],
      swiperOption: {
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      query: {
        page: 1,
        limit: 10
      }
    }
  },
  computed: {
    parentChannel() {
      if (this.channel.parentChannel) {
        return this.channel.parentChannel
      }
      return this.channel
    },
    pullLazy() {
      return throttle(this.pull, 200)
    },
    fixNavThrottle() {
      return throttle(this.fixNav, 100)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.pullLazy)
    window.addEventListener('scroll', this.fixNavThrottle)
  },
  destroyed() {
    window.removeEventListener('scroll', this.pullLazy)
    window.removeEventListener('scroll', this.fixNavThrottle)
  },
  methods: {
    async pull() {
      if (isShow(this.$refs.more) && this.query.page <= 5) {
        await this.pullWrapper()
      }
    },
    async pullWrapper() {
      this.query.page += 1
      const res = await this.$axios.$get(`/channels/${this.id}`, {
        params: this.query
      })
      this.newsList = this.newsList.concat(res.newsList)
      // this.homeNews.push(res)
    },
    fixNav() {
      console.log(this.$refs.nav.getBoundingClientRect().top)
      if (this.$refs.nav.getBoundingClientRect().top <= 0) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style lang="scss">
.channels {
  .channels-header {
    // height: 44px;
    > div {
      padding: 0.24rem 0.24rem 0.08rem 0.18rem;
    }
    background-color: rgb(83, 123, 255);
    .sep {
      position: relative;
      height: 100%;
      margin: 0 0.2rem;
      &::after {
        display: block;
        content: '';
        width: 0.02rem;
        height: 0.36rem;
        background-color: rgb(224, 242, 255);
        position: absolute;
        left: 0;
        bottom: -0.2rem;
        transform: scaleX(0.5);
      }
    }
  }

  .channels-body {
    .banner {
      margin: 0.24rem 0.3rem 0 0.3rem;

      img {
        width: 100%;
        border-radius: 0.08rem;
      }

      .swiper {
        padding-bottom: 0.44rem;
      }

      .swiper-pagination {
        bottom: 0;
        line-height: 0.44rem;
        .swiper-pagination-bullet {
          width: 0.08rem;
          height: 0.08rem;
          margin-left: 0.12rem;
          background-color: rgb(217, 218, 219);
        }
        .swiper-pagination-bullet-active {
          background-color: rgb(140, 141, 144);
        }
      }
    }
  }
}
</style>
