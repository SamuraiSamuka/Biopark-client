import './ApartamentosLista.css'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/Ai'
import { Form } from 'react-router-dom'

export default function ApartamentosLista({apartamentos}) {
  return (
    apartamentos.length === 0?
    <div className="locatarios-lista">Não há apartamentos cadastrados.</div>
    :
    <div className="apartamento">
        <div className="apartamento__filtros">
          <div className="select-condominio">
            <label htmlFor="select-condominio">Condomínio</label>
            <select name="select-condominio">
              <option value="">todos</option>
              <option value="" >Recanto das flores</option>
              <option value="" >Parque da Alvorada</option>
            </select>
          </div>
          <div className="select-apartamento">
            <label htmlFor="select-apartamento">Apartamento</label>
            <select name="select-apartamento" id="">
              <option value="">Torre a</option>
              <option value="">Torre B</option>
            </select>
          </div>
        </div>
        <table className="apartamento__lista">
            <thead>
              <tr>
                <th>Condomínio</th>
                <th>Prédio</th>
                <th>Área (m²)</th>
                <th>Andar</th>
                <th>Número</th>
                <th>Status</th>
                <th>Valor do Aluguel</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {apartamentos.map(apart => 
                <tr key={apart.id}>
                  <td>{apart.Condominio}</td>
                  <td>{apart.Predio}</td>
                  <td>{apart.Area}</td>
                  <td>{apart.Andar}</td>
                  <td>{apart.Numero}</td>
                  <td>Disponível</td>
                  <td>R$ {apart.Aluguel_valor}</td>
                  <td>
                    <div className="lista-comandos">
                      <button type='button' className='botao'><AiOutlineEye/></button>
                      <Form action={`/apartamentos/${apart.id}/edit`}>
                        <button type='submit' className='botao'><AiOutlineEdit /></button>
                      </Form>
                      <Form
                        method='post'
                        action={`/apartamentos/${apart.id}/destroy`}
                        onSubmit={(event)=>{
                          if(!confirm("Por favor confime que deseja apagar este apartamento. Tudo associado a ele também será deletado.")){
                            event.preventDefault();
                          }
                        }}
                      >
                        <button type='submit' className='botao'><AiOutlineDelete /></button>
                      </Form>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
        </table>
    </div>
  )
}
