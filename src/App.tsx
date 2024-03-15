import { useState } from "react";
import "./App.css";

import logoIMG from "./assets/logo.png";

function App() {
  return (
    <div>
      <main className="container">
        <img src={logoIMG} alt="logo da calculadora" />
        <h1 className="title">Qual a melhor oção?</h1>

        <form className="form">
          <label>Álcool (preço por Litro):</label>
          <input
            className="input"
            type="number"
            placeholder="3,99"
            min="1"
            step="0.01"
            required
          />

          <label>Gasolina (preço por Litro):</label>
          <input
            className="input"
            type="number"
            placeholder="5,91"
            min="1"
            step="0.01"
            required
          />

          <input className="button" type="submit" value="Calcular" />
        </form>
      </main>
    </div>
  );
}

export default App;
