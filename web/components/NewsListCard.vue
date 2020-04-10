<template>
  <div class="card card-news">
    <div class="card-header">
      <nav>
        <ul class="nav flex">
          <li class="nav-item flex-1 text-dark-4 fw-600">
            <nuxt-link class="nav-link" to="/">{{
              item.channel.name
            }}</nuxt-link>
          </li>
          <li
            class="nav-item text-gray-6 fs-16 pl-9 lh-20"
            v-for="(channel, index) in item.childChannels"
            :key="index"
          >
            <nuxt-link class="nav-link" to="">{{ channel.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="card-body">
      <news-list :newsList="item.newsList"></news-list>
    </div>
    <div class="card-btn flex jc-center ai-center" @click="pull">
      <span class="text-blue-1">加载更多</span
      ><img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNTYgNC4wOGw0LjM2IDUuODEzYS4xLjEgMCAwIDAgLjE2IDBsNC4zNi01LjgxM0EuMi4yIDAgMCAxIDEyLjYgNGgxYS4yLjIgMCAwIDEgLjE2LjMybC01LjI4IDcuMDRhLjYuNiAwIDAgMS0uOTYgMEwyLjI0IDQuMzJBLjIuMiAwIDAgMSAyLjQgNGgxYS4yLjIgMCAwIDEgLjE2LjA4eiIgZmlsbD0iIzUwNzZGNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"
        alt="down icon"
      />
    </div>
  </div>
</template>

<script>
import NewsList from './NewsList'

export default {
  components: {
    NewsList
  },
  props: {
    item: { type: Object, required: true }
  },
  methods: {
    pull() {
      console.log('pull')
    }
  }
}
</script>

<style></style>
