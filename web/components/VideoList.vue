<template>
  <div class="video bg-white">
    <div class="video-item" v-for="(video, index) in videoList" :key="index">
      <div class="video-item-cover text-white">
        <img class="cover" :src="video.cover" />
        <div class="title fs-18 lh-26">{{ video.title }}</div>
        <div class="info flex ai-center fs-12">
          <img src="./../assets/img/xw_icon_video_watch.svg" alt="watch" />
          <span class="ml-9">1766</span>
          <span class="mx-6">|</span>
          <span>02:11</span>
        </div>
        <img
          class="play"
          src="./../assets/img/xw_icon_video_play.svg"
          alt="play"
        />
      </div>
      <div class="video-item-info flex ai-center lh-24">
        <img class="avatar" :src="video.author.avatar" alt="头像" />
        <span class="fs-14 text-dark-6">{{ video.author.username }}</span
        ><span class="fs-12 text-gray-4 ml-6">{{ video.channel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoList: { type: Array, required: true }
  }
}
</script>

<style></style>
