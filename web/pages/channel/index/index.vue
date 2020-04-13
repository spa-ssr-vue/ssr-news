<template>
  <nav>
    <ul class="nav nav-channel-custom d-flex flex-wrap text-center px-12 pb-9">
      <li
        class="nav-item w-25 p-6"
        v-for="(item, index) in navChannel"
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
      navChannel: new Array(22).fill({
        name: '推荐',
        path: '/channels/asdfe'
      })
    }
  }
}
</script>

<style></style>
