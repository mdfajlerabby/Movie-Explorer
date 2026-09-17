import { useEffect } from 'react'
import { getShowYear, stripHtml } from '../utils/show'

export default function DetailsModal({ show, onClose }) {
  const image = show.image?.original || show.image?.medium

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-ink/75 p-6" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="relative grid max-h-[90vh] w-full max-w-[860px] grid-cols-[minmax(220px,.8fr)_1fr] overflow-auto bg-cream max-[800px]:block" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="absolute right-3 top-3 z-[1] border-0 bg-transparent text-2xl leading-none text-muted" onClick={onClose} aria-label="Close show details">×</button>
        <div className="min-h-[430px] bg-ink max-[800px]:h-[220px] max-[800px]:min-h-0">{image && <img className="size-full object-cover" src={image} alt="" />}</div>
        <div className="p-[68px_45px_40px] max-[800px]:p-8 max-[450px]:px-6">
          <p className="mb-6 font-mono text-[.65rem] uppercase tracking-[.13em] text-orange">Show details</p>
          <h2 className="m-0 mb-6 text-[clamp(2rem,4vw,3.5rem)] leading-[.92] tracking-[-.09em]" id="modal-title">{show.name}</h2>
          <div className="flex gap-5 border-y border-[#d8d5cc] py-[15px] font-mono text-[.62rem]"><span className="text-orange">★ {show.rating?.average || 'Not rated'}</span><span>{getShowYear(show.premiered)}</span><span>{show.runtime || show.averageRuntime || '—'} min</span></div>
          <div className="my-5 flex flex-wrap gap-1.5">{show.genres?.map((genre) => <span className="border border-[#c7c5bc] px-2 py-1.5 font-mono text-[.56rem]" key={genre}>{genre}</span>)}</div>
          <p className="text-[.86rem] leading-7 text-[#4c5650]">{stripHtml(show.summary) || 'No summary is available for this show yet.'}</p>
          {show.network?.name && <p className="font-mono text-[.62rem] text-muted">Originally aired on <strong className="text-ink">{show.network.name}</strong></p>}
          <button className="mt-[18px] inline-block border-0 bg-ink px-5 py-[17px] text-[.7rem] font-bold text-cream" onClick={onClose}>Back to browsing <span className="ml-3 text-base text-acid" aria-hidden="true">→</span></button>
        </div>
      </section>
    </div>
  )
}
