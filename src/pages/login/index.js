import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";

import ButtonIcons from "../../components/button-icons";
import FormRegister from "../../components/form-register";
import Form from "../../components/form-login";

import firebase from "../../firebaseConfig";
import { Content, Wrap, Paragraphy } from "./style";

const Login = ({ onReceiveGoogle, setUser }) => {
  const actionLoginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);

    if (result) {
      onReceiveGoogle(result.user);
    } else {
      console.log("ERROR");
    }
  };

  const actionRegisterUser = (data) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        setUser(data);
      });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cadastrar">
          <Content>
            <Wrap>
              <h1>Cadastro</h1>
              <Paragraphy>Crie sua conta, é grátis!</Paragraphy>
              <FormRegister
                onReceiveUser={actionRegisterUser}
                setUser={setUser}
              />
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
                  <ButtonIcons
                    bgColor="#c53e3e"
                    bgColorHover="#eb5f5d"
                    onClick={actionLoginGoogle}
                  >
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
