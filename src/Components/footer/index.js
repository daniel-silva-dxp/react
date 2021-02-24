import React from "react";

import { Copyrights } from "./style";

const Footer = () => {
  return (
    <Copyrights>
      <div className="container">
        © 2021 - Todos os direitos reservados.{"  "}
        <a href="https://www.danielsilva-dev.com.br/" target="blank">
          Daniel Silva
        </a>
        .
      </div>
    </Copyrights>
  );
};

export default Footer;