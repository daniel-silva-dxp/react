import React from "react";
import { WelcomeContent } from "./style";

const Welcome = ({ title, subtitle, urlImame }) => {
  return (
    <WelcomeContent>
      <div className="title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="wrap-img">
        <img src={urlImame} alt="Imagem Developer" title="Developer" />
      </div>
    </WelcomeContent>
  );
};

export default Welcome;
