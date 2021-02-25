import React from "react";
import Button from "../button-default";
import Input from "../input";

import { FormContent } from "./style";

const FormRegister = () => {
  return (
    <form action="">
      <FormContent>
        <Input type="text" placeholder="Nome" autoFocus />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Button bgColor="#75dab4" bgColorHover="#88dfbd">
          Cadastrar
        </Button>
      </FormContent>
    </form>
  );
};

export default FormRegister;
