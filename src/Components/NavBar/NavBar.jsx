import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Logo 2.png";
import circle from "../Assets/Images/circle.svg";
import { FaMoon, FaSun } from "react-icons/fa";
// import { useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [moon, setMoon] = useState(false);
  const [menu, setMenu] = useState(false);
  const openRef = useRef();
  // const [active, setActive] = useState("");

  const menuHandler = () => {
    setMenu(!menu);
    console.log("True", !moon);
  };

  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log("gotoTop");
  };

  const themeHandler = () => {
    setMoon(!moon);
    console.log("true", !moon);
  };

  // useEffect(() => {
  //   // gotoTop();
  //   ThemeHandler();
  // }, [moon]);

  // const menuIcon_toggle = (e) => {
  //   menuRef.current.classList.toggle("nav-menu-visible");
  //   e.target.classList.toggle("open");
  // };

  // const openHanlder = (e) => {
  //   openRef.current.className.toggle("flex flex-col mt-[10rem]");
  //   e.target.classList.toggle("open");
  // };

  // const closeHandler = (e) => {
  //   openRef.current.className.toggle("hidden");
  //   e.target.classList.toggle("close");
  // };

  const hanlderScroll = (event) => {
    // if (window.scrollY > 100) {
    //   setMenu(true);
    // } else {
    //   setMenu(false);
    // }
    console.log("call", event.current);
  };

  return (
    <div className="fixed xl:w-11/12 w-full h-[12%] flex items-center xl:gap-0 justify-between py-3 pl-4 xl:pr-0 lg:pr-16 pr-8 z-[9999999] mx-auto bg-black">
      <div className=" xl:w-[20%] w-[60%]">
        <Link
          to="/"
          className="flex items-center justify-center xl:gap-1 gap-0"
          // onClick={() => {
          //   console.log("click on");
          //   gotoTop();
          // }}
        >
          <div className="relative">
            <img src={circle} alt="" className="xl:w-full lg:w-[85%] w-[90%]" />
            <img
              src={logo}
              alt="logo"
              className="absolute xl:w-[5.5rem] lg:w-[4.54rem] w-[4.8rem] rounded-bl-[2.6rem] rounded-br-[2.4rem] top-[3px] "
            />
          </div>
          <h2 className="nav-text xl:text-[1.9rem] lg:text-[1.8rem] text-[1.5rem] animate-text bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 bg-clip-text text-transparent">
            Raj Yadav
          </h2>
        </Link>
      </div>

      <div className="xl:hidden flex flex-row-reverse gap-8 items-center">
        <div className="flex items-end" onClick={menuHandler}>
          {menu ? <IoMdClose fontSize={30} /> : <IoMdMenu fontSize={30} />}
        </div>
        <div onClick={themeHandler}>
          {moon ? <FaSun fontSize={30} /> : <FaMoon fontSize={30} />}
        </div>
      </div>

      <div className="xl:w-0 xl:hidden absolute right-6 top-[5rem] rounded-[1rem] bg-[#9292f9]">
        {menu && (
          <ul
            ref={openRef}
            className="flex flex-col w-[10rem] p-4 gap-5 items-center list-none xl:text-[1.2rem] text-[1rem] font-semibold "
          >
            <li>
              <Link to="/">Home</Link>
              {/* <a href="#home">Home</a> */}
            </li>
            <li>
              <Link to="/about">About</Link>
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
          </ul>
        )}
      </div>

      <div className="xl:flex  hidden xl:w-[44%] w-0">
        <ul
          // ref={openRef}
          className="lg:flex hidden justify-between lg:gap-10 gap-8 list-none xl:text-[1.2rem] text-[1rem] font-medium"
        >
          <li>
            <Link to="/">Home</Link>
            {/* <a href="#home">Home</a> */}
          </li>

          <li>
            <Link to="/about">About</Link>
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
          <li onClick={themeHandler}>
            {moon ? <FaSun fontSize={30} /> : <FaMoon fontSize={30} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
