
/* global chrome */
const handler = (req, sender, sendRes) => {
  const data = localStorage.data
  try {
    const map = JSON.parse(data)
    sendRes(Object.keys(map).map(key => map[key]))
  } catch (e) {
    sendRes([])
  }
}

chrome.runtime.onMessage.addListener(handler)
