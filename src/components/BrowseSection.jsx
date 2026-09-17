import ShowCard from './ShowCard'

export default function BrowseSection({
  query,
  onQueryChange,
  activeQuery,
  shows,
  showAll,
  onShowAll,
  loading,
  error,
  onSelect,
}) {
  const visibleShows = showAll || activeQuery ? shows : shows.slice(0, 12)
  const heading = activeQuery ? `Results for “${activeQuery}”` : 'Find your next obsession'

  return (
    <section className="bg-cream px-[5.5vw] py-[92px] pb-[105px] max-[450px]:px-[5vw] max-[450px]:py-[65px]" id="browse">
      <div className="mx-auto mb-8 flex max-w-[1300px] items-end justify-between max-[800px]:block">
        <div>
          <p className="mb-3 font-mono text-[.65rem] uppercase tracking-[.13em] text-orange">The collection</p>
          <h2 className="m-0 text-[clamp(2rem,4vw,3.8rem)] leading-[.95] tracking-[-.08em]">{heading}</h2>
        </div>
        <span className="font-mono text-[.65rem] text-muted max-[800px]:mt-[18px] max-[800px]:block">{shows.length ? `${shows.length} shows` : 'Live library'}</span>
      </div>

      <label className="mx-auto mb-[46px] flex max-w-[1300px] items-center border border-[#dcd9d0] bg-paper px-[17px]">
        <span className="rotate-[-20deg] font-serif text-[2rem] leading-none" aria-hidden="true">⌕</span>
        <input className="flex-1 border-0 bg-transparent px-3.5 py-[18px] text-[.9rem] text-ink outline-none" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search by show title..." aria-label="Search by show title" />
        {query && <button type="button" className="border-0 bg-transparent text-[1.5rem] text-muted" onClick={() => onQueryChange('')} aria-label="Clear search">×</button>}
      </label>

      {error && <div className="mx-auto my-[30px] max-w-[1300px] py-[45px] text-center font-mono text-xs text-muted"><strong className="text-ink">Something went off script.</strong> {error}</div>}
      {loading && <div className="mx-auto my-[30px] max-w-[1300px] py-[45px] text-center font-mono text-xs text-muted">Loading the collection<span className="text-orange">...</span></div>}
      {!loading && !error && visibleShows.length === 0 && <div className="mx-auto my-[30px] max-w-[1300px] py-[45px] text-center font-mono text-xs text-muted"><strong className="text-ink">No shows found.</strong> Try another title.</div>}
      {!loading && !error && visibleShows.length > 0 && (
        <div className="mx-auto grid max-w-[1300px] grid-cols-4 gap-x-5 gap-y-9 max-[800px]:grid-cols-2 max-[450px]:grid-cols-1 max-[450px]:gap-x-3 max-[450px]:gap-y-7">
          {visibleShows.map((show) => <ShowCard key={show.id} show={show} onSelect={onSelect} />)}
        </div>
      )}
      {!showAll && !activeQuery && shows.length > 12 && <button className="mx-auto mt-[65px] block border border-ink bg-transparent px-5 py-[15px] font-mono text-[.68rem]" onClick={onShowAll}>View the full collection <span className="ml-5 text-orange" aria-hidden="true">↓</span></button>}
    </section>
  )
}
