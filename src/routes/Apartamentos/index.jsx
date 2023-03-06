import Banner from "../../components/Banner"
import { Form, redirect, useLoaderData } from "react-router-dom"
import ApartamentosLista from "../../components/ApartamentosLista"
import { createApartamento, getApartamentos } from "../../serverApart"
import axios from "axios"

export async function loader(){
  // const condominios = await (await axios.get("http://localhost:3030/condominios")).data
  const apartamentos = await getApartamentos();
  return { apartamentos }
}

export async function action(){
  const apartamento = await createApartamento();
  return redirect(`/apartamentos/${apartamento.id}/edit`)
}

export default function Apartamentos() {
  const { apartamentos } = useLoaderData();
  return (
    <div className="apartamentos pagina">
      <Banner
        imagem="https://media.agenteimovel.com.br/images/8/84/8476934/high/20221207130312_evenjoa03detalhe-fachada-voof00v2.jpg"
        positionImagem="15%"
      />
      <main className="container">
        <div className="pagina__cabecalho">
          <h1 className="pagina__titulo">Apartamentos</h1>
          <Form role="search" className='pesquisa__form'>
              <input 
                type="search"
                placeholder='Pesquise'
                name='q'
                className='pesquisa__input'
              />
            </Form>
            <Form method="post">
              <button className='botao' type='submit'>Cadastrar apartamento</button>
            </Form>
        </div>
        <div className="pagina__corpo">
          <ApartamentosLista
            apartamentos={apartamentos}/>
        </div>
      </main>
    </div>
  )
}
