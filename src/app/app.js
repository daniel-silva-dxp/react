import React, { Component } from "react";
import Home from "../pages";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "Carregando",
      nome: "Carregando",
      idade: "Carregando",
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

    firebase
      .database()
      .ref("users")
      .child(1)
      .on("value", (snapshot) => {
        this.setState({
          nome: snapshot.val().nome,
          idade: snapshot.val().idade,
        });
      });
  }
  render() {
    const { token, nome, idade } = this.state;
    return (
      <div>
        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
        <Home />
      </div>
    );
  }
}
