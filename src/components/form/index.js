import React from "react";
import Input from "../input";

import { FormContent, Paragraphy } from "./styled";
import Button from "../button";

const Form = () => {
  return (
    <form action="" autoComplete="off">
      <FormContent>
        <Input
          type="email"
          name="email"
          placeholder="joe@email.com"
          autoFocus
          required
          autoComplete="off"
        >
          Email
        </Input>
        <Input
          type="password"
          name="password"
          placeholder="Enter your Password"
          required
          autoComplete="off"
        >
          Password
        </Input>
        <Button bgColor="#75dab4" bgColorHover="#88dfbd">
          Sing in
        </Button>
        <Paragraphy>---------- OU ----------</Paragraphy>
        <Button bgColor="#c53e3e" bgColorHover="#eb5f5d">
          Google+
        </Button>
      </FormContent>
    </form>
  );
};

export default Form;
