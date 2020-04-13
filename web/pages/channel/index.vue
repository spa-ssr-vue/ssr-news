<template>
  <div class="channel bg-white text-dark-3">
    <p class="channel-title fs-18 text-center">全部频道</p>
    <div class="channel-custom">
      <div class="d-flex ai-end">
        <span class="fs-15 mr-9">我的频道</span>
        <span class="fs-12 text-gray-3 flex-1">点击进入频道</span>
        <span class="fs-12 text-gray-3 bg-gray-bg-1 px-9">编辑</span>
      </div>
      <nav>
        <ul
          class="nav nav-channel-custom d-flex flex-wrap text-center px-12 pb-9"
        >
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
    </div>
    <div class="channel-recommend">
      <div class="d-flex">
        <nuxt-link
          to="/channel"
          class="fs-15 mr-9"
          :class="$route.path === '/channel' ? 'active' : 'text-gray-3'"
          >推荐频道</nuxt-link
        >
        <div class="flex-1">
          <nuxt-link
            to="/channel/local"
            class="fs-15 mx-9"
            :class="$route.path === '/channel/local' ? 'active' : 'text-gray-3'"
            >地方频道</nuxt-link
          >
        </div>
        <span class="fs-12 text-gray-3">点击进入频道</span>
      </div>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navChannel: new Array(22).fill({
        name: '新闻',
        path: '/channel'
      })
    }
  }
}
</script>

<style lang="scss">
.channel {
  .channel-title {
    height: 0.88rem;
    line-height: 0.88rem;
  }

  .channel-custom,
  .channel-recommend {
    > div {
      margin: 0 0.4rem 0.18rem 0.4rem;
      padding-top: 0.3rem;
      line-height: 0.32rem;
    }
  }

  .channel-custom {
    span:nth-of-type(3) {
      border-radius: 10px;
    }
  }

  .channel-recommend {
    .active {
      position: relative;
      &::after {
        display: block;
        content: '';
        width: 0.28rem;
        height: 0.04rem;
        background-color: #498bf8;
        position: absolute;
        left: 0;
        bottom: -0.08rem;
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
