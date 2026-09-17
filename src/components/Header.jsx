import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-paper px-[5.5vw] py-6">
      <NavLink className="flex items-center gap-2.5 text-[1.1rem] font-extrabold tracking-[-.04em] text-ink no-underline" to="/">
        <span className="grid size-[30px] place-items-center bg-ink font-mono text-[.8rem] text-acid">M</span>
        <span>Marquee</span>
      </NavLink>
      <nav className="ml-[7vw] flex gap-8 max-[800px]:ml-0 max-[800px]:gap-4" aria-label="Main navigation">
        <NavLink className={({ isActive }) => `py-2 text-xs font-semibold no-underline ${isActive ? 'text-ink after:mx-auto after:mt-1.5 after:block after:size-[3px] after:bg-orange' : 'text-muted hover:text-ink'}`} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => `py-2 text-xs font-semibold no-underline ${isActive ? 'text-ink after:mx-auto after:mt-1.5 after:block after:size-[3px] after:bg-orange' : 'text-muted hover:text-ink'}`} to="/shows">Browse</NavLink>
      </nav>
      <NavLink className="bg-ink px-5 py-3.5 text-[.7rem] font-bold tracking-wide text-cream no-underline max-[800px]:hidden" to="/shows">Explore shows <span className="ml-3 text-base text-acid" aria-hidden="true">↗</span></NavLink>
    </header>
  )
}
