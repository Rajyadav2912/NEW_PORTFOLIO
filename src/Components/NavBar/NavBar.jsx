// import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Logo 2.png";
import circle from "../Assets/Images/circle.svg";
import { FaMoon } from "react-icons/fa";
// import { useEffect } from "react";

const NavBar = () => {
  // const [moon, setMoon] = useState("moon");

  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log("gotoTop", window);
  };

  // useEffect(() => {
  //   gotoTop();
  // }, []);

  return (
    <div className="fixed w-[90%] h-[12%] flex items-center justify-between py-3 px-10 z-[9999999] mx-auto bg-black">
      <div className="">
        <Link to="/" className="flex items-center justify-center gap-1">
          <div className="relative" onClick={gotoTop}>
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
      <div className="flex w-[45%]">
        <ul className="flex justify-between gap-10 list-none text-[1.05rem]s font-medium ">
          <li>
            <Link to="/">Home</Link>
            {/* <a href="#home">Home</a> */}
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              About
            </Link>
            {/* <a href="#about">About</a> */}
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
