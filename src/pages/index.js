import React, { Component } from "react";
import Arr from "../components/arrays";
import Compras from "../components/compras";
import Header from "../components/header";

import "./main.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Compras />
          <Arr />
        </div>
      </React.Fragment>
    );
  }
}
