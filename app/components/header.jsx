

import Navegacion from './navegacion'
import MenuBar from './menuBar'
import TituloHeader from './tiuloHeader'
import Logo from './logo'


const Header = () => {
    return (
        <header className="header">
            <div className="contenedor contenido-header">
                <Logo />
                <Navegacion />
               <div className="menuBar">
                 {/* <MenuBar /> */}
               </div>
            </div>


            <div className="titulo-header">
                <TituloHeader />
            </div>
        </header>
    )
}

export default Header