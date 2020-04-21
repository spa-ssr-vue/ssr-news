<template>
  <div class="article">
    <div
      class="header header-articles d-flex ai-center fs-18 text-white bg-white"
    >
      <nuxt-link to="/" class="d-flex ai-center">
        <img src="./../../assets/img/ui-icon_log.svg" alt="" /><span
          class="ml-3"
          >首页</span
        >
      </nuxt-link>
      <div class="sep"></div>
      <div class="flex-1">新闻</div>
      <nuxt-link to="/channel">
        <img
          class="channel"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjE4OCAzLjc1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAgMTQuNjI1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAtNy4zMTNIMi44MTNhLjE4OC4xODggMCAwIDAtLjE4OC4xODh2MS41YzAgLjEwMy4wODQuMTg4LjE4OC4xODhoMTguMzc1YS4xODguMTg4IDAgMCAwIC4xODctLjE4OHYtMS41YS4xODguMTg4IDAgMCAwLS4xODgtLjE4OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=="
          alt="更多频道"
      /></nuxt-link>
    </div>
    <div class="article-title bg-white">
      {{ id }}
      <h1 class="fs-22 text-dark-6 fw-400 pt-16 pb-15">{{ article.title }}</h1>
    </div>
    <div class="article-info d-flex ai-center fs-12 lh-24 bg-white">
      <img class="mr-6" :src="article.author.avatar" alt="" />
      <span class="text-primary mr-9">{{ article.author.username }}</span>
      <span class="flex-1 text-gray-4">{{ article.createdAt }}</span>
      <span class="px-9 bg-primary text-white">+关注</span>
    </div>
    <div class="article-content bg-white">
      <div v-html="article.content"></div>
    </div>
    <div class="article-recommend mt-6 bg-white">
      <div class="title text-drak-4">推荐阅读</div>
      <news-list :newsList="newsList"></news-list>
      <nuxt-link to="/" class="more"
        ><span>发现更多资讯</span
        ><img src="./../../assets/img/icon_article_more.svg" alt=""
      /></nuxt-link>
    </div>
    <div class="article-comment mt-6 bg-white">
      <div class="title text-drak-4">热门评论</div>
      <div class="comment ai-start">
        <div
          class="comment-item bb-1px d-flex"
          v-for="(comment, index) in comments"
          :key="index"
        >
          <div class="mr-9">
            <img class="avatar" :src="comment.user.avatar" alt="" />
          </div>
          <div class="d-flex flex-column flex-1 text-dark-3 pb-12">
            <div class="info d-flex ai-center">
              <span class="flex-1">{{ comment.user.username }}</span>
              <span class="fs-12 text-gray-4">21</span>
              <img
                class="up"
                src="./../../assets/img/comment-icon-up.svg"
                alt=""
              />
            </div>
            <div class="content lh-24 my-9">{{ comment.content }}</div>
            <div class="time fs-12 text-gray-4">{{ comment.createdAt }}</div>
          </div>
        </div>
      </div>
      <!-- <div class="fixed-bottom d-flex ai-center bg-white">
        <div>
          <span class="sprite sprite-write"></span><span>我来说两句</span>
        </div>
        <span class="sprite sprite-comment"></span>
      </div> -->
      <div class="more">
        <span>全部{{ 20 }}条评论</span
        ><img src="./../../assets/img/icon_article_more.svg" alt="comment" />
      </div>
    </div>
    <footer class="mt-6">
      <nav class="bg-white">
        <ul class="nav nav-bottom d-flex flex-wrap text-center">
          <li
            class="nav-item"
            v-for="(item, index) in bottomList"
            :key="`nav-bottom-${index}`"
          >
            <nuxt-link :to="item.path" class="nav-link text-gray-6">{{
              item.name
            }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="d-flex jc-center ai-center fs-12">
        <span>反馈</span>
        <span class="mx-9 text-gray">|</span>
        <span>举报中心</span>
        <span class="mx-9 text-gray">|</span>
        <span>隐私政策</span>
        <span class="mx-9 text-gray">|</span>
        <span>电脑版</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { adaptREM } from './../../assets/js/adaptREM'
import NewsList from './../../components/NewsList'

export default {
  asyncData({ params }) {
    return {
      id: params.id
    }
  },

  layout: 'app',
  components: {
    NewsList
  },
  data() {
    return {
      article: {
        title: '湖北医务人员取得临时性工作补贴和奖金免征个税',
        content: '<h4>zzzzzzzzz</h4>',
        author: {
          avatar:
            'https://mat1.gtimg.com/pingjs/ext2020/xw-article-icons/newui/om-author-icon.svg',
          username: '北京日报客户端'
        },
        createdAt: '04-13 16:45'
      },
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
          title: '柳州奖励援鄂医疗队员每人一辆汽车?',
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
        }
      ],
      comments: [
        {
          user: {
            avatar:
              'https://q1.qlogo.cn/g?b=qq&k=gn56W6oyooFA4A4vG3Qo0g&s=100&t=1370329825',
            username: '疯狂的心'
          },
          content:
            '他们就相当于上战场的战士，并且他们打了大胜仗，多给些补贴和奖金',
          createdAt: '3小时前'
        },
        {
          user: {
            avatar:
              'https://q3.qlogo.cn/g?b=qq&k=TTSGjCic3mOrGeBl4S6dheA&s=100&t=1483428746',
            username: '一鸣'
          },
          content:
            '湖北医务人员取得临时性工作补贴和奖金免征个税……一线战疫，辛勤付出所得，全国人民都会支持。',
          createdAt: '3小时前'
        }
      ],
      userChannelList: []
    }
  },
  computed: {
    bottomList() {
      const bottomList = this.userChannelList.slice(0, 18).map((item) => ({
        name: item.name,
        path: `/channels/${item._id}`
      }))
      return bottomList
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
    adaptREM()
  }
}
</script>

<style lang="scss">
.article {
  .article-title,
  .article-info,
  .article-content {
    padding: 0 0.36rem;
  }

  .article-title {
    line-height: 0.68rem;
    font-family: PingFangSC-Medium;
  }

  .article-info {
    span:nth-of-type(3) {
      border-radius: 0.2rem;
    }
  }

  .article-recommend,
  .article-comment {
    overflow: hidden;
    .title {
      margin: 0.48rem 0 0.18rem 0;
      font-size: 0.4rem;
      height: 0.4rem;
      line-height: 0.44rem;
      font-weight: 600;
      font-family: fzltzch, PingFangSC-Semibold;
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 0.48rem;
      &::before {
        display: block;
        content: '';
        width: 0.24rem;
        height: 0.4rem;
        background-color: rgb(76, 126, 255);
        border-radius: 0rem 0.04rem 0.04rem 0rem;
        position: absolute;
        left: 0;
      }
    }
  }
}

.comment {
  overflow: hidden;
  .comment-item {
    margin: 0.24rem 0.36rem 0 0.36rem;
    .avatar {
      width: 0.64rem;
      height: 0.64rem;
      margin-left: 0.18rem;
      border-radius: 50%;
    }

    .info {
      height: 0.64rem;
      line-height: 0.64rem;
      .up {
        width: 0.32rem;
        height: 0.32rem;
      }
    }
  }
}

.fixed-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  line-height: 1rem;
}
</style>
