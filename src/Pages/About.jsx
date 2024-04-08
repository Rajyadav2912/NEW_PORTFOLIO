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

const About = () => {
  const { title, image, heading, description, email, location } = data.About;

  return (
    <div className="flex justify-center items-center text-center">
      {/* <Abouts /> */}
      <div className="mt-[8rem]">
        <div className="page-2 about">
          <Tilt>
            <div className="w-[24rem] h-[30rem]">
              <img
                src={image}
                alt="img"
                className="w-full h-full rounded-[4rem]"
                loading="lazy"
              />
            </div>
          </Tilt>

          <div className="w-[85%] h-[100%] flex flex-col gap-10 ">
            <div className="flex flex-col gap-5">
              <h1 className="text-[2.5rem] flex mx-auto gap-2 font-bold leading-normal">
                {title}
                <img
                  src={student}
                  alt="student.png"
                  loading="lazy"
                  className="w-[4rem] rounded-b-2xl -mt-1"
                />
              </h1>
              <h2 className="text-[1.7rem] font-semibold leading-normal">
                {heading}
                <span className="auto-typing-2"></span>
              </h2>
              <p className="text-justify leading-normal font-bold text-[1rem]">
                {description}
              </p>
              <div className="flex mx-auto gap-[10rem] ">
                {/* Mail */}
                <div className="flex flex-row items-center mt-3">
                  {/* <img src="./3D ICON/Gmail.png" alt="img.png"> */}
                  <img src={mail} alt="" className="w-16" loading="lazy" />
                  <p className="pl-2 font-bold text-[1rem]">
                    Mail id : {email}
                  </p>
                </div>

                {/* Location  */}
                <div className="flex flex-row items-center mt-3">
                  <img src={Location} alt="" className="w-16" loading="lazy" />
                  <p className="pl-2 font-bold text-[1rem]">
                    Location : {location}
                  </p>
                </div>
              </div>
            </div>

            {/*   💻 Tech Stack:*/}
            <div className="flex flex-col gap-6 items-start ">
              <h1 className="text-[2.5rem] font-bold leading-normal">
                💻 Tech Stack:
              </h1>
              <TechStack />
            </div>

            {/*   📊 GitHub Stats: */}
            <div className="flex flex-col gap-6 items-start ">
              <h1 className="text-[2.5rem] font-bold leading-normal">
                📊 GitHub Stats:
              </h1>
              <GitHubStats />
            </div>

            {/*  🌐 LinkedIn Profile: */}
            <div className="flex flex-col gap-6 items-start">
              <h1 className="text-[2.5rem] font-bold leading-normal">
                🌐 LinkedIn Profile:
              </h1>

              <LinkedInCon />
            </div>

            <div className="w-[180px] mx-auto">
              <Link to="/">
                <button className="w-full flex h-full py-2 px-4 gap-1 text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
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
