import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom"
import Banner from "../../components/Banner"
import CampoTexto from "../../components/CampoTexto"
import { deleteApartamento, getApartamento, updateApartamento } from "../../serverApart";



export async function loader({params}) {
    const id = params.apartId
    const apartamento = await getApartamento(id)
    return { id, apartamento }
}

export async function action({request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    Object.assign(updates, {nulo:false})
    await updateApartamento(params.apartId, updates);
    return redirect("/apartamentos")
}

async function deletar(id){
    await deleteApartamento(id)
}

export default function EditApartamento() {
    const { id, apartamento } = useLoaderData();
    const navigate = useNavigate();
  return (
    <div className="edit-apartamento pagina">
        <Banner
            imagem="https://media.agenteimovel.com.br/images/8/84/8476934/high/20221207130312_evenjoa03detalhe-fachada-voof00v2.jpg"
            positionImagem="15%"
        />
        <main className="container">
            <div className="pagina__cabecalho">
                <h1>Cadastro de apartamento</h1>
            </div>
            <div className="pagina__corpo">
                <Form method="post">
                    <CampoTexto
                        label="Condominio"
                        placeholder="Condominio"
                        name="Condominio"
                        className="apartamento__form__condominio"
                        defaultValue={apartamento.Condominio}
                    />
                    <CampoTexto
                        label="Predio"
                        placeholder="Predio"
                        name="Predio"
                        className="apartamento__form__predio"
                        defaultValue={apartamento.Predio}
                    />
                    <CampoTexto
                        label="Área do apartamento"
                        placeholder="Área do apartamento"
                        name="Area"
                        className="apartamento__form__area"
                        defaultValue={apartamento.Area}
                    />
                    <CampoTexto
                        label="Andar"
                        placeholder="Andar"
                        name="Andar"
                        className="apartamento__form__andar"
                        defaultValue={apartamento.Andar}
                    />
                    <CampoTexto
                        label="Numero"
                        placeholder="Numero"
                        name="Numero"
                        className="apartamento__form__numero"
                        defaultValue={apartamento.Numero}
                    />
                    <CampoTexto
                        label="Valor do aluguel"
                        placeholder="Valor do aluguel"
                        name="Aluguel_valor"
                        className="apartamento__form__aluguel"
                        defaultValue={apartamento.Aluguel_valor}
                    />
                    <div className="editComandos">
                        <button 
                            type="submit"
                            className="botao"
                        >Salvar</button>
                        <button 
                            type="button"
                            className="botao"
                            onClick={() => {
                                if(apartamento.nulo){
                                    deletar(id)
                                }
                                navigate(-1);
                            }}
                        >Cancelar</button>
                    </div>
                </Form>
            </div>
        </main>
    </div>
  )
}
