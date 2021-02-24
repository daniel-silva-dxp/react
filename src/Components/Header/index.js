import React from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

import { HeaderContent } from "./style";

const Header = () => {
  return (
    <HeaderContent>
      <div className="container">
        <span className="logo">LOGOMARCA</span>
        <nav>
          <ul>
            <li data-tip data-for="config">
              <FaCog />
              <ReactTooltip
                id="config"
                textColor="#fff"
                backgroundColor="#3d3b3d"
                effect="solid"
              >
                <span>Configurações</span>
              </ReactTooltip>
            </li>
            <li data-tip data-for="singout">
              <FaSignOutAlt />
              <ReactTooltip
                id="singout"
                textColor="#fff"
                backgroundColor="#3d3b3d"
                effect="solid"
              >
                <span>Sing out</span>
              </ReactTooltip>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContent>
  );
};

export default Header;
