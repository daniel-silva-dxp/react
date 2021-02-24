import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Configuracoes from "./pages/configuracoes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/configuracoes">
        <Configuracoes />
      </Route>
    </Switch>
  );
};

export default Routes;
