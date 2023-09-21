import React, { useEffect, useState } from "react";
import { auth, firestore } from "./firebase"; 

function Principal() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        firestore
          .collection("usuarios")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setUsuario(doc.data());
            }
          });
      } else {
        
      }
    });

    return () => {
      unsubscribe(); 
    };
  }, []);

  return (
    <div>
      <h1>Página Principal</h1>
      {usuario ? (
        <div>
          <p>Nome: {usuario.nome}</p>
          <p>Sobrenome: {usuario.sobrenome}</p>
          <p>Data de Nascimento: {usuario.dataNascimento}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Principal;
