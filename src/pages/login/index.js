import React from "react";
import Button from "../../components/button-default";
import ButtonIcons from "../../components/button-icons";
import Input from "../../components/input";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

import { Content, Wrap, Paragraphy } from "./style";
import Form from "../../components/form";

const Login = () => {
  return (
    <Content>
      <Wrap>
        <h1>Log in</h1>
        <Form />
        <Paragraphy>OU</Paragraphy>
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
          Não tem uma conta? <a href="www.google.com.br">Registre-se</a>
        </Paragraphy>
      </Wrap>
    </Content>
  );
};

export default Login;
