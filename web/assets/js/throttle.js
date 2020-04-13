export function throttle(action, delay) {
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
      action.apply(context, args)
    }, delay)
  }
}
