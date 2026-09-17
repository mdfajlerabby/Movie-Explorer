import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="flex items-center gap-[8vw] bg-ink px-[5.5vw] py-8 text-cream max-[800px]:grid max-[800px]:items-start max-[800px]:gap-4">
      <Link className="flex items-center gap-2.5 text-[1.1rem] font-extrabold tracking-[-.04em] text-cream no-underline" to="/"><span className="grid size-[30px] place-items-center bg-acid font-mono text-[.8rem] text-ink">M</span><span>Marquee</span></Link>
      <p className="font-mono text-[.62rem] text-[#a8b0aa]">Stories worth staying up for.</p>
      <small className="ml-auto font-mono text-[.62rem] text-[#a8b0aa] max-[800px]:ml-0">© 2026 Marquee. Data by TVMaze.</small>
    </footer>
  )
}
