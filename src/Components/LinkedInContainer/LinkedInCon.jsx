import React from "react";
import Model from "../Assets/3D ICON/LinkdIn-Model.png";
import photo from "../Assets/3D ICON/Passport pic.jpg";
import { Link } from "react-router-dom";
import Tilt from "../Tilt/Tilt";

const LinkedInCon = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center w-full h-full gap-12 text-black">
      <div className="md:w-[50%] sm:w-[61%] w-[100%]">
        <Tilt>
          <div className="bg-white lg:w-[76%] md:w-[98%] w-[90%] h-[23.6rem] mx-auto rounded-[13%] flex flex-col gap-4">
            <div className="background"></div>
            <div>
              <img
                src={photo}
                alt=""
                className="w-[6rem] h-[6rem] -mt-[3.5rem] mx-auto border-[2px] rounded-[10rem]"
              />
            </div>

            <h1 className="text-[1.4rem] font-semibold opacity-[75%]">
              Raj Yadav
            </h1>

            <p className="flex flex-col mx-auto text-[1rem]">
              <span className="font-semibold opacity-[41%]">
                "🚀 Passionate (SDE) - Software
              </span>
              <span className="font-semibold opacity-[41%]">
                Development Engineer | Web{" "}
              </span>
              <span className="font-semibold opacity-[41%]">
                Development Enthusiast | B.Tech in{" "}
              </span>
              <span className="font-semibold opacity-[41%]">
                ECE | Open to Exciting Opportunities"
              </span>
            </p>

            <Link to="">
              <button className="text-[1.2rem] font-semibold opacity-[75%]">
                View full profile
              </button>
            </Link>
          </div>
        </Tilt>
      </div>

      <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[100%]">
        <Tilt>
          <img src={Model} alt="" className="w-[80%] mx-auto" />
        </Tilt>
      </div>
    </div>
  );
};

export default LinkedInCon;
