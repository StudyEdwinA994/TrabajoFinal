import React from "react";
import "./ConfirmarCompra.css";

class BotonConfirmar extends React.Component {
  alertaConfirmarCompra = () => {
    alert("Redireccionaremos tu pedido a la pasarela de pagos…");
  };

  render() {
    return (
      <div className="contenedorBotonCompra">
        <button onClick={this.alertaConfirmarCompra} id="botonConfirmarCompra">
          CONFIRMAR COMPRA
        </button>
      </div>
    );
  }
}

export default BotonConfirmar;
