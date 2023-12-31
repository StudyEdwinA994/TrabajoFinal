import React from "react";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Introduccion from "./Componentes/Introduccion/Introduccion";
import Footer from "./Componentes/Footer/Footer";
import Promociones from "./Componentes/Promociones/Promociones";
import ImagenesPromociones from "./Componentes/ImagenesPromociones/ImagenesPromociones";
import BotonesPromociones from "./Componentes/BotonesPromociones/BotonesPromociones";
import IncrementoDecremento from "./Componentes/BotonesIncrementoDecremento/IncrementoDecremento";
import BotonConfirmar from "./Componentes/ConfirmarCompra/ConfirmarCompra";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Introduccion />
        <Promociones />
        <ImagenesPromociones />
        <BotonesPromociones />
        <IncrementoDecremento />
        <BotonConfirmar />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
