export function getBooks() {
  return fetchData({ url: '/books/' })
}
export function patchBook(data) {
  return fetchData({ url: '/books/', method: 'PATCH', id: data.id, data })
}
export function getSubjects() {
  return fetchData({ url: '/subjects/' })
}

function fetchData({ url, method = 'GET', id = '', data } = {}) {
  return fetch(url + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}
