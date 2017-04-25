/* global chrome */
import React from 'react'
import {render} from 'react-dom'

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

function appendPabel({label, color: {panel, font='#FFF'}}) {
  const div = document.createElement('div')
  document.body.appendChild(div)
  render(
    <h1 className='__envinfo_label' style={{ backgroundColor: panel }}>
      <span style={{ color: font || '#FFF' }}>
        {label}
      </span>
    </h1>,
    div
  )
}
