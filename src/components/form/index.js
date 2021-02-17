import React, { Component } from "react";
import Button from "./button";
import Input from "./input";
import firebase from "../../firebaseConfig";

import "./main.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.setDataState = this.setDataState.bind(this);
    this.register = this.register.bind(this);
    this.clearInputsValue = this.clearInputsValue.bind(this);
  }

  setDataState(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  register(e) {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password);
    e.preventDefault();
    this.clearInputsValue();
  }

  clearInputsValue() {
    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="form-content">
        <h1>register user</h1>
        <form action="" onSubmit={this.register} method="GET">
          <Input
            type="email"
            name="email"
            id="email"
            handleChange={this.setDataState}
            placeholder="Email"
            value={this.state.email}
          />
          <Input
            type="password"
            name="password"
            id="password"
            handleChange={this.setDataState}
            placeholder="Password"
            value={this.state.password}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    );
  }
}

export default Form;
