<template>
  <div class="vd bg-white">
    <video-list :videoList="videoList"></video-list>
  </div>
</template>

<script>
import VideoList from './../../components/VideoList'

export default {
  components: {
    VideoList
  },
  data() {
    return {
      videoList: new Array(10).fill({
        title: '越来越露骨！特朗普威胁对世卫组织放大招，紧要关头中国寸步不让',
        cover: 'https://puui.qpic.cn/qqvideo_ori/0/g0947xsk0m0_496_280/0',
        channel: '新闻',
        author: {
          avatar: 'https://inews.gtimg.com/newsapp_ls/0/1961011680_200200/0',
          username: '长江新闻号'
        }
      })
    }
  }
}
</script>

<style lang="scss">
.vd {
  border-radius: 0.24rem 0.24rem 0rem 0rem;
  margin-top: 0.12rem;
  overflow: hidden;
}
</style>
