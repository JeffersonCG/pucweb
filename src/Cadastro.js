import React, { useState } from "react";
import { auth, firestore } from "./firebase"; 

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const handleCadastro = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        senha
      );

      const userUID = userCredential.user.uid;

      await firestore.collection("usuarios").doc(userUID).set({
        nome,
        sobrenome,
        dataNascimento,
      });

      
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
    }
  };

  return (
    <div>
      <h1>Página de Cadastro</h1>
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
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Data de Nascimento"
        onChange={(e) => setDataNascimento(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;
