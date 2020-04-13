<template>
  <div class="channels">
    <div class="channels-header d-flex ai-center fs-18 text-white">
      <nuxt-link to="/" class="d-flex ai-center">
        <img src="./../../assets/img/ui-icon_log.svg" alt="" /><span
          class="ml-3"
          >首页</span
        >
      </nuxt-link>
      <div class="sep"></div>
      <div class="flex-1">{{ channel }}频道</div>
      <nuxt-link to="/channel">
        <img
          class="channel"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjE4OCAzLjc1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAgMTQuNjI1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAtNy4zMTNIMi44MTNhLjE4OC4xODggMCAwIDAtLjE4OC4xODh2MS41YzAgLjEwMy4wODQuMTg4LjE4OC4xODhoMTguMzc1YS4xODguMTg4IDAgMCAwIC4xODctLjE4OHYtMS41YS4xODguMTg4IDAgMCAwLS4xODgtLjE4OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=="
          alt="更多频道"
      /></nuxt-link>
    </div>
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
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import NewsList from './../../components/NewsList'

export default {
  asyncData({ params }) {
    return {
      id: params.id
    }
  },
  components: {
    NewsList
  },
  data() {
    return {
      channel: '军事',
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
      newsList: [
        {
          title: '中美外交官再次交火！华春莹一句反问直接“绝杀”美方，燃爆全场',
          author: '长江新闻号',
          comment: 52,
          time: '5小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11578311744_294195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578311643_294195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578311747_294195/0'
          ]
        },
        {
          title: '又一国要转向东方？美国下令不惜代价挽回，派出数万美军阻止',
          author: '大国鉴',
          comment: 31,
          time: '5小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11578235891_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578235892_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578235893_295195/0'
          ]
        },
        {
          title: '罗斯福号已有550人确诊 航母暴发疫情为何比邮轮更“毒”?',
          author: '环球网军事',
          comment: 6,
          time: '6小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11578089931_294195/0']
        },
        {
          title: '辽宁舰绕台进入南海之际 美军侦察机连续4天在南海上空飞行',
          author: '环球网',
          comment: 615,
          time: '5小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11578312961_294195/0']
        },
        {
          title: '中美外交官再次交火！华春莹一句反问直接“绝杀”美方，燃爆全场',
          author: '长江新闻号',
          comment: 52,
          time: '5小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11578311744_294195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578311643_294195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578311747_294195/0'
          ]
        },
        {
          title: '又一国要转向东方？美国下令不惜代价挽回，派出数万美军阻止',
          author: '大国鉴',
          comment: 31,
          time: '5小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11578235891_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578235892_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578235893_295195/0'
          ]
        },
        {
          title: '罗斯福号已有550人确诊 航母暴发疫情为何比邮轮更“毒”?',
          author: '环球网军事',
          comment: 6,
          time: '6小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11578089931_294195/0']
        },
        {
          title: '辽宁舰绕台进入南海之际 美军侦察机连续4天在南海上空飞行',
          author: '环球网',
          comment: 615,
          time: '5小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11578312961_294195/0']
        },
        {
          title: '中美外交官再次交火！华春莹一句反问直接“绝杀”美方，燃爆全场',
          author: '长江新闻号',
          comment: 52,
          time: '5小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11578311744_294195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578311643_294195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578311747_294195/0'
          ]
        },
        {
          title: '又一国要转向东方？美国下令不惜代价挽回，派出数万美军阻止',
          author: '大国鉴',
          comment: 31,
          time: '5小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11578235891_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578235892_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11578235893_295195/0'
          ]
        },
        {
          title: '罗斯福号已有550人确诊 航母暴发疫情为何比邮轮更“毒”?',
          author: '环球网军事',
          comment: 6,
          time: '6小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11578089931_294195/0']
        },
        {
          title: '辽宁舰绕台进入南海之际 美军侦察机连续4天在南海上空飞行',
          author: '环球网',
          comment: 615,
          time: '5小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11578312961_294195/0']
        }
      ],
      swiperOption: {
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.channels {
  .channels-header {
    height: 44px;
    padding: 0.2rem 0.24rem 0.2rem 0.18rem;
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
        right: 0;
        bottom: 0.04rem;
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
        // width: 100%;
        // left: 0;
        bottom: 0;
        line-height: 0.44rem;
        // z-index: 999;
        // text-align: center;
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
