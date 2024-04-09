import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Logo 2.png";
import circle from "../Assets/Images/circle.svg";
import { FaMoon, FaSun } from "react-icons/fa";
// import { useEffect } from "react";

const NavBar = () => {
  const [moon, setMoon] = useState(false);

  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log("gotoTop", window);
  };

  const ThemeHandler = (event) => {
    setMoon(event);
  };

  // useEffect(() => {
  //   // gotoTop();
  //   ThemeHandler();
  // }, [moon]);

  return (
    <div className="fixed w-[90%] h-[12%] flex items-center xl:justify-between xl:gap-0 lg:gap-[10rem] md:gap-[6rem] py-3 lg:px-10 px-6 z-[9999999] mx-auto bg-black">
      <div className="">
        <Link to="/" className="flex items-center justify-center gap-1">
          <div className="relative" onClick={gotoTop}>
            <img src={circle} alt="" className="animate-text" />
            <img
              src={logo}
              alt="logo"
              className="absolute w-[5.5rem] rounded-bl-[2.6rem] rounded-br-[2.4rem] top-[3px] "
            />
          </div>
          <h2 className="nav-text text-[1.9rem] animate-text bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 bg-clip-text text-transparent">
            Raj Yadav
          </h2>
        </Link>
      </div>
      <div className="flex w-[45%]">
        <ul className="flex justify-between gap-10 list-none text-[2.5rem]s font-semibold ">
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
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {moon ? (
            <li onClick={() => ThemeHandler(true)}>
              <FaSun fontSize={25} />
            </li>
          ) : (
            <li onClick={() => ThemeHandler(false)}>
              <FaMoon fontSize={25} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
