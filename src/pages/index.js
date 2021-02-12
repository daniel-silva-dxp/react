import React, { Component } from "react";
import Header from "../components/header";

import "./main.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container"></div>
      </React.Fragment>
    );
  }
}
