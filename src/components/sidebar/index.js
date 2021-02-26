import React from "react";
import { FaDev, FaHome, FaCog, FaPowerOff } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

import { Aside, Nav } from "./styled";

const Sidebar = () => {
  return (
    <Aside>
      <Nav>
        <div className="logo">
          <FaDev />
        </div>
        <ul>
          <li data-tip data-for="home">
            <FaHome />
            <ReactTooltip
              id="home"
              textColor="#fff"
              backgroundColor="#5965e0"
              place="right"
              effect="solid"
            >
              <span>Home</span>
            </ReactTooltip>
          </li>
          <li data-tip data-for="config">
            <FaCog />
            <ReactTooltip
              id="config"
              textColor="#fff"
              backgroundColor="#5965e0"
              place="right"
              effect="solid"
            >
              <span>Configuration</span>
            </ReactTooltip>
          </li>
          <li data-tip data-for="logout">
            <FaPowerOff />
            <ReactTooltip
              id="logout"
              textColor="#fff"
              backgroundColor="#5965e0"
              place="right"
              effect="solid"
            >
              <span>Logout</span>
            </ReactTooltip>
          </li>
        </ul>
      </Nav>
    </Aside>
  );
};

export default Sidebar;
