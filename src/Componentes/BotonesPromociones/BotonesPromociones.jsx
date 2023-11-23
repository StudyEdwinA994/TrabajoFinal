import React from "react";
import "./BotonesPromociones.css";

class BotonAlerta extends React.Component {
  alertaCarritoCuidado = () => {
    alert("¡Kit de cuidados agregado al carrito!");
  };

  alertaCarritoComida = () => {
    alert("¡Kit de comida agregado al carrito!");
  };

  alertaCarritoJugueteria = () => {
    alert("¡Kit de jugueteria agregado al carrito!");
  };

  render() {
    return (
      <div className="contenedorBotones">
        <button onClick={this.alertaCarritoCuidado} id="botonCuidado">
          Agregar al carrito
        </button>
        <button onClick={this.alertaCarritoComida} id="botonComida">
          Agregar al carrito
        </button>
        <button onClick={this.alertaCarritoJugueteria} id="botonJugueteria">
          Agregar al carrito
        </button>
      </div>
    );
  }
}

export default BotonAlerta;
