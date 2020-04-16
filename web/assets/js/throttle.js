export function throttle(action, defer) {
  let timer = null
  return function() {
    const context = this
    const args = arguments
    if (timer) {
      return
    }
    timer = setTimeout(function() {
      timer = null
      action.apply(context, args)
    }, defer)
  }
}
