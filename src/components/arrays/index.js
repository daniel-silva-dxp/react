import React from "react";

import "./main.css";

const Arr = () => {
  const livros = [
    { id: 1, nome: "A Game of Thrones", ano: 1996 },
    { id: 2, nome: "A Clash of Kings", ano: 1998 },
    { id: 3, nome: "A Storm of Swords", ano: 200 },
  ];

  return (
    <React.Fragment>
      <ul>
        {livros.map(({ id, nome, ano }) => {
          return (
            <li key={id}>
              <strong>Livro:</strong> {nome} - <strong>Ano:</strong> {ano}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Arr;
