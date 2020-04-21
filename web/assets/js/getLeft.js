export function getScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}

export function getOffsetLeft(el) {
  let offsetLeft = 0
  while (el !== document.body && el !== null) {
    offsetLeft += el.offsetLeft
    el = el.offsetParent
  }
  return offsetLeft
}
