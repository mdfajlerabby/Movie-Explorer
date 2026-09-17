import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BrowseSection from '../components/BrowseSection'
import { useShows } from '../hooks/useShows'

export default function Shows() {
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const navigate = useNavigate()
  const { shows, activeQuery, loading, error } = useShows(query)

  function handleQueryChange(value) {
    setQuery(value)
    setShowAll(false)
  }

  return (
    <BrowseSection
      query={query}
      onQueryChange={handleQueryChange}
      activeQuery={activeQuery}
      shows={shows}
      showAll={showAll}
      onShowAll={() => setShowAll(true)}
      loading={loading}
      error={error}
      onSelect={(show) => navigate(`/shows/${show.id}`)}
    />
  )
}
