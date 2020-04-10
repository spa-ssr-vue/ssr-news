export function throttle(fn, delayTime) {
  let timer = null
  return function() {
    const context = this
    const args = arguments
    if (timer) {
      return
    }
    timer = setTimeout(function() {
      timer = null
      clearTimeout(timer)
      fn.apply(context, args)
    }, delayTime)
  }
}
