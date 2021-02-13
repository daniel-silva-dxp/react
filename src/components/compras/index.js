import React, { Component } from "react";

import "./main.css";

export class Compras extends Component {
  constructor() {
    super();
    this.clientes = [
      {
        nome: "Daniel",
        idade: 33,
        compras: [
          { produto: "Notebook", preco: 2500 },
          { produto: "Geladeira", preco: 3089 },
          { produto: "Smartphone", preco: 1500 },
          { produto: "Guitarra", preco: 3500 },
        ],
        ativo: true,
      },
      {
        nome: "Flávia",
        idade: 26,
        compras: [
          { produto: "Lavadoura de roupa", preco: 1499.25 },
          { produto: "Geladeira", preco: 3089 },
          { produto: "Smartphone", preco: 1799.99 },
          { produto: "Sofá", preco: 3499 },
        ],
        ativo: false,
      },
    ];
  }

  getCliente(nome, arr) {
    return arr.filter((cliente) => cliente.nome === nome);
  }

  getTotalDeGastos(arrCompas) {
    const total = arrCompas.reduce((acc, compra) => acc + compra.preco, 0);
    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  removerFormatacaoMoeda(valor) {
    const semFormatacao = valor.replace(/[^0-9,]*/g, "").replace(",", ".");
    return semFormatacao;
  }

  render() {
    const [cliente] = this.getCliente("Daniel", this.clientes);
    return (
      <React.Fragment>
        <div>
          <p>
            <strong>Nome: </strong>
            {cliente.nome}
          </p>
          <p>
            <strong>Idade: </strong>
            {cliente.idade}
          </p>
          <p>
            <strong>Situação: </strong>
            <span className={cliente.ativo ? "ativo" : "inativo"}>
              {cliente.ativo ? "Ativo" : "Inativo"}
            </span>
          </p>
          <p>
            <strong>Total de gastos: </strong>
            {this.getTotalDeGastos(cliente.compras)}
          </p>
          {this.removerFormatacaoMoeda(this.getTotalDeGastos(cliente.compras)) >
            10000.0 && <strong>Você está gastando muito!</strong>}
        </div>
      </React.Fragment>
    );
  }
}

export default Compras;
