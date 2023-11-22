import React from "react";
import "./Footer.css";
import gato from "../../Imagenes/gato.png";

function Footer() {
  return (
    <footer className="footer">
      <div id="imagenFooter">
        <div id="imagenInternaGato">
          <img src={gato} alt="footerGato" />
        </div>
      </div>
      <p id="textoFooter">Siguenos en nuestras redes sociales</p>
      <p id="textoFacebook">Facebook: Tienda virtual de mascostas</p>
      <p id="textoInstagram">Instagram: Tiendavirtualdemascotas</p>
      <p id="textoTwitter">Twitter: @Tiendavirtualdemascotas</p>
    </footer>
  );
}
export default Footer;
