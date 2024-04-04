import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "../Assets/3D ICON/LinkedIn.png";
import Mail from "../Assets/3D ICON/Gmail.png";
import GitHub from "../Assets/3D ICON/github.png";
import Facebook from "../Assets/3D ICON/Facebook.png";
import Instagram from "../Assets/3D ICON/Instagram.png";
import { FaDownload } from "react-icons/fa6";

const Content = () => {
  return (
    <div>
      <h2 className="text-[1.7rem] font-bold leading-normal">Hello, I'm</h2>
      <h1 className="text-[2.5rem] font-extrabold leading-normal">Raj Yadav</h1>
      <h2 className="text-[1.7rem] font-bold leading-normal">
        And I'm a <span className="auto-typing-1">Software Developer</span>
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

      <button className="w-[10rem] border h-12 text-black text-[1.05rem] font-bold shadow-lg bg-[#c1ffff] rounded-[50px] mt-5">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3"
        >
          Download
          <FaDownload />
        </Link>
      </button>
    </div>
  );
};

export default Content;
