import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './reset.css'
import './index.css'
import Root from './routes/Root'
import Erro from './components/Erro'
import Condominios, {action as condAction, loader as condLoader } from './routes/Condominios'
import EditCondominio, {loader as editCondLoader, action as editCondAction} from './routes/Condominios/edit'
import { action as destroyCondAction } from './routes/Condominios/destroy'
import Predios, {action as predAction, loader as predLoader} from './routes/Predios'
import EditPredio, {loader as editPredLoader, action as editPredAction} from './routes/Predios/edit'
import { action as destroyPredAction } from './routes/Predios/destroy'
import Apartamentos, {action as apartAction, loader as apartLoader} from './routes/Apartamentos'
import EditApartamento, { loader as editApartLoader, action as editApartAction} from './routes/Apartamentos/edit'
import { action as destroyApartAction } from './routes/Apartamentos/destroy'
import Locatarios, {action as locatAction, loader as locatLoader} from './routes/Locatarios'
import EditLocatario, {loader as editLocatLoader, action as editLocatAction} from './routes/Locatarios/edit'
import { action as destroyLocatAction } from './routes/Locatarios/destroy'
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
            action: editCondAction,
          },
          {
            path: '/condominios/:condId/destroy',
            action: destroyCondAction,
          },
          {
            path: '/predios',
            element: <Predios />,
            loader: predLoader,
            action: predAction
          },
          {
            path: '/predios/:predId/edit',
            element: <EditPredio/>,
            loader: editPredLoader,
            action: editPredAction
          },
          {
            path: '/predios/:predId/destroy',
            action: destroyPredAction,
          },
          {
            path: '/apartamentos',
            element: <Apartamentos/>,
            loader: apartLoader,
            action: apartAction
          },
          {
            path: '/apartamentos/:apartId/edit',
            element: <EditApartamento />,
            loader: editApartLoader,
            action: editApartAction
          },
          {
            path: '/apartamentos/:apartId/destroy',
            action: destroyApartAction
          },
          {
            path: '/locatarios',
            element: <Locatarios />,
            loader: locatLoader,
            action: locatAction
          },
          {
            path: '/locatarios/:locatId/edit',
            element: <EditLocatario />,
            loader: editLocatLoader,
            action: editLocatAction
          },
          {
            path: '/locatarios/:locatId/destroy',
            action: destroyLocatAction
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