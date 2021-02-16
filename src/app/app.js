import React, { Component } from "react";
import Home from "../pages";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
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
    // firebase.database().ref("token").remove();

    // firebase
    //   .database()
    //   .ref("users")
    //   .child(1)
    //   .once("value")
    //   .then((snapshot) => {
    //     this.setState({
    //       nome: snapshot.val().nome,
    //       idade: snapshot.val().idade,
    //     });
    //   });

    firebase
      .database()
      .ref("users")
      .on("value", (snapshot) => {
        const arr = [];
        snapshot.forEach((user) => {
          const item = {
            id: user.key,
            nome: user.val().nome,
            idade: user.val().idade,
          };
          arr.push(item);
        });
        this.setState({
          users: arr,
        });
      });
  }

  cadastrar(e) {
    // Inserir/Editar
    e.preventDefault();
    const user = firebase.database().ref("users");
    const key = user.push().key;
    user.child(key).set({
      nome: this.state.inputNome,
      idade: this.state.inputIdade,
    });
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <Home />
        <br />
        <ul>
          {users.map(({ nome, idade, id }) => {
            return (
              <li key={id}>
                Nome: {nome} - Idade: {idade}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
