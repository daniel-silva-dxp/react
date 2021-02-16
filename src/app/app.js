import React, { Component } from "react";
import Home from "../pages";
import firebase from "../firebaseConfig";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
