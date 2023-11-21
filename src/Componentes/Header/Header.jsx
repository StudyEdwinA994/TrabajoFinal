import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-ppal">
      <nav>
        <ul>
          <li>
            <a href="http://localhost:3000/">Inicio</a>
          </li>
          <li>
            <a href="#">Contáctanos</a>
          </li>
          <li>
            <a href="#">Adopta (API)</a>
          </li>
          <li>
            <a href="#">Ubicación</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
