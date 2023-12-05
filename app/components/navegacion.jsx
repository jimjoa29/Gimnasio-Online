import { Link, useLocation } from "@remix-run/react";

const Navegacion = () => {
  const { pathname } = useLocation()
  return (
    <>
      <nav className="navegacion enlace">
        <Link className={pathname === "/" ? "active" : ""}>Inicio</Link>
        <Link className={pathname === "/nosotros" ? "active" : ""} to="nosotros">Nosotros</Link>
        <Link className={pathname === "/clases" ? "active" : ""} to="/clases">Clases</Link>
        <Link className={pathname === "/tienda" ? "active" : ""} to='tienda'>Tienda</Link>
        <Link className={pathname === "/entrenadores" ? "active" : ""} to="/entrenadores" > Entrenadores </Link>
        <Link className={pathname === "/blog" ? "active" : ""} to="/blog">Blog</Link>
      </nav>
      <div className="registro">
        <Link className={pathname === "/registro" ? "active" : ""} to="/registro">Registro</Link>
        <Link className={pathname === "/login" ? "active" : ""} to="/login">Login</Link>
      </div>

      <div className="contenedor-carrito">
        <Link className={pathname === "/carrito" ? "active" : ""} to="/carrito">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cantidad-carrito">2</span>
        </Link>
      </div>

      <div className="bar enl">
        <i className="fa-solid fa-bars" ></i>
      </div>
    </>
  );
};
export default Navegacion;
