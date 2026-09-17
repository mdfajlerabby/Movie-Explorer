import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto my-[30px] max-w-[1300px] py-20 text-center font-mono text-sm text-muted">
      <strong className="text-ink">Page not found.</strong>
      <p>The show you are looking for does not exist.</p>
      <Link className="inline-block bg-ink px-5 py-[17px] text-[.7rem] font-bold text-cream no-underline" to="/shows">Back to shows</Link>
    </section>
  )
}
