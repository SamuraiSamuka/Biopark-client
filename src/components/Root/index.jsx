import './Root.css'
import { BiBuildingHouse } from 'react-icons/Bi'
import { RxPerson, RxDashboard } from 'react-icons/Rx'
import { BsHouse, BsBuildings, BsBuilding } from 'react-icons/bs'
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
        <NavLink to="/" className={({isActive}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}><RxDashboard/>DashBoard</NavLink>
        <NavLink to="/apartamentos" className={({isActive}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}><BsHouse/>Apartamentos</NavLink>
        <NavLink to="/predios" className={({isActive}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}><BsBuilding/>Prédios</NavLink>
        <NavLink to="/condominios" className={({isActive}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}><BsBuildings/>Condomínios</NavLink>
        <NavLink to="/locatarios" className={({isActive}) => isActive ? "menu__item menu__item-ativo" : "menu__item"}><RxPerson/> Locatários</NavLink>
      </ul>
    </aside>
    <div className="conteudo">
      <Outlet />
    </div>
    </>
  )
}