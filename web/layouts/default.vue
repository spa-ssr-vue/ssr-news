<template>
  <div>
    <!-- start of header top -->
    <header>
      <nav class="flex">
        <div class="flex-1">
          <img
            class="logo"
            src="./../assets/img/logo-text-whitetext_v2.svg"
            alt="logo"
          />
        </div>
        <img
          class="channel"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjE4OCAzLjc1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAgMTQuNjI1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAtNy4zMTNIMi44MTNhLjE4OC4xODggMCAwIDAtLjE4OC4xODh2MS41YzAgLjEwMy4wODQuMTg4LjE4OC4xODhoMTguMzc1YS4xODguMTg4IDAgMCAwIC4xODctLjE4OHYtMS41YS4xODguMTg4IDAgMCAwLS4xODgtLjE4OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=="
          alt="更多频道"
        />
      </nav>
    </header>
    <!-- end of header -->

    <!-- start of nav home-->
    <nav ref="navHome" style="height:0.88rem">
      <ul
        class="nav nav-home flex text-center text-white fs-18 fw-500"
        :class="isFixed ? 'fixed' : ''"
      >
        <li class="nav-item flex-1" v-for="(item, index) in nav" :key="index">
          <nuxt-link class="nav-link" :to="item.path">{{
            item.name
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <!-- end of nav home -->

    <!-- start of main -->
    <main>
      <nuxt-child />
    </main>
    <!-- end of main -->
  </div>
</template>

<script>
import { throttle } from './../assets/js/throttle'
import { adaptREM } from './../assets/js/adaptREM'

export default {
  data() {
    return {
      isFixed: false,
      nav: [
        { name: '要闻', path: '/' },
        { name: '抗疫', path: '/c' },
        { name: '热点', path: '/hot' },
        { name: '视频', path: '/video' }
      ]
    }
  },

  mounted() {
    adaptREM()
    window.addEventListener('scroll', this.handleScrollThrottle)
    window.addEventListener('resize', throttle(adaptREM, 100))
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScrollThrottle)
  },

  methods: {
    handleScroll() {
      if (this.$refs.navHome.getBoundingClientRect().top <= 0) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  computed: {
    handleScrollThrottle() {
      return throttle(this.handleScroll, 100)
    }
  }
}
</script>

<style lang="scss">
header {
  height: 3rem;
  padding: 0.3rem 0.24rem 0 0.3rem;
  margin-bottom: -2.1rem;
  background: linear-gradient(
    176deg,
    rgba(76, 126, 255, 1) 0%,
    rgba(100, 174, 252, 1) 100%
  );
  .logo {
    width: 1.8rem;
    height: 0.48rem;
  }

  .channel {
    width: 0.52rem;
    height: 0.52rem;
  }
}
</style>
