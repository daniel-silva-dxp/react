import React, { Component } from "react";
import { BrowserRouter, Router } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Routes from "../routes";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    );
  }
}
