// rem 即等比缩放(模拟vw,vh)  750/100px = clientWidth/p  p= (clientWidth * 100)/750
export function adaptREM() {
  const html = document.documentElement
  const deviceWidth = html.clientWidth || 375
  html.style.fontSize = (deviceWidth * 100) / 750 + 'px'
}
