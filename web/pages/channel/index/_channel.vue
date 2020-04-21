<template>
  <nav>
    <ul class="nav nav-channel-custom d-flex flex-wrap text-center px-12 pb-9">
      <li
        class="nav-item w-25 p-6"
        v-for="(item, index) in localList"
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
  data() {
    return {
      localChannelList: []
    }
  },
  computed: {
    localList() {
      return this.localChannelList.map((item) => ({
        name: item.name,
        path: `/channels/${item._id}`
      }))
    }
  },
  mounted() {
    const localChannelList = JSON.parse(
      localStorage.getItem('localChannelList')
    )
    if (localChannelList) {
      this.localChannelList = localChannelList
    } else {
      this.localChannelList = this.$store.getters['channel/localChannelList']
      localStorage.setItem(
        'localChannelList',
        JSON.stringify(this.$store.getters['channel/localChannelList'])
      )
    }
  }
}
</script>

<style></style>
