import React, { useState } from 'react';
import './BotonesIncrementoDecremento.css'; 


const IncrementoDecremento = () => {
  const [count1, contadorCuidados] = useState(0);
  const [count2, contadorComida] = useState(0);
  const [count3, contadorJugueteria] = useState(0);

  const incrementarProducto = (counter, setCounter) => {
    setCounter(counter + 1);
  };

  const decrementarProducto = (counter, setCounter) => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className='contenedorIncrementoDecremento'>
      <div >
        <button onClick={() => incrementarProducto(count1, contadorCuidados)} id='botonMasCuidados'>+</button>
        <span id='textoCuidados'>{count1}</span>
        <button onClick={() => decrementarProducto(count1, contadorCuidados)} id='botonMenosCuidados'>-</button>
      </div>

      <div>
        <button onClick={() => incrementarProducto(count2, contadorComida)}id='botonMasComida'>+</button>
        <span id='textoComida'>{count2}</span>
        <button onClick={() => decrementarProducto(count2, contadorComida)} id='botonMenosComida'>-</button>
      </div>

      <div>
        <button onClick={() => incrementarProducto(count3, contadorJugueteria)} id='botonMasJugueteria'>+</button>
        <span id='textoJugueteria'>{count3}</span>
        <button onClick={() => decrementarProducto(count3, contadorJugueteria)} id='botonMenosJugueteria'>-</button>
      </div>
    </div>
  );
};

export default IncrementoDecremento;
