import React, { Component } from "react";
import Welcome from "../../components/welcome/index.js";

import "./style.js";

export default class Configuracoes extends Component {
  render() {
    return (
      <div className="container">
        <Welcome
          title="Configurações"
          subtitle="Realize aqui suas configurações."
          urlImame="/developer_2.svg"
        />
      </div>
    );
  }
}
