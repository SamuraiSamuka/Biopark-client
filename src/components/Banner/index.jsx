import './Banner.css'

export default function Banner({titulo, imagem, positionImagem}) {
  return (
    <div className="banner" style={{backgroundImage: `url(${imagem})`, backgroundPosition: `0% ${positionImagem}`}}>
        <h1>{titulo}</h1>
    </div>
  )
}
