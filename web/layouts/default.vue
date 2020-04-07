<template>
  <div>
    <header>header</header>
    <nav class="sticky flex text-center">
      <nuxt-link class="flex-1" to="/">要闻</nuxt-link>
      <nuxt-link class="flex-1" to="/v">抗疫</nuxt-link>
      <nuxt-link class="flex-1" to="/hot">热点</nuxt-link>
      <nuxt-link class="flex-1" to="/video">视频</nuxt-link>
    </nav>
    <main>
      <div v-for="n in 100" :key="n">{{ n }}</div>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
