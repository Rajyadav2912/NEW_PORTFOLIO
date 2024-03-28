import React from "react";
import Hero from "../Components/Assets/Images/Hero-Image1.jpg";
import { Link } from "react-router-dom";
import Linkedin from "../Components/Assets/3D ICON/LinkedIn.png";
import Mail from "../Components/Assets/3D ICON/Gmail.png";
import GitHub from "../Components/Assets/3D ICON/github.png";
import Facebook from "../Components/Assets/3D ICON/Facebook.png";
import Instagram from "../Components/Assets/3D ICON/Instagram.png";
import { FaDownload } from "react-icons/fa6";
import React_js from "../Components/Assets/3D ICON/react.png";
import Js from "../Components/Assets/3D ICON/js.png";
import Html from "../Components/Assets/3D ICON/html.png";
import Css from "../Components/Assets/3D ICON/css.png";
import Java from "../Components/Assets/3D ICON/java.png";

const Home = () => {
  return (
    <div className="w-[80%] h-[70%] mt-48 mx-auto flex justify-between border">
      <div className="w-[45%] border border-red-800 pt-16">
        <h2 className="text-[1.7rem] font-bold leading-normal">Hello, I'm</h2>
        <h1 className="text-[2.5rem] font-extrabold leading-normal">
          Raj Yadav
        </h1>
        <h2 className="text-[1.7rem] font-bold leading-normal">
          And I'm a <span class="auto-typing-1">Software Developer</span>
        </h2>
        <p className="text-[1rem] font-semibold leading-normal">
          Currently, I'm 4th Year B.Tech(ECE) student from PIEMR at Indore. I am
          passionate about the Software Industry.
        </p>

        <div className="flex justify-between mt-4 w-[25rem]">
          <Link
            to="https://www.linkedin.com/in/rajyadav-2920r0218j8/"
            target="_blank"
          >
            <img src={Linkedin} alt="linkedin" className="w-[4rem]" />
          </Link>
          <Link to="" target="_blank">
            <img src={Mail} alt="mail" className="w-[4rem]" />
          </Link>
          <Link to="https://github.com/Rajyadav2912" target="_blank">
            <img src={GitHub} alt="github" className="w-[4rem]" />
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=1000118515058"
            target="_blank"
          >
            <img src={Facebook} alt="facebook" className="w-[4rem]" />
          </Link>
          <Link to="https://www.instagram.com/yadav_raj.29" target="_blank">
            <img src={Instagram} alt="instagram" className="w-[4rem]" />
          </Link>
        </div>

        <Link to="" download target="_blank" rel="noopener noreferrer">
          <button className="w-[10rem] h-12 text-black text-[1.2rem] font-bold shadow-lg bg-[#c1ffff] flex items-center justify-center gap-3 rounded-[50px] mt-5">
            Hire Me
            <FaDownload />
          </button>
        </Link>
      </div>
      <div className="w-[45%] border border-blue-800 flex relative">
        <img
          src={Hero}
          alt=""
          loading="lazy"
          className="w-[30.3rem] absolute -top-16"
        />
        <div className="absolute">
          <img src={React_js} alt="" loading="lazy" className="w-[4.5rem]" />
        </div>
        <div className="absolute top-56 -left-9">
          <img src={Js} alt="" loading="lazy" className="w-[4.5rem]" />
        </div>
        <div className="absolute">
          <img src={Html} alt="" loading="lazy" className="w-[4.5rem]" />
        </div>
        <div className="absolute">
          <img src={Css} alt="" loading="lazy" className="w-[4.5rem]" />
        </div>
        <div className="absolute">
          <img src={Java} alt="" loading="lazy" className="w-[4.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
