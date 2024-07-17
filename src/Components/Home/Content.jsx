import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "../Assets/3D ICON/LinkedIn.png";
import Mail from "../Assets/3D ICON/Gmail.png";
import GitHub from "../Assets/3D ICON/github.png";
import Facebook from "../Assets/3D ICON/Facebook.png";
import Instagram from "../Assets/3D ICON/Instagram.png";
import { FaDownload } from "react-icons/fa6";
import ALLButton from "../Button/ALLButton";
import resume from "/src/Raj Yadav_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

const Content = () => {
  return (
    <div>
      <h2 className="xl:text-[3rem] lg:text-[2.2rem] md:text-[2rem] sm:text-[1.8rem] text-[2.2rem] font-black leading-normal">
        Hello, I'm
      </h2>
      <h1
        className="xl:text-[4.5rem] lg:text-[3.8rem] md:text-[3.6rem] sm:text-[3.5rem] text-[3.7rem] font-black leading-normal animate-text bg-gradient-to-r
       from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
      >
        Raj Yadav
      </h1>
      <h2 className="xl:text-[1.9rem] lg:text-[1.8rem] sm:text-[1.6rem] text-[1.3rem] font-black leading-normal">
        And I'm
        <span className="auto-typing-1 text-[#f8ce96]">
          {" "}
          <Typewriter
            words={[
              "Software Developer",
              "Full Stack Developer",
              "Frontend Developer",
              "Junior Developer",
            ]}
            loop={6}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </span>
      </h2>
      <p className="xl:text-[1.1rem] lg:text-[0.9rem] sm:text-[0.81rem] text-[0.85rem] mt-2 font-semibold leading-normal">
        I recently completed my B.Tech in ECE from PIEMR, Indore. I am
        passionate about the software industry.
      </p>
      <div className="flex md:justify-between sm:gap-4 gap-2  mt-4 xl:w-[25rem] w-[24rem]">
        <Link
          to="https://www.linkedin.com/in/rajyadav-2920r0218j8/"
          target="_blank"
        >
          <img
            src={Linkedin}
            alt="linkedin"
            className="xl:w-[4.5rem] md:w-[3.6rem] w-[3.4rem]"
          />
        </Link>
        <Link to="mailto:rajyadav7047@gmail.com">
          <img
            src={Mail}
            alt="mail"
            className="xl:w-[4.5rem] md:w-[3.6rem] w-[3.4rem]"
          />
        </Link>
        <Link to="https://github.com/Rajyadav2912" target="_blank">
          <img
            src={GitHub}
            alt="github"
            className="xl:w-[4.5rem] md:w-[3.6rem] w-[3.4rem]"
          />
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=1000118515058"
          target="_blank"
        >
          <img
            src={Facebook}
            alt="facebook"
            className="xl:w-[4.5rem] md:w-[3.6rem] w-[3.4rem]"
          />
        </Link>
        <Link to="https://www.instagram.com/yadav_raj.29" target="_blank">
          <img
            src={Instagram}
            alt="instagram"
            className="xl:w-[4.5rem] md:w-[3.6rem] w-[3.4rem]"
          />
        </Link>
      </div>

      <ALLButton
        text={"Download"}
        page={"_blank"}
        linkto={resume}
        icon={<FaDownload />}
      />

      {/* <button className="xl:w-[10rem] lg:w-[9.5rem] sm:w-[9rem] w-[10rem] border h-12 text-black lg:text-[1.05rem] text-[1rem] font-bold shadow-lg bg-[#c1ffff] rounded-[50px] mt-5">
        <Link
          to=""
          // target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3"
        >
          Download
          <FaDownload />
        </Link>
      </button> */}
    </div>
  );
};

export default Content;
