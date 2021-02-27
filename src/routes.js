import React from "react";
import { Switch, Route } from "react-router-dom";
import Configuration from "./pages/configuration";
import Home from "./pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/config">
        <Configuration />
      </Route>
    </Switch>
  );
};

export default Routes;
