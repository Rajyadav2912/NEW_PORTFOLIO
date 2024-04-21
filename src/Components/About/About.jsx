import React from "react";
import data from "../../data.js";
import student from "../Assets/3D ICON/student.png";
import mail from "../Assets/3D ICON/Gmail.png";
import Location from "../Assets/3D ICON/location.png";
import Arrow from "../Assets/Images/arrow.svg";
import { Link } from "react-router-dom";
import Tilt from "../Tilt/Tilt.jsx";
import ALLButton from "../Button/ALLButton.jsx";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const { title, image, heading, description, email, location } = data.About;
  return (
    <div
      id="about"
      className="xl:h-[40rem] lg:h-[38rem] sm:h-[68rem] h-[62rem] lg:px-0 sm:px-16 px-4"
    >
      <div className="page-2">
        <Tilt>
          <div
            className="xl:w-[24rem] md:w-[22rem] w-[20rem] xl:h-[30rem] md:h-[28rem] h-[26rem] rounded-[4rem] animate-text hover:bg-gradient-to-bl from-cyan-600
           via-indigo-400 to-green-400 bg-clip- text-transparent hover:shadow-card"
          >
            <div className="w-full h-full p-[2px]">
              {/* bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 bg-clip- text-transparent  */}
              <img
                src={image}
                alt="img"
                className="w-full h-full rounded-[4rem]"
                loading="lazy"
              />
            </div>
          </div>
        </Tilt>

        <div className="lg:w-[38rem] md:w-[42rem] sm:w-[34rem] w-[23.5rem] h-[31.5rem] flex flex-col items-start xl:gap-4 gap-3 p-2 pt-6">
          <h1 className="text-[2.5rem] lg:mx-0 mx-auto flex gap-2 font-bold leading-normal about-text">
            {title}
            <img
              src={student}
              alt="student.png"
              loading="lazy"
              className="w-[4rem] rounded-b-2xl -mt-1"
            />
          </h1>

          <h2 className="xl:text-[1.66rem] lg:mx-0 md:mx-auto sm:text-[1.5rem] text-[1.02rem] font-semibold leading-normal">
            {heading}
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

          <p className="text-justify leading-normal font-bold xl:text-[1rem] sm:text-[0.85rem] text-[0.7rem]">
            {description}
          </p>

          {/* Mail */}
          <div className="flex flex-row items-center mt-3">
            {/* <img src="./3D ICON/Gmail.png" alt="img.png"> */}
            <img
              src={mail}
              alt=""
              className="xl:w-16 sm:w-14 w-12"
              loading="lazy"
            />
            <p className="pl-2 font-bold text-[1rem]  ">
              <span className="text-[#f8ce96] ">Mail id : </span> {email}
            </p>
          </div>

          {/* Location  */}
          <div className="flex flex-row items-center mt-3">
            <img
              src={Location}
              alt=""
              className="xl:w-16 sm:w-14 w-12"
              loading="lazy"
            />
            <p className="pl-2 font-bold text-[1rem]">
              <span className="text-[#f8ce96] ">Location :</span> {location}
            </p>
          </div>

          <div className="lg:mx-0 mx-auto">
            <ALLButton
              text={"Read more"}
              linkto={"/about"}
              icon={<img src={Arrow} alt="arrow" loading="lazy" />}
            />

            {/* <Link to="/about">
              <button className="w-full flex h-full py-2 xl:px-5 px-4 gap-1 text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
                Read more
                <img src={Arrow} alt="arrow" loading="lazy" />
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
