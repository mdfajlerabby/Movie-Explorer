const API_URL = 'https://api.tvmaze.com'

export async function getAllShows(signal) {
  const response = await fetch(`${API_URL}/shows`, { signal })
  if (!response.ok) throw new Error('Unable to reach TVMaze right now.')
  return response.json()
}

export async function searchShows(query, signal) {
  const response = await fetch(`${API_URL}/search/shows?q=${encodeURIComponent(query)}`, { signal })
  if (!response.ok) throw new Error('Unable to reach TVMaze right now.')
  const results = await response.json()
  return results.map((item) => item.show)
}

export async function getShowById(id) {
  const response = await fetch(`${API_URL}/shows/${id}`)
  if (!response.ok) throw new Error('Show details could not be loaded.')
  return response.json()
}
