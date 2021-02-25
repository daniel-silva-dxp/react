import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import ButtonIcons from "../../components/button-icons";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

import { Content, Wrap, Paragraphy } from "./style";
import Form from "../../components/form-login";
import FormRegister from "../../components/form-register";

const Login = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cadastrar">
          <Content>
            <Wrap>
              <h1>Cadastro</h1>
              <Paragraphy>Crie sua conta, é grátis!</Paragraphy>
              <FormRegister />
              <Paragraphy>
                Já tem uma conta? <Link to="/">Faça login</Link>
              </Paragraphy>
            </Wrap>
          </Content>
        </Route>
        <Route exact path="*">
          <Content>
            <Wrap>
              <h1>Log in</h1>
              <Form />
              <Paragraphy>---------- OU ----------</Paragraphy>
              <div className="form-control">
                <span>
                  <ButtonIcons bgColor="#475993" bgColorHover="#55659b">
                    <FaFacebookF />
                  </ButtonIcons>
                </span>
                <span>
                  <ButtonIcons bgColor="#c53e3e" bgColorHover="#eb5f5d">
                    <FaGooglePlusG />
                  </ButtonIcons>
                </span>
              </div>
              <Paragraphy>
                Não tem uma conta? <Link to="cadastrar">Registre-se</Link>
              </Paragraphy>
            </Wrap>
          </Content>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Login;
