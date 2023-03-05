import React from 'react'
import Banner from '../../components/Banner'
import Condominio from '../../components/Condominio'
import './Condominios.css'
import { Form, redirect, useLoaderData, useSubmit } from 'react-router-dom'
import { createCondominio, getCondominios } from '../../serverCond'

export async function loader() {
  const condominios = await getCondominios();
  return { condominios }
}

export async function action(){
  const condominio = await createCondominio()
  return redirect(`/condominios/${condominio.id}/edit`)
}

export default function Condominios() {
  const { condominios } = useLoaderData();
  return (
    <section className="condominios pagina">
      <Banner
        imagem="https://blog.laredo.com.br/wp-content/uploads/2017/10/voce-sabe-o-que-e-um-condominio-horizontal.jpeg"
      />
      <main className="container">
        <div className="pagina__cabecalho">
          <h1 className='pagina__titulo'>Condomínios</h1>
          <Form role="search" className='pesquisa__form'>
            <input 
              type="search"
              placeholder='Pesquise'
              name='q'
              className='pesquisa__input'
            />
          </Form>
          <Form method="post">
            <button className='botao' type='submit'>Cadastrar condomínio</button>
          </Form>
        </div>
        <div className="condominios__corpo pagina__corpo">
          {condominios.length > 0 ?
          condominios.map(condominio => {
            if(!(condominio.nulo)){
              return (
                <Condominio
                  key={condominio.id}
                  id={condominio.id}
                  titulo={condominio.Nome}
                  endereco={`${condominio.Logradouro}, nº ${condominio.Numero}, ${condominio.Cidade}-${condominio.UF}`}
                  imagemUrl="https://direcional.com.br/wp-content/uploads/2021/12/Acesso_Conquista-Maria-Paula_direcional.jpg"
                >
                </Condominio>
            )}}
          )
          :"Ainda não há condomínios cadastrados."}
        </div>
      </main>
    </section>
  )
}
