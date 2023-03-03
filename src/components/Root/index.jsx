import './Root.css'
import { BiBuildingHouse } from 'react-icons/Bi'
import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {

  return (
    <>
    <aside className="menu">
      <div className="menu__cabecalho">
        <BiBuildingHouse/>
        <h2 className='menu__titulo'>Gerenciador de apartamentos</h2>
      </div>
      <ul className='menu__itens'>
        <NavLink to="" className={({isActive, isPending}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}>DashBoard</NavLink>
        <NavLink to="" className={({isActive, isPending}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}>Apartamentos</NavLink>
        <NavLink to="" className={({isActive, isPending}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}>Prédios</NavLink>
        <NavLink to="/condominios" className={({isActive, isPending}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}>Condomínios</NavLink>
        <NavLink to="" className={({isActive, isPending}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}>Locatários</NavLink>
      </ul>
    </aside>
    <main className="principal">
      <Outlet />
    </main>
    </>
  )
}