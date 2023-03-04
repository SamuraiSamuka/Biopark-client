import Banner from "../../components/Banner"
import LocatariosLista from "../../components/LocatariosLista"

export default function Locatarios() {
  return (
    <div className="locatarios">
      <Banner
        imagem="https://blog.kenlo.com.br/wp-content/uploads/2020/07/original-10fd4db20743de77d06dd7b14b3aa896-1024x728.jpeg"
        positionImagem={"45%"}
      />
      <main className="container">
        <div className="pagina__cabecalho"></div>
        <div className="pagina__corpo">
          <LocatariosLista/>
        </div>
      </main>
    </div>
  )
}
