import React from "react";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Introduccion from "./Componentes/Introduccion/Introduccion";
import Footer from "./Componentes/Footer/Footer";
import Promociones from "./Componentes/Promociones/Promociones";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Introduccion />
        <Promociones />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
