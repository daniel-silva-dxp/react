import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Login from "../pages/login";
import Routes from "../routes";

const App = () => {
  const [user, setUser] = React.useState(null);

  const actionLoginDataGoogle = async (u) => {
    console.log(u);
    const newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };

    setUser(newUser);
  };

  if (user === null) {
    return <Login onReceiveGoogle={actionLoginDataGoogle} />;
  }

  return (
    <BrowserRouter>
      <Header logout={() => setUser(null)} />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
