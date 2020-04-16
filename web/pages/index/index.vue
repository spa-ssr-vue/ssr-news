<template>
  <div>
    <nav
      class="nav nav-channel-home d-flex flex-wrap mx-15 mt-6 pt-12 pb-3 text-center text-dark-2 bg-white fs-16"
    >
      <nuxt-link
        class="nav-link"
        v-for="(channel, index) in navChannel"
        :key="index"
        :to="channel.path"
        >{{ channel.name }}</nuxt-link
      >
    </nav>
    <div class="bg-white bfc" style="margin-top: -0.84rem">
      <div class="news news-top px-15 bg-white" style="margin-top: 0.84rem">
        <nuxt-link
          :to="news.path"
          class="py-12 bb-1 d-block"
          v-for="(news, index) in newsTop"
          :key="index"
        >
          <p class="title text-dark-6 fs-18 lh-26 mb-3">{{ news.title }}</p>
          <div class="info text-gray-4 fs-12 lh-16">
            <span class="text-red mr-9">置顶</span>
            <span class="mr-9">{{ news.author }}</span>
            <span class="mr-9">{{ news.time }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- <div class="news news-swiper bg-white">
      <div v-swiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="index in 6" :key="index">
            <news-list class="news-swiper" :newsList="newsList"></news-list>
          </div>
        </div>
      </div>
    </div> -->
    <div style="height: 400px"></div>
    <news-list class="mt-9" :newsList="newsList"></news-list>
    <footer class="mt-6 bg-gray-bg" ref="footer">
      <nav class="bg-white">
        <ul class="nav nav-bottom d-flex flex-wrap text-center">
          <li class="nav-item" v-for="(item, index) in navChannel" :key="index">
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
import NewsList from './../../components/NewsList'

export default {
  directives: {
    swiper: directive
  },
  components: {
    NewsList
  },
  data() {
    return {
      navChannel: new Array(18).fill({ name: '新闻', path: '/channels/asdf' }),
      newsTop: new Array(3).fill({
        title: '习近平回信勉励武汉东湖新城社区工作者',
        author: '新华社新闻',
        time: '8小时前',
        path: '/articles/asdf'
      }),
      newsList: [
        {
          title: '柳州奖励援鄂医疗队员每人一辆汽车?',
          author: '腾讯较真',
          comment: 118,
          time: '5小时前',
          covers: [
            'https://mat1.gtimg.com/rain/bailing20/3ea246e5fa65.jiaozhen.png'
          ]
        },
        {
          title:
            '柳州奖励援鄂医疗队员每人一辆汽车?员每人一辆汽车员每人一辆汽车',
          author: '腾讯较真',
          comment: 118,
          time: '5小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11595585857_294195/0']
        },
        {
          title: '柳州奖励援鄂医疗队员每人一辆汽车?',
          author: '腾讯较真',
          comment: 118,
          time: '5小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11595688276_294195/0']
        },
        {
          title: '国产最强外贸坦克首度冲出亚洲！非将领：谢天谢地，救星终于来了',
          author: '航空网',
          comment: 18,
          time: '1小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11591210788_294195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11590072360_294195/0'
          ]
        },
        {
          title: '柳州奖励援鄂医疗队员每人一辆汽车?',
          author: '腾讯较真',
          comment: 118,
          time: '5小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11595546087_295195/0']
        },
        {
          title: '国产最强外贸坦克首度冲出亚洲！非将领：谢天谢地，救星终于来了',
          author: '航空网',
          comment: 18,
          time: '1小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11595546088_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11595546090_295195/0'
          ]
        },
        {
          title: '柳州奖励援鄂医疗队员每人一辆汽车?',
          author: '腾讯较真',
          comment: 118,
          time: '5小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11588197632_295195/0']
        },
        {
          title: '柳州奖励援鄂医疗队员每人一辆汽车?',
          author: '腾讯较真',
          comment: 118,
          time: '5小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11588197633_295195/0']
        },
        {
          title: '柳州奖励援鄂医疗队员每人一辆汽车?',
          author: '腾讯较真',
          comment: 118,
          time: '5小时前',
          covers: ['https://inews.gtimg.com/newsapp_ls/0/11588197634_295195/0']
        }
      ],
      swiperOption: {}
    }
  }
}
</script>

<style lang="scss"></style>
