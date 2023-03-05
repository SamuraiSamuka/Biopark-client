import Banner from "../../components/Banner"
import LocatariosLista from "../../components/LocatariosLista"
import { Form, redirect, useLoaderData } from "react-router-dom"
import { createLocatario, getLocatarios } from "../../serverLocat"


export async function loader(){
  const locatarios = await getLocatarios();
  return { locatarios }
}

export async function action(){
  const locatario = await createLocatario();
  return redirect(`/locatarios/${locatario.id}/edit`)
}

export default function Locatarios() {
  const { locatarios } = useLoaderData();
  return (
    <div className="locatarios">
      <Banner
        imagem="https://blog.kenlo.com.br/wp-content/uploads/2020/07/original-10fd4db20743de77d06dd7b14b3aa896-1024x728.jpeg"
        positionImagem={"45%"}
      />
      <main className="container">
      <div className="pagina__cabecalho">
          <h1 className='pagina__titulo'>Locatarios</h1>
          <Form role="search" className='pesquisa__form'>
            <input 
              type="search"
              placeholder='Pesquise'
              name='q'
              className='pesquisa__input'
            />
          </Form>
          <Form method="post">
            <button className='botao' type='submit'>Cadastrar locatário</button>
          </Form>
        </div>

        <div className="pagina__corpo">
          <LocatariosLista locatarios={locatarios}/>
        </div>
      </main>
    </div>
  )
}
