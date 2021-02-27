import React from "react";
import { FaDev, FaHome, FaCog, FaPowerOff } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

import "./main.css";

const Sidebar = () => {
  return (
    <aside>
      <nav className="display-flex align-items-center justify-content-center flex-direction-column">
        <div className="logo display-flex align-items-center justify-content-center">
          <FaDev />
        </div>
        <ul className="display-flex align-items-center justify-content-center flex-direction-column">
          <Link to="/">
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
          </Link>
          <Link to="/config">
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
          </Link>
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
      </nav>
    </aside>
  );
};

export default Sidebar;
