import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Logo 2.png";

const NavBar = () => {
  return (
    <div>
      <div>
        <Link>
          <img src={logo} alt="logo" />
          <h2>Raj Yadav</h2>
        </Link>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
