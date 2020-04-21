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
