import React, { Component } from "react";
import Welcome from "../../components/welcome/index.js";

import "./style.js";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Welcome
          title="Olá!"
          subtitle="Como podemos te ajudar hoje?"
          urlImame="/developer_1.svg"
        />
      </div>
    );
  }
}
