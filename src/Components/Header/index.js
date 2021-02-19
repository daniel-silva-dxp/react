import React from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";

import { HeaderContent } from "./style";

const Header = () => {
  return (
    <HeaderContent>
      <div className="container">
        <span className="logo">LOGOMARCA</span>
        <nav>
          <ul>
            <li>
              <FaCog />
            </li>
            <li>
              <FaSignOutAlt />
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContent>
  );
};

export default Header;
