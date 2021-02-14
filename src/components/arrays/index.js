import React from "react";

import "./main.css";

const Arr = () => {
  const livros = [
    { id: 1, nome: "A Game of Thrones", ano: 1996 },
    { id: 2, nome: "A Clash of Kings", ano: 1998 },
    { id: 1, nome: "A Storm of Swords", ano: 200 },
  ];

  return (
    <ul>
      {livros.map(({ id, nome, ano }) => {
        return (
          <li key={id}>
            <strong>Livro:</strong> {nome} - <strong>Ano:</strong> {ano}
          </li>
        );
      })}
    </ul>
  );
};

export default Arr;
