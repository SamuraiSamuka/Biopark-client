import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './reset.css'
import './index.css'
import Root from './components/Root'
import Erro from './components/Erro'
import Condominios from './pages/Condominios'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Erro />,
    children: [{
        errorElement: <Erro />,
        children: [
          // { index: true, element: <Root />},
          {
            path: '/condominios',
            element: <Condominios />
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