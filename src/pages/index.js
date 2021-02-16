import React, { Component } from "react";
import Button from "../components/form/button";
import Header from "../components/header";

import "./main.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="content">
            <Button>Cadastrar</Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
