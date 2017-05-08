/* global chrome */
import React from 'react'
import {render} from 'react-dom'

import InfoLabel from 'js/component/InfoLabel'

chrome.runtime.sendMessage('getData', data => {
  const url = location.href
  const idx = data.findIndex(mst => {
    // 不正な正規表現時のエラーを握りつぶす
    try {
      return url.match(mst.regex)
    } catch(e) {
      return false
    }
  })
  if (-1 === idx) {
    return
  }
  appendPabel(data[idx])
})

function appendPabel({label, bgColor, fontColor}) {
  const div = document.createElement('div')
  document.body.appendChild(div)
  render(
    <InfoLabel
      label={label}
      bgColor={bgColor}
      fontColor={fontColor}
      onDoubleClick={() => document.body.removeChild(div)}
    />,
    div
  )
}
