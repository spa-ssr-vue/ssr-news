<template>
  <nuxt :key="$route.path" />
</template>

<script>
import { adaptREM } from './../assets/js/adaptREM'
import { throttle } from './../assets/js/throttle'

export default {
  name: 'App',
  mounted() {
    adaptREM()
    window.addEventListener('resize', throttle(adaptREM, 50))
  }
}
</script>

<style></style>
