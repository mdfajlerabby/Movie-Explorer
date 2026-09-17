import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[610px] overflow-hidden bg-gradient-to-br from-orange via-[#f07b4f] to-[#d65d3d] px-[13vw] py-[100px] max-[800px]:min-h-[580px] max-[800px]:px-[9vw] max-[800px]:py-20 max-[450px]:min-h-[530px]">
      <div className="pointer-events-none absolute left-[57%] top-[11%] z-0 -rotate-10 font-mono text-[clamp(3rem,7vw,7rem)] font-medium leading-[.85] tracking-[-.12em] text-acid opacity-90 max-[800px]:left-[45%] max-[800px]:top-[27%] max-[450px]:left-1/2 max-[450px]:top-[36%] max-[450px]:text-[2.8rem]" aria-hidden="true"><span>FILM<br />FOR<br />EVERY<br />MOOD</span></div>
      <div className="absolute -right-[12%] top-[18%] size-[600px] rounded-full border border-ink/25 max-[800px]:hidden" aria-hidden="true" />
      <div className="relative z-[1] max-w-[600px]">
        <p className="mb-6 font-mono text-[.65rem] uppercase tracking-[.13em]">Your next great watch</p>
        <h1 className="m-0 text-[clamp(3.5rem,7.5vw,7.3rem)] font-extrabold leading-[.87] tracking-[-.105em] max-[800px]:text-[clamp(3.5rem,15vw,6rem)]">Stories worth<br /><em className="text-acid not-italic">staying up for.</em></h1>
        <p className="my-8 max-w-[325px] text-[.95rem] leading-relaxed">Discover unforgettable shows, unexpected favorites, and the perfect thing to watch tonight.</p>
        <Link className="inline-block bg-ink px-5 py-[17px] text-[.7rem] font-bold tracking-wide text-cream no-underline transition hover:-translate-y-0.5 hover:bg-[#303a34]" to="/shows">Start exploring <span className="ml-3 text-base text-acid" aria-hidden="true">→</span></Link>
      </div>
      <div className="absolute bottom-8 right-[5.5vw] flex items-center gap-3 font-mono text-[.56rem] uppercase tracking-[.12em] max-[450px]:hidden"><span className="h-px w-12 bg-ink/45" /> Curated from TVMaze <span className="h-px w-12 bg-ink/45" /></div>
    </section>
  )
}
