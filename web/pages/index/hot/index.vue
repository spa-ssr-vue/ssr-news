<template>
  <div class="hot bg-white">
    <div v-for="(item, index) in newsListCard" :key="index">
      <news-list-card :item="item"></news-list-card>
    </div>
  </div>
</template>

<script>
import NewsListCard from './../../../components/NewsListCard'

export default {
  components: {
    NewsListCard
  },
  data() {
    return {
      newsListCard: new Array(5).fill({
        channel: { name: '娱乐', path: '/' },
        childChannels: [
          { name: '综艺', path: '/' },
          { name: '时尚', path: '/' },
          { name: '电影', path: '/' }
        ],
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
            covers: [
              'https://mat1.gtimg.com/rain/bailing20/3ea246e5fa65.jiaozhen.png'
            ]
          },
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
              '国产最强外贸坦克首度冲出亚洲！非将领：谢天谢地，救星终于来了',
            author: '航空网',
            comment: 18,
            time: '1小时前',
            covers: [
              'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
              'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
              'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0'
            ]
          },
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
              '国产最强外贸坦克首度冲出亚洲！非将领：谢天谢地，救星终于来了',
            author: '航空网',
            comment: 18,
            time: '1小时前',
            covers: [
              'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
              'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
              'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0'
            ]
          },
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
              '国产最强外贸坦克首度冲出亚洲！非将领：谢天谢地，救星终于来了',
            author: '航空网',
            comment: 18,
            time: '1小时前',
            covers: [
              'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
              'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
              'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0'
            ]
          }
        ]
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
          covers: [
            'https://mat1.gtimg.com/rain/bailing20/3ea246e5fa65.jiaozhen.png'
          ]
        },
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
          title: '国产最强外贸坦克首度冲出亚洲！非将领：谢天谢地，救星终于来了',
          author: '航空网',
          comment: 18,
          time: '1小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0'
          ]
        },
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
          title: '国产最强外贸坦克首度冲出亚洲！非将领：谢天谢地，救星终于来了',
          author: '航空网',
          comment: 18,
          time: '1小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0'
          ]
        },
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
          title: '国产最强外贸坦克首度冲出亚洲！非将领：谢天谢地，救星终于来了',
          author: '航空网',
          comment: 18,
          time: '1小时前',
          covers: [
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0',
            'https://inews.gtimg.com/newsapp_ls/0/11559055143_295195/0'
          ]
        }
      ]
    }
  }
}
</script>

<style>
.hot {
  border-radius: 0.24rem 0.24rem 0rem 0rem;
  margin-top: 0.12rem;
  overflow: hidden;
}
</style>
