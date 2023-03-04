import Banner from "../../components/Banner"
import { Form } from "react-router-dom"
import Predio from "../../components/Predio"
import './Predios.css'

export default function Predios() {
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
          <Predio
            imagemUrl="https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/09/63938-418x235.jpg"
          />
        </div>
    </main>
    </div>
  )
}
