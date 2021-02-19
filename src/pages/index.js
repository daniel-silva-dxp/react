import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import "./main.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}
