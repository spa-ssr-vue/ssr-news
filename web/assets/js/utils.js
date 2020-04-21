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

// lazy load
export function getScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}

export function getOffsetTop(el) {
  let offsetTop = 0
  while (el !== document.body && el !== null) {
    offsetTop += el.offsetTop
    el = el.offsetParent
  }
}

export function isShow(el) {
  const clientHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const top = el.getBoundingClientRect().top
  const left = el.getBoundingClientRect().left
  return top < clientHeight && left < 2 * clientWidth
}

// rem 即等比缩放(模拟vw,vh)  750/100px = clientWidth/p  p= (clientWidth * 100)/750
export function adaptREM() {
  const html = document.documentElement
  const deviceWidth = html.clientWidth || 375
  html.style.fontSize = (deviceWidth * 100) / 750 + 'px'
}
