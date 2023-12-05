import { useOutletContext } from '@remix-run/react'

const TituloHeader = () => {

 
  return (
    <div className='tituloHeader contenedor'>
      <h1 className="titulo">Cliente</h1>
      <p className="descripcion"></p>
    </div>
  )
}

export default TituloHeader