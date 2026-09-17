import { getShowYear } from '../utils/show'

export default function ShowCard({ show, onSelect }) {
  const image = show.image?.medium || show.image?.original

  return (
    <article className="min-w-0">
      <button className="group relative block w-full overflow-hidden border-0 bg-[#d7d2c7] p-0" onClick={() => onSelect(show)} aria-label={`View details for ${show.name}`}>
        {image ? <img className="block aspect-[2/2.85] w-full object-cover" src={image} alt={`${show.name} poster`} /> : <div className="flex aspect-[2/2.85] items-center justify-center bg-ink p-5 text-center text-[1.3rem] text-acid">{show.name}</div>}
        <span className="absolute bottom-0 left-0 flex w-full translate-y-full justify-between bg-ink/85 p-[15px] font-mono text-[.65rem] text-acid opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">View details <span aria-hidden="true">↗</span></span>
      </button>
      <div className="flex items-start justify-between gap-2.5 px-0 pb-2 pt-4 max-[450px]:block">
        <div>
          <h3 className="mb-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-base tracking-[-.04em]">{show.name}</h3>
          <p className="m-0 font-mono text-[.58rem] text-muted">{show.genres?.slice(0, 2).join(' · ') || 'Series'} <span className="ml-1.5 border-l border-[#bbb] pl-1.5">{getShowYear(show.premiered)}</span></p>
        </div>
        <span className="whitespace-nowrap font-mono text-[.66rem] text-orange max-[450px]:mt-2 max-[450px]:block" aria-label={`Rating ${show.rating?.average || 'not rated'}`}>★ {show.rating?.average || '—'}</span>
      </div>
      <button className="w-full border-0 border-b border-[#c9c6bd] bg-transparent py-2 text-left font-mono text-[.62rem] text-ink" onClick={() => onSelect(show)}>See details <span className="float-right text-orange" aria-hidden="true">↗</span></button>
    </article>
  )
}
