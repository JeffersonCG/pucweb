import React, { useState } from "react";
import { auth } from "./firebase"; 

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, senha);

      
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div>
      <h1>Página de Login</h1>
      <input
        type="text"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
