import React, { Component } from "react";
import Button from "./button";
import Input from "./input";

import "./main.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form action="">
        <Input
          type="text"
          name="name"
          id="name"
          handleChange={this.handleChange}
          placeholder="Name"
          value={this.state.name}
        />
        <Input
          type="email"
          name="email"
          id="email"
          handleChange={this.handleChange}
          placeholder="Email"
          value={this.state.email}
        />
        <Input
          type="password"
          name="password"
          id="password"
          handleChange={this.handleChange}
          placeholder="Password"
          value={this.state.password}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    );
  }
}

export default Form;
