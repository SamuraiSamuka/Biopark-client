import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './reset.css'
import './index.css'
import Root from './routes/Root'
import Erro from './components/Erro'
import Condominios, {action as condAction, loader as condLoader } from './routes/Condominios'
import EditCondominio, {loader as editCondLoader, action as editCondAction} from './routes/Condominios/editCond'
import Predios from './routes/Predios'
import Apartamentos from './routes/Apartamentos'
import Locatarios from './routes/Locatarios'
import Dashboard from './routes/Dashboard'

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
            element: <Condominios />,
            loader: condLoader,
            action: condAction,
          },
          {
            path: '/condominios/:condId/edit',
            element: <EditCondominio />,
            loader: editCondLoader,
            action: editCondAction
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