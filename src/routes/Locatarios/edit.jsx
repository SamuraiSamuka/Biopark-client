import Banner from '../../components/Banner'
import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import CampoTexto from '../../components/CampoTexto'
import { deleteLocatario, getLocatario, updateLocatario } from '../../serverLocat'

export async function loader({params}) {
    const id = params.locatId
    const locatario = await getLocatario(id)
    return { id, locatario }
}

export async function action({request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    Object.assign(updates, {nulo:false})
    await updateLocatario(params.locatId, updates);
    return redirect("/locatarios")
}

async function deletar(id){
    await deleteLocatario(id);
}

export default function EditLocatario() {
    const navigate = useNavigate();
    const { id, locatario } = useLoaderData();
  return (
    <div className="edit-locatario pagina">
        <Banner
        imagem="https://blog.kenlo.com.br/wp-content/uploads/2020/07/original-10fd4db20743de77d06dd7b14b3aa896-1024x728.jpeg"
        positionImagem={"45%"}
      />
      <main className="container">
        <div className="pagina__cabecalho">
            <h1>Cadastro de locatário</h1>
        </div>
        <div className="pagina__corpo">
            <Form method="post">
                <CampoTexto
                    label="Nome completo"
                    placeholder="Nome completo"
                    name="Nome"
                    className="locatario__form__nome"
                    defaultValue={locatario.Nome}
                />
                <CampoTexto
                    label="Data de nascimento"
                    placeholder="Data de nascimento"
                    name="Nascimento_data"
                    className="locatario__form__nascimento"
                    defaultValue={locatario.Nascimento_data}
                />
                <CampoTexto
                    label="CPF"
                    placeholder="CPF"
                    name="CPF"
                    className="locatario__form__CPF"
                    defaultValue={locatario.CPF}
                />
                <CampoTexto
                    label="Contato"
                    placeholder="Contato"
                    name="Contato"
                    className="locatario__form__contato"
                    defaultValue={locatario.Contato}
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
                            if(locatario.nulo){
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
