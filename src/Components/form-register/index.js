import React from "react";
import Button from "../button-default";
import Input from "../input";

import { FormContent } from "./style";

const FormRegister = ({ onReceiveUser, setUser }) => {
  const [userInput, setUserInput] = React.useState(null);

  const actionSetUserInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const actionCreateUser = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onReceiveUser(userInput);
    setUserInput(null);
  };
  return (
    <form method="GET" onSubmit={actionCreateUser}>
      <FormContent>
        <Input
          type="text"
          name="nome"
          placeholder="Nome"
          autoFocus
          onChange={actionSetUserInput}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          onChange={actionSetUserInput}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          required
          onChange={actionSetUserInput}
        />
        <Button bgColor="#75dab4" bgColorHover="#88dfbd">
          Cadastrar
        </Button>
      </FormContent>
    </form>
  );
};

export default FormRegister;
