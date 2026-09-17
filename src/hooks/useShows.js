import { useEffect, useState } from 'react'

const API_URL = 'https://api.tvmaze.com'

export function useShows(query) {
  const [shows, setShows] = useState([])
  const [activeQuery, setActiveQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const timer = setTimeout(async () => {
      setLoading(true)
      setError('')
      const trimmedQuery = query.trim()
      const endpoint = trimmedQuery
        ? `${API_URL}/search/shows?q=${encodeURIComponent(trimmedQuery)}`
        : `${API_URL}/shows`

      try {
        const response = await fetch(endpoint, { signal: controller.signal })
        if (!response.ok) throw new Error('Unable to reach TVMaze right now.')
        const data = await response.json()
        setShows(trimmedQuery ? data.map((item) => item.show) : data)
        setActiveQuery(trimmedQuery)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') setError(fetchError.message)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }, query ? 350 : 0)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  return { shows, activeQuery, loading, error }
}
