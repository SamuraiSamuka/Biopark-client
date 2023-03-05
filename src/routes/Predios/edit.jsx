import React from 'react'
import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner'
import CampoTexto from '../../components/CampoTexto';
import { deletePredio, getPredio, updatePredio } from '../../serverPred';

export async function loader({params}) {
    const id = params.predId
    const predio = await getPredio(id)
    return { id, predio }
}

export async function action({request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    Object.assign(updates, {nulo:false})
    await updatePredio(params.predId, updates);
    return redirect("/predios")
}

async function deletar(id){
    await deletePredio(id)
}

export default function EditPredio() {
    const navigate = useNavigate();
    const { id, predio } = useLoaderData();
  return (
    <div className="pagina">
        <Banner
            imagem="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2164895:1593024539/image/image.jpg?f=16x9&$p$f=3965716"
            positionImagem="10%"
        />
        <main className="container">
            <div className="pagina__cabecalho">
                <h1>Cadastro de prédio</h1>
            </div>
            <div className="pagin__corpo">
                <Form method='post'>
                    <CampoTexto
                        label="Condominio"
                        placeholder="Condominio"
                        name="Condominio"
                        className="predio__form__condominio"
                        defaultValue={predio.Condominio}
                    />
                    <CampoTexto
                        label="Nome"
                        placeholder="Nome"
                        name="Nome"
                        className="predio__form__nome"
                        defaultValue={predio.Nome}
                    />
                    <CampoTexto
                        label="Nº de pisos"
                        placeholder="Nº de pisos"
                        name="Pisos"
                        className="predio__form__pisos"
                        defaultValue={predio.Pisos}
                    />
                    <CampoTexto
                        label="Identificação adicional"
                        placeholder="Identificação"
                        name="Identificacao"
                        className="predio__form__identificacao"
                        defaultValue={predio.Identificacao}
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
                                if(predio.nulo){
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
