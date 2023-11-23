import React from "react";
import "./ImagenesPromociones.css";
import cuidado from "../../Imagenes/cuidado.jpg";
import comida from "../../Imagenes/comida.jpg";
import jugueteria from "../../Imagenes/jugueteria.jpg";

function ImagenesPromociones() {
  return (
    <div id="contenedorImagenes">
      <br />
      <br />
      <div id="imagenCuidado">
        <p id="txtImagenCuidado">CUIDADOS</p>
        <img src={cuidado} alt="imagenCuidado" className="aumentoImagen" />
      </div>
      <div id="imagenComida">
        <p id="txtImagenComida">COMIDA</p>
        <img src={comida} alt="imagenComida" className="aumentoImagen" />
      </div>
      <div id="imagenJugueteria">
        <p id="txtImagenJugueteria">JUGUETERÍA</p>
        <img src={jugueteria} alt="imagenJugueteria" className="aumentoImagen" />
      </div>
    </div>
  );
}

export default ImagenesPromociones;
