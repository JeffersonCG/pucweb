import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>Tela Inicial</h1>
        <p>Escolha uma ação:</p>
        <ul>
          <li>
            <Link to="/Cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Principal">Principal</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default App;
