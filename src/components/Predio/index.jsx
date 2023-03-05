import './Predio.css'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/Ai'
import { Form } from 'react-router-dom';

export default function Predio({imagemUrl, nome, condominio, id}) {
  return (
    <div className="predio" style={{backgroundImage: `url(${imagemUrl})`}}>
      <div className="predio__cabecalho">
        <h2>{nome}</h2>
        <h3>{condominio}</h3>
      </div>
      <div className="predio__corpo">
        <div className="info__legendas">
          <ul className="info__legendas__lista">
            <li className='info__legendas__item'>200 apartamentos</li>
            <li className='info__legendas__item'>20 apartamentos disponíveis</li>
            <li className='info__legendas__item'>Taxa de ocupação: 90%</li>
          </ul>
        </div>
        <div className="predio__comandos comandos">
        <button className='botao'>Ver apartamentos</button>
          <Form action={`/predios/${id}/edit`}>
            <button type='submit' className='botao'><AiOutlineEdit /></button>
          </Form>
          <Form
            method='post'
            action={`/predios/${id}/destroy`}
            onSubmit={(event)=>{
              if(!confirm("Por favor confime que deseja apagar este prédio.")){
                event.preventDefault();
              }
            }}
          >
            <button type='submit' className='botao'><AiOutlineDelete /></button>
          </Form>
        </div>
      </div>
    </div>
  )
}
