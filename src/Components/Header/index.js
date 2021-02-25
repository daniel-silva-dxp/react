import React from "react";
import { FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

import { HeaderContent } from "./style";

const Header = ({ logout }) => {
  return (
    <HeaderContent>
      <div className="container">
        <span className="logo">
          <Link to="/">LOGOMARCA</Link>
        </span>
        <nav>
          <ul>
            <li data-tip data-for="home">
              <Link to="/">
                <FaHome />
                <ReactTooltip
                  id="home"
                  textColor="#fff"
                  backgroundColor="#3d3b3d"
                  effect="solid"
                >
                  <span>Home</span>
                </ReactTooltip>
              </Link>
            </li>
            <li data-tip data-for="config">
              <Link to="/configuracoes">
                <FaCog />
                <ReactTooltip
                  id="config"
                  textColor="#fff"
                  backgroundColor="#3d3b3d"
                  effect="solid"
                >
                  <span>Configurações</span>
                </ReactTooltip>
              </Link>
            </li>
            <li data-tip data-for="singout">
              <Link to="/logout">
                <FaSignOutAlt onClick={logout} />
                <ReactTooltip
                  id="singout"
                  textColor="#fff"
                  backgroundColor="#3d3b3d"
                  effect="solid"
                >
                  <span>Sing out</span>
                </ReactTooltip>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContent>
  );
};

export default Header;
