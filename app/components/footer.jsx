import { Form, Link } from "@remix-run/react";

import logoTipo from "../../public/img/logo-light.webp";
import NavegacionFooter from "./navegacionFooter";
import imgDireccion from "../../public/img/1.webp";
import imgTelefono from "../../public/img/2.webp";
import imgWeb from "../../public/img/3.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor contenido-footer">
        <div className="horario">
          <Link to="/">
            <img src={logoTipo} alt="logo" />
          </Link>
          <p>
            Zymzoo winner dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna
          </p>
          <h5>Opening time</h5>
          <p>Monday - Friday: 7 am to 10 pm</p>
          <p>Saturday - Sunday: 9 am to 10 pm</p>
        </div>
        <div className="navegacion-footer ">
          <h5>Navegación</h5>
          <NavegacionFooter />
        </div>
        <div className="contacto ">
          <h5>Contacto</h5>
          <div className="direccion">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              252B, Central Street Main road Belix Tower, New York, USA Phone
            </p>
          </div>
          <div className="telefono ">
            <i className="fa-solid fa-phone"></i>
            <div className="telefono-numero">
              <p>09 (123) 456 789</p>
              <p>09 (987) 654 321</p>
            </div>
          </div>
          <div className="web">
            <i className="fa-solid fa-globe"></i>
            <div className="web-telefono">
              <p>info@exaple.com</p>
              <p>www.exaple.com</p>
            </div>

          </div>
        </div>
        <div className="suscribete ">
          <div className="suscribete">
            <h5>Suscribete</h5>
            <p>
              Subscribe our Newsletter and gates latest updates of offers,
              productsa and promotions from every week we provide
            </p>
          </div>

          <Form className="form">
            <input type="email" />
            <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
          </Form>

          <div className="sociales">
            <a className="enlaces redes" href="#"><i className="fa-brands fa-square-instagram"></i></a>
            <a className="enlaces redes" href="#"><i className="fa-brands fa-square-facebook"></i></a>
            <a className="enlaces redes" href="#"><i className="fa-brands fa-square-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          {" "}
          &copy; 2023 Todos los derechos reservados a{" "}
          <span>c15-35-n-java-react</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
