import React from "react";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "../components/sidebar";
import Routes from "../routes";

import firebase from "../firebaseConfig";
import Loginpage from "../pages/login";

const App = () => {
  return (
    // <Loginpage />
    <BrowserRouter>
      <Sidebar />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
