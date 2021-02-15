import React, { Component } from "react";
import Home from "../pages";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "Carregando",
    };
    var firebaseConfig = {};
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }

    firebase
      .database()
      .ref("token")
      .on("value", (snapshot) => {
        this.setState({
          token: snapshot.val(),
        });
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.token}</h1>
        <Home />
      </div>
    );
  }
}
