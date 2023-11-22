import React from "react";
import './ImagenesPromociones.css';
import cuidado from '../../Imagenes/cuidado.jpg'
import comida from '../../Imagenes/comida.jpg'
import jugueteria from '../../Imagenes/jugueteria.jpg'


function ImagenesPromociones () {
    return (
        <div id="contenedorImagenes">
            <div id="imagenCuidado">
                <img src={cuidado} alt="imagenCuidado" />
            </div>
            <div id="imagenComida">
                <img src={comida} alt="imagenComida" />
            </div>
            <div id="imagenJugueteria">
                <img src={jugueteria} alt="imagenJugeteria" />
            </div>
        </div>
    );
}

export default ImagenesPromociones;