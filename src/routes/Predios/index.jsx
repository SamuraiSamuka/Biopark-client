import Banner from "../../components/Banner"
import { Form, redirect, useLoaderData } from "react-router-dom"
import Predio from "../../components/Predio"
import './Predios.css'
import axios from "axios"

export async function loader() {
  const predios = await (await axios.get("http://localhost:3030/predios")).data
  const condominios = await (await axios.get("http://localhost:3030/condominios")).data
  return { predios, condominios }
}

export async function action(){
  const predio = await (await axios.post("http://localhost:3030/predios", {nome: "_", condominioid: 0 , pisos: "_"})).data
  return redirect(`/predios/${predio.id}/edit`)
}

export default function Predios() {
  const { predios, condominios } = useLoaderData();
  console.log(predios, condominios)
  return (
    <div className="predios pagina">
      <Banner
        imagem="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2164895:1593024539/image/image.jpg?f=16x9&$p$f=3965716"
        positionImagem="10%"
      />
      <main className="container">
        <div className="pagina__cabecalho">
          <h1 className="pagina__titulo">Prédios</h1>
          <Form role="search" className='pesquisa__form'>
              <input 
                type="search"
                placeholder='Pesquise'
                name='q'
                className='pesquisa__input'
              />
            </Form>
            <Form method="post">
              <button className='botao' type='submit'>Cadastrar prédio</button>
            </Form>
        </div>
        <div className="pagina__corpo">
          {predios.length > 0 ?
          predios.map(predio => {
            console.log((condominios.find(c => c.id === predio.condominioid)))
            if(!(predio.nome === "_")) {
              return (
                <Predio
                  key={predio.id}
                  id={predio.id}
                  nome={predio.nome}
                  // condominio={}
                  condominioId={predio.condominioid}
                  pisos={predio.pisos}
                  imagemUrl="https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/09/63938-418x235.jpg"
                >
                </Predio>
              )
            }
          })
          :"Ainda não há prédios cadastrados."}
        </div>
    </main>
    </div>
  )
}
