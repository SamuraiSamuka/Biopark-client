import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './reset.css'
import './index.css'
import Root from './components/Root'
import Erro from './components/Erro'
import Condominios from './pages/Condominios'
import Predios from './pages/Predios'
import Apartamentos from './pages/Apartamentos'
import Locatarios from './pages/Locatarios'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Erro />,
    children: [{
        errorElement: <Erro />,
        children: [
          { index: true, element: <Dashboard />},
          {
            path: '/condominios',
            element: <Condominios />
          },
          {
            path: '/predios',
            element: <Predios />
          },
          {
            path: '/apartamentos',
            element: <Apartamentos/>
          },
          {
            path: '/locatarios',
            element: <Locatarios />
          }
        ]
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)