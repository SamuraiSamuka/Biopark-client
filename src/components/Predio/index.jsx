import './Predio.css'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/Ai'

export default function Predio({imagemUrl}) {
  return (
    <div className="predio" style={{backgroundImage: `url(${imagemUrl})`}}>
      <div className="predio__cabecalho">
        <h2>Torre a</h2>
        <h3>Parque da Alvorada</h3>
      </div>
      <div className="predio__corpo">
        <div className="info__legendas">
          <ul className="info__legendas__lista">
            <li className='info__legendas__item'>200 apartamentos</li>
            <li className='info__legendas__item'>20 apartamentos disponíveis</li>
            <li className='info__legendas__item'>Taxa de ocupação: 90%</li>
          </ul>
        </div>
        <div className="predio__comandos">
            <button className='botao'>listar apartamentos</button>
            <AiOutlineEdit />
            <AiOutlineDelete />
        </div>
      </div>
    </div>
  )
}
