import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/Images/Logo 2.png";
import circle from "../Assets/Images/circle.svg";
import { FaMoon, FaSun } from "react-icons/fa";
// import { useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [moon, setMoon] = useState(false);
  // const [menu, setMenu] = useState(false);
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

  const hanlderScroll = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []);
    console.log("call");
  };

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Projects",
      path: "/projects",
    },
    {
      id: 4,
      name: "Education",
      path: "/education",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed xl:w-11/12 w-full h-[12%] flex items-center rounded-3xl border border-slate-800 shadow-md shadow-neutral-600 xl:gap-0 justify-between py-3 pl-4 xl:pr-0 lg:pr-16 pr-8 z-[9999999] mx-auto bg-black">
      <div className=" xl:w-[25%] md:w-[30%] sm:w-[38%] w-[65%]">
        <Link
          to="/"
          className="flex relative items-center justify-center xl:gap-4 gap-3"
          // onClick={() => {
          //   console.log("click on");
          //   gotoTop();
          // }}
        >
          <img src={circle} alt="" className="xl:w-[22%] w-[28%]" />
          <img
            src={logo}
            alt="logo"
            className="absolute xl:w-[5rem] lg:w-[4.54rem] sm:w-[4.8rem] w-[4rem] rounded-bl-[2.6rem] rounded-br-[2.4rem] -top-[1px] md:left-[45px] sm:left-[10px]"
          />
          <h2 className="nav-text xl:text-[1.9rem] lg:text-[1.8rem] text-[1.5rem] animate-text bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 bg-clip-text text-transparent">
            Raj Yadav
          </h2>
        </Link>
      </div>

      {/* <div className="xl:hidden flex flex-row-reverse gap-8 items-center">
        <div className="flex items-end" onClick={menuHandler}>
          {menu ? <IoMdClose fontSize={30} /> : <IoMdMenu fontSize={30} />}
        </div>
        <div onClick={themeHandler}>
          {moon ? <FaSun fontSize={30} /> : <FaMoon fontSize={30} />}
        </div>
      </div> */}

      {/* <div className="xl:w-0 xl:hidden absolute right-6 top-[5rem] rounded-[1rem] bg-[#9292f9]">
        {menu && (
          <ul className="flex flex-col w-[10rem] p-4 gap-5 items-center list-none xl:text-[1.2rem] text-[1rem] font-semibold ">
            <li>
              <NavLink to="/" onClick={hanlderScroll}>
                Home
              </NavLink>
              {/* <a href="#home">Home</a> 
            </li>
            <li>
              <NavLink to="/about" onClick={hanlderScroll}>
                About
              </NavLink>
              {/* <a href="#about">About</a> 
            </li>
            <li>
              <NavLink to="/education" onClick={hanlderScroll}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={hanlderScroll}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={hanlderScroll}>
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div> */}

      <div className="xl:flex md:w-[44%] sm:w-[12%] w-[8%]">
        <ul
          // ref={openRef}
          className={`${
            isOpen
              ? "lg:hidden flex flex-col absolute top-[6rem] right-[1rem] items-center py-8 px-10 gap-3 rounded-2xl bg-[#9292f9]"
              : "lg:flex hidden justify-between lg:gap-10 gap-8"
          } text-[1.02rem] list-none font-medium`}
        >
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} onClick={hanlderScroll}>
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* <li onClick={themeHandler}>
            {moon ? <FaSun fontSize={30} /> : <FaMoon fontSize={30} />}
          </li> */}
        </ul>

        <button
          className="lg:hidden flex items-center"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <RxCross1 fontSize={28} /> : <HiMenuAlt3 fontSize={28} />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
