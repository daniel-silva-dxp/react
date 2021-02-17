import React, { Component } from "react";
import Form from "../components/form";

import "./main.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="content">
            <Form />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
