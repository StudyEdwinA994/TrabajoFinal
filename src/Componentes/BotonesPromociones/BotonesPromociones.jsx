import React from 'react';
import './BotonesPromociones.css'; 

class BotonAlerta extends React.Component {
  alertaCarrito = () => {
    alert('¡Producto agregado al carrito!');
  };

  render() {
    return (
      <div className="contenedorBotones">
        <button onClick={this.alertaCarrito} id="boton1">
          Agregar al carrito
        </button>
        <button onClick={this.alertaCarrito} id="boton2">
        Agregar al carrito
        </button>
        <button onClick={this.alertaCarrito} id="boton3">
        Agregar al carrito
        </button>
      </div>
    );
  }
}

export default BotonAlerta;
