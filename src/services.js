export function getBooks() {
  return fetchData({ url: '/books/' })
}

export function getSubjects() {
  return fetchData({ url: '/subjects/' })
}

function fetchData({ url }) {
  return fetch(url).then(res => res.json())
}
