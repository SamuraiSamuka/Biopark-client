import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom"
import Banner from "../../components/Banner"
import CampoTexto from "../../components/CampoTexto"
import { deleteCondominio, getCondominio, updateCondominio } from "../../serverCond"

export async function loader({params}) {
    const id = params.condId
    const condominio = await getCondominio(id)
    return { id, condominio }
}

export async function action({request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateCondominio(params.condId, updates);
    return redirect("/condominios")
}

async function deletar(id){
    console.log(await deleteCondominio(id))
}

export default function EditCondominio() {
    const navigate = useNavigate();
    const { id, condominio } = useLoaderData();
    console.log(id, condominio)
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
                    />
                    <div className="endereco">
                        <CampoTexto
                            label="Estado"
                            placeholder="Estado"
                            name="Estado"
                            className="condominio__form__estado"
                        />
                        <CampoTexto
                            label="Cidade"
                            placeholder="Cidade"
                            name="Cidade"
                            className="condominio__form__cidade"
                        />
                        <CampoTexto
                            label="Bairro"
                            placeholder="Bairro"
                            name="Bairro"
                            className="condominio__form__bairro"
                        />
                        <CampoTexto
                            label="Logradouro"
                            placeholder="Logradouro"
                            name="Logradouro"
                            className="condominio__form__logradouro"
                        />
                        <CampoTexto
                            label="Numero"
                            placeholder="Numero"
                            name="Numero"
                            className="condominio__form__numero"
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
                                if(condominio.nulo){
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
