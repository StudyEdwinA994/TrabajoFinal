import React from "react";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Introduccion from "./Componentes/Introduccion/Introduccion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Introduccion />
      </header>
    </div>
  );
}

export default App;
