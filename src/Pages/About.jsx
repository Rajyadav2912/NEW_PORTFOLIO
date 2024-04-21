import React from "react";
import data from "../data";
import student from "../Components/Assets/3D ICON/student.png";
import mail from "../Components/Assets/3D ICON/Gmail.png";
import Location from "../Components/Assets/3D ICON/location.png";
import Arrow from "../Components/Assets/Images/arrow.svg";
import { Link } from "react-router-dom";
import TechStack from "../Components/TechStack/TechStack";
import GitHubStats from "../Components/GitHubStats/GitHubStats";
import LinkedInCon from "../Components/LinkedInContainer/LinkedInCon";
import Tilt from "../Components/Tilt/Tilt";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const { title, image, heading, description, email, location } = data.About;

  return (
    <div className="flex justify-center items-center text-center" id="about">
      {/* <Abouts /> */}
      <div className="mt-[8rem]">
        <div className="page-2 about">
          <Tilt>
            <div className="md:w-[24rem] sm:w-[22rem] w-[20rem] md:h-[30rem] h-[29rem]">
              <div className="md:w-[382px] sm:w-[350px] w-[318px] md:h-[478px] sm:h-[462px] h-[460px] p-[3px] rounded-[69px] animate-text hover:bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
                <img
                  src={image}
                  alt="img"
                  className="w-full h-full rounded-[4rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </Tilt>

          <div className="lg:w-[85%] w-[90%] h-[100%] flex flex-col gap-10 ">
            <div className="flex flex-col gap-5">
              <h1 className="text-[2.5rem] flex mx-auto gap-2 font-bold leading-normal about-text">
                {title}
                <img
                  src={student}
                  alt="student.png"
                  loading="lazy"
                  className="w-[4rem] rounded-b-2xl -mt-1"
                />
              </h1>
              <h2 className="sm:text-[1.7rem] text-[1rem] font-semibold leading-normal">
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

              <p className="text-justify leading-normal font-bold md:text-[1rem] sm:text-[.9rem] text-[.7rem]">
                {description}
              </p>

              <div className="flex md:flex-row flex-col md:mx-auto lg:gap-[10rem] md:gap-[4rem] gap-[2rem] ">
                {/* Mail */}
                <div className="flex flex-row items-center mt-3">
                  {/* <img src="./3D ICON/Gmail.png" alt="img.png"> */}
                  <img src={mail} alt="" className="w-16" loading="lazy" />
                  <p className="pl-2 font-bold md:text-[1rem] text-[.9rem]">
                    <span className="text-[#f8ce96] ">Mail id : </span> {email}
                  </p>
                </div>

                {/* Location  */}
                <div className="flex flex-row items-center mt-3">
                  <img src={Location} alt="" className="w-16" loading="lazy" />
                  <p className="pl-2 font-bold md:text-[1rem] text-[.9rem]">
                    <span className="text-[#f8ce96] ">Location :</span>{" "}
                    {location}
                  </p>
                </div>
              </div>
            </div>

            {/*   💻 Tech Stack:*/}
            <div className="flex flex-col gap-6 items-start ">
              <h1 className="text-[2.5rem] leading-normal">
                💻
                <span className="font-[900] animate-text bg-gradient-to-br from-indigo-200 via-cyan-500 to-green-600 bg-clip-text text-transparent">
                  Tech Stack:
                </span>
              </h1>
              <TechStack />
            </div>

            {/*   📊 GitHub Stats: */}
            <div className="flex flex-col gap-6 items-start ">
              <h1 className="md:text-[2.5rem] text-[2rem] font-bold leading-normal">
                📊
                <span className="font-[900] animate-text bg-gradient-to-br from-indigo-200 via-cyan-500 to-green-600 bg-clip-text text-transparent">
                  GitHub Stats:
                </span>
              </h1>
              <GitHubStats />
            </div>

            {/*  🌐 LinkedIn Profile: */}
            <div className="flex flex-col gap-6 items-start">
              <h1 className="md:text-[2.5rem] text-[2rem] font-bold leading-normal">
                🌐
                <span className="font-[900] animate-text bg-gradient-to-br from-indigo-200 via-cyan-500 to-green-600 bg-clip-text text-transparent">
                  LinkedIn Profile:
                </span>
              </h1>

              <LinkedInCon />
            </div>

            <div className="w-[180px] mx-auto">
              <Link to="/">
                <button className="w-full flex h-full py-2 px-4 text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
                  Go To Home
                  <img src={Arrow} alt="arrow" loading="lazy" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
