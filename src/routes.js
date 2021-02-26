import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Configuracoes from "./pages/configuracoes";

const Routes = ({ ...props }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home {...props} />
      </Route>
      <Route path="/configuracoes">
        <Configuracoes />
      </Route>
    </Switch>
  );
};

export default Routes;
