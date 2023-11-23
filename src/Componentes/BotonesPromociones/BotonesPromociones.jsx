import React from 'react';
import './BotonesPromociones.css'; 

class BotonAlerta extends React.Component {
  alertaCarritoCuidado = () => {
    alert('¡Kit de cuidados agregado al carrito!');
  };

  alertaCarritoComida = () => {
    alert('¡Kit de comida agregado al carrito!');
  };

  alertaCarritoJugueteria = () => {
    alert('¡Kit de jugueteria agregado al carrito!');
  };

  render() {
    return (
      <div className="contenedorBotones">
        <button onClick={this.alertaCarritoCuidado} id="boton1">
          Agregar al carrito
        </button>
        <button onClick={this.alertaCarritoComida} id="boton2">
        Agregar al carrito
        </button>
        <button onClick={this.alertaCarritoJugueteria} id="boton3">
        Agregar al carrito
        </button>
      </div>
    );
  }
}

export default BotonAlerta;
