import Vue from 'vue'
import { throttle } from './../assets/js/throttle'

function isShow(el) {
  const clientHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  const top = el.getBoundingClientRect().top
  return top < clientHeight
}

function lazyLoad(el, binding) {
  if (el && el.dataset.load && isShow(el)) {
    el.src = binding.value
    el.removeAttribute('data-load')
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
