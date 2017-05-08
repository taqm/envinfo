
export function saveData(data) {
  const json = localStorage.data || '{}'
  const mst = JSON.parse(json)
  mst[data.id] = data
  localStorage.data = JSON.stringify(mst)
}

export function deleteData(id) {
  const json = localStorage.data
  const mst = JSON.parse(json)
  delete mst[id]
  localStorage.data = JSON.stringify(mst)
}

export function getData(id) {
  const json = localStorage.data || '{}'
  const mst = JSON.parse(json)
  return mst[id]
}

export function getAll() {
  const json = localStorage.data || '{}'
  return JSON.parse(json)
}
