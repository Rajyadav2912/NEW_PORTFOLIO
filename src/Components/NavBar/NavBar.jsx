import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Logo 2.png";
import circle from "../Assets/Images/circle.svg";
import { FaMoon } from "react-icons/fa";

const NavBar = () => {
  const [moon, setMoon] = useState("moon");

  return (
    <div className="fixed w-[80%] h-[13%] border flex items-center justify-between py-3 px-10 z-[9999999] mx-auto">
      <div className="">
        <Link className="flex items-center justify-center gap-1">
          <div className="relative">
            <img src={circle} alt="" />
            <img
              src={logo}
              alt="logo"
              className="absolute w-[5.5rem] rounded-bl-[2.6rem] rounded-br-[2.4rem] top-[3px]"
            />
          </div>
          <h2 className="text-[1.7rem] font-extrabold">Raj Yadav</h2>
        </Link>
      </div>
      <div className="flex w-[50%]">
        <ul className="flex justify-between gap-10 list-none text-[1.05rem] font-medium ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <FaMoon fontSize={25} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
