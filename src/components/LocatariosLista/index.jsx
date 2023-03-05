import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/Ai'
import { Form } from 'react-router-dom'

export default function LocatariosLista({locatarios}) {

  return (

    locatarios.length === 0?
    <div className="locatarios-lista">Não há locatários cadastrados.</div>
    :
    <div className="locatarios-lista">
        <table className="locatarios__lista">
            <thead>
                <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Contato</th>
                <th>nº Apartamento</th>
                <th>Andar</th>
                <th>Prédio</th>
                <th>Condomínio</th>
                <th>Situação</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {locatarios.map(locatario => 
                  <tr key={locatario.id}>
                    <td>{locatario.Nome}</td>
                    <td>{locatario.CPF}</td>
                    <td>{locatario.Contato}</td>
                    <td>20</td>
                    <td>3º</td>
                    <td>Torre A</td>
                    <td>Parque da Alvorada</td>
                    <td>Okay</td>
                    <td>
                      <div className="lista-comandos">
                        <button type='button' className='botao'><AiOutlineEye/></button>
                        <Form action={`/locatarios/${locatario.id}/edit`}>
                          <button type='submit' className='botao'><AiOutlineEdit /></button>
                        </Form>
                        <Form
                          method='post'
                          action={`/locatarios/${locatario.id}/destroy`}
                          onSubmit={(event)=>{
                            if(!confirm("Por favor confime que deseja apagar este locatário.")){
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
