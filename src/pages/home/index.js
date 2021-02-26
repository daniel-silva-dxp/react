import React from "react";
import Welcome from "../../components/welcome/index.js";

import "./style.js";

const Home = ({ user }) => {
  return (
    <div className="container">
      <Welcome
        title={`Olá, ${user.name}!`}
        subtitle="Como podemos te ajudar hoje?"
        urlImame="/office.svg"
      />
    </div>
  );
};

export default Home;
