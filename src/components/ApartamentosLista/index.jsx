import './ApartamentosLista.css'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/Ai'

const dadosFake = [
  {
    id: 1,
    numero: 15,
    andar: "2º",
    area: "300 m²",
    locatario: "Fulano da Silva Santos",
    aluguel_valor: 1000.00,
    situacao: "pago"
  },
  {
    id: 2,
    numero: 16,
    andar: "2º",
    area: "300 m²",
    locatario: "Fulano da Silva Santos",
    aluguel_valor: 1000.00,
    situacao: "vencido"
  }
]

export default function ApartamentosLista() {
  return (
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
                <th>Número</th>
                <th>Andar</th>
                <th>Modelo.area</th>
                <th>Locatário</th>
                <th>Valor do Aluguel</th>
                <th>Situação</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dadosFake.map(apart => <tr key={apart.id}>
                <td>{apart.numero}</td>
                <td>{apart.andar}</td>
                <td>{apart.area}</td>
                <td>{apart.locatario}</td>
                <td>R$ {apart.aluguel_valor}</td>
                <td>{apart.situacao}</td>
                <td><div className="comandos">
                  <AiOutlineEdit />
                  <AiOutlineDelete />
                </div></td>
              </tr>
              )}
            </tbody>
        </table>
    </div>
  )
}
