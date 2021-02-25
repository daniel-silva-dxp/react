import React from "react";
import Button from "../button-default";
import Input from "../input";

import { FormContent } from "./style";

const Form = () => {
  return (
    <form action="">
      <FormContent>
        <Input type="email" placeholder="E-mail" autoFocus />
        <Input type="password" placeholder="Senha" />
        <Button bgColor="#75dab4" bgColorHover="#88dfbd">
          Login
        </Button>
      </FormContent>
    </form>
  );
};

export default Form;
