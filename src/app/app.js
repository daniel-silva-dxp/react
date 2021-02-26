import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Login from "../pages/login";
import Routes from "../routes";

const App = () => {
  const [user, setUser] = React.useState(null);

  const actionLoginDataGoogle = async (u) => {
    setUser({
      id: u.uid,
      name: u.displayName,
      email: u.email,
      avatar: u.photoURL,
    });
  };

  if (user === null) {
    return <Login onReceiveGoogle={actionLoginDataGoogle} setUser={setUser} />;
  }

  return (
    <BrowserRouter>
      <Header logout={() => setUser(null)} />
      <Routes user={user} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
