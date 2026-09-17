import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function MainLayout() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
