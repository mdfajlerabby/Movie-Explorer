import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ShowDetails from './pages/ShowDetails'
import Shows from './pages/Shows'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shows',
        element: <Shows />,
      },
      {
        path: 'shows/:id',
        element: <ShowDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
