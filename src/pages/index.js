import React, { Component } from "react";
import headset from "../image/headphone.svg";

import "./main.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Daniel Silva!!</h1>
        <img src={headset} alt="" srcset="" />
      </div>
    );
  }
}
