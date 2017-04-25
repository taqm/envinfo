
/* global chrome */
const handler = (req, sender, sendRes) => {
  const data = localStorage.data
  try {
    sendRes(JSON.parse(data))
  } catch (e) {
    sendRes([])
  }
}

chrome.runtime.onMessage.addListener(handler)
