import Vue from 'vue'
import { throttle, isShow } from './../assets/js/utils'

function lazyLoad(el, binding) {
  if (el && el.dataset.lazy === 'true' && isShow(el)) {
    el.src = binding.value
    el.removeAttribute('data-lazy')
  }
}

const lazy = {
  install(Vue, option) {
    const { defer = 0 } = option
    Vue.directive('lazy', {
      bind(el, binding, vnode) {
        window.addEventListener(
          'scroll',
          throttle(function() {
            lazyLoad(el, binding)
          }, defer)
        )
      },
      inserted(el, binding, vnode) {
        // lazyLoad(el, binding)
        setTimeout(function() {
          lazyLoad(el, binding)
        }, 0)
      }
    })
  }
}

Vue.use(lazy, {
  defer: 100
})
