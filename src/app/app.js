import React, { Component } from "react";
import Home from "../pages";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "Carregando",
      idade: "Carregando",
      inputValue: "",
    };

    this.cadastrar = this.cadastrar.bind(this);

    var firebaseConfig = {};
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }

    // Remove uma database
    firebase.database().ref("token").remove();

    firebase
      .database()
      .ref("users")
      .child(1)
      .once("value")
      .then((snapshot) => {
        this.setState({
          nome: snapshot.val().nome,
          idade: snapshot.val().idade,
        });
      });
  }

  cadastrar(e) {
    // Inserir/Editar
    firebase.database().ref("token2").set(this.state.inputValue);
    e.preventDefault();
  }
  render() {
    const { nome, idade, inputValue } = this.state;
    return (
      <div>
        <Home />
        <br />
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
        <form action="" onSubmit={this.cadastrar}>
          <label htmlFor="token">Token: </label>
          <input
            type="text"
            name="token"
            id="token"
            value={inputValue}
            onChange={(e) => {
              this.setState({
                inputValue: e.target.value,
              });
            }}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}
