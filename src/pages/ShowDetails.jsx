import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DetailsModal from '../components/DetailsModal'
import { getShowById } from '../services/tvmaze'

export default function ShowDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [show, setShow] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadShow() {
      try {
        const result = await getShowById(id)
        setShow(result)
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setLoading(false)
      }
    }

    loadShow()
  }, [id])

  if (loading) return <div className="mx-auto my-[30px] max-w-[1300px] py-20 text-center font-mono text-sm text-muted">Loading show details<span className="text-orange">...</span></div>
  if (error) return <div className="mx-auto my-[30px] max-w-[1300px] py-20 text-center font-mono text-sm text-muted"><strong className="text-ink">Something went off script.</strong> {error}</div>
  if (!show) return null

  return <DetailsModal show={show} onClose={() => navigate('/shows')} />
}
