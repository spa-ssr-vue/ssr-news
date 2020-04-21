<template>
  <nav>
    <ul class="nav nav-channel-custom d-flex flex-wrap text-center px-12 pb-9">
      <li
        class="nav-item w-25 p-6"
        v-for="(item, index) in abandonList"
        :key="index"
      >
        <nuxt-link class="nav-link fs-16 bg-gray-bg-1" :to="item.path">{{
          item.name
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  layout: 'app',
  data() {
    return {
      abandonChannelList: []
    }
  },
  computed: {
    abandonList() {
      return this.abandonChannelList.map((item) => ({
        name: item.name,
        path: `/channels/${item._id}`
      }))
    }
  },
  mounted() {
    const abandonChannelList = JSON.parse(
      localStorage.getItem('abandonChannelList')
    )
    if (abandonChannelList) {
      this.abandonChannelList = abandonChannelList
    } else {
      this.abandonChannelList = this.$store.getters[
        'channel/abandonChannelList'
      ]
      localStorage.setItem(
        'abandonChannelList',
        JSON.stringify(this.$store.getters['channel/abandonChannelList'])
      )
    }
  }
}
</script>

<style></style>
