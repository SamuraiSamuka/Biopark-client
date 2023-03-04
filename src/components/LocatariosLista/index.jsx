import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/Ai'

export default function LocatariosLista() {

    const dadosFake = [
        {
            id: 1,
            locatario: "Fulano da Silva Santos",
            condominio: "Recanto das flores",
            predio: "torre a",
            andar: "2º",
            numero: 16,
            aluguel_valor: 1000.00,
            situacao: "vencido"
          },
        {
          id: 2,
          locatario: "Fulano da Silva Santos",
          condominio: "Recanto das flores",
          predio: "torre a",
          andar: "2º",
          numero: 16,
          aluguel_valor: 1000.00,
          situacao: "vencido"
        }
      ]

  return (

    dadosFake.length === 0?
    <div className="locatarios-lista">Não há locatários cadastrados.</div>
    :
    <div className="locatarios-lista">
        <table className="apartamento__lista">
            <thead>
                <tr>
                <th>Locatário</th>
                <th>Condominio</th>
                <th>Predio</th>
                <th>Andar</th>
                <th>Número</th>
                <th>Valor do Aluguel</th>
                <th>Situação</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {dadosFake.map(apart => <tr key={apart.id}>
                <td>{apart.locatario}</td>
                <td>{apart.condominio}</td>
                <td>{apart.predio}</td>
                <td>{apart.andar}</td>
                <td>{apart.numero}</td>
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
