import './Condominio.css'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/Ai'

export default function Condominio({titulo, endereco, children, imagemUrl}) {
  return (
    <div className="condominio" style={{backgroundImage: `url(${imagemUrl})`}}>
      <div className="condominio__cabecalho">
        <h2 className='condominio__titulo'>{titulo}</h2>
        <h4 className="condominio__endereco">{endereco}</h4>
      </div>
      <div className="comandos">
        <AiOutlineEdit />
        <AiOutlineDelete />
      </div>
      <div className="condominio__body">
        <div className="info__legendas">
          <ul className="info__legendas__lista">
            <li className='info__legendas__item'>3 prédios</li>
            <li className='info__legendas__item'>200 apartamentos</li>
            <li className='info__legendas__item'>Taxa de ocupação: 90%</li>
          </ul>
          <ul className='info__legendas__lista'>
            <li className='info__legendas__item'>Torre a</li>
            <li className='info__legendas__item'>Torre b</li>
            <li className='info__legendas__item'>Torre c</li>
          </ul>
        </div>
        {children}
      </div>
    </div>
  )
}
