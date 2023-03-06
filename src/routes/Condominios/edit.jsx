import axios from "axios"
import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom"
import Banner from "../../components/Banner"
import CampoTexto from "../../components/CampoTexto"
import { deleteCondominio, getCondominio, updateCondominio } from "../../serverCond"

export async function loader({params}) {
    const id = params.condId
    const condominio = await (await axios.get(`http://localhost:3030/condominios/${id}`)).data
    return { id, condominio }
}

export async function action({request, params}) {
    const id = params.condId
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const condominio = await (await axios.put(`http://localhost:3030/condominios/${id}`, {nome: updates.Nome, uf: updates.UF, cidade: updates.Cidade, bairro: updates.Bairro, logradouro: updates.Logradouro, numero: updates.Numero})).data
    return redirect("/condominios")
}

async function deletar(id){
    await deleteCondominio(id)
}

export default function EditCondominio() {
    const navigate = useNavigate();
    const { id, condominio } = useLoaderData();
  return (
    <div className="edit-condominio pagina">
        <Banner
            imagem="https://blog.laredo.com.br/wp-content/uploads/2017/10/voce-sabe-o-que-e-um-condominio-horizontal.jpeg"
        />
        <main className="container">
            <div className="pagina__cabecalho">
                <h1>Cadastro de condomínio</h1>
            </div>
            <div className="pagina__corpo">
                <Form method="post">
                    <CampoTexto
                        label="Nome do condomínio"
                        placeholder="Nome do condomínio"
                        name="Nome"
                        className="condominio__form__nome"
                        defaultValue={condominio.nome}
                    />
                    <div className="endereco">
                        <CampoTexto
                            label="UF"
                            placeholder="UF"
                            name="UF"
                            className="condominio__form__UF"
                            defaultValue={condominio.uf}
                        />
                        <CampoTexto
                            label="Cidade"
                            placeholder="Cidade"
                            name="Cidade"
                            className="condominio__form__cidade"
                            defaultValue={condominio.cidade}
                        />
                        <CampoTexto
                            label="Bairro"
                            placeholder="Bairro"
                            name="Bairro"
                            className="condominio__form__bairro"
                            defaultValue={condominio.bairro}
                        />
                        <CampoTexto
                            label="Logradouro"
                            placeholder="Logradouro"
                            name="Logradouro"
                            className="condominio__form__logradouro"
                            defaultValue={condominio.logradouro}
                        />
                        <CampoTexto
                            label="Numero"
                            placeholder="Numero"
                            name="Numero"
                            className="condominio__form__numero"
                            defaultValue={condominio.numero}
                        />
                    </div>
                    <div className="editComandos">
                        <button 
                            type="submit"
                            className="botao"
                        >Salvar</button>
                        <button 
                            type="button"
                            className="botao"
                            onClick={() => {
                                if(condominio.nome = "_"){
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
