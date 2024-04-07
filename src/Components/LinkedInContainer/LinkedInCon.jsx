import React from "react";
import Model from "../Assets/3D ICON/LinkdIn-Model.png";
import photo from "../Assets/3D ICON/Passport pic.jpg";

const LinkedInCon = () => {
  return (
    <div className="flex w-full h-full gap-12 text-black">
      <div className="w-[50%] border">
        <div className="bg-white w-[76%] h-full mx-auto rounded-[13%] flex flex-col gap-4">
          <div className="background"></div>
          <div>
            <img
              src={photo}
              alt=""
              className="w-[6rem] h-[6rem] -mt-[3.5rem] mx-auto border-[2px] rounded-[10rem]"
            />
          </div>
          <h1 className="text-[1.4rem] font-semibold opacity-45">Raj Yadav</h1>
          <p className="px-2 text-[0.9rem]">
            <span className="pr-[1.7rem] pl-[1rem]">
              "🚀 Passionate (SDE)-Software
            </span>
            <span className="px-[1.3rem]"> Development Engineer | Web </span>
            <span className=""> Development Enthusiast | B.Tech in </span>
            <span> ECE | Open to Exciting Opportunities"</span>
          </p>
        </div>
      </div>
      <div className="w-[50%] border">
        <img src={Model} alt="" className="w-[80%] mx-auto" />
      </div>
    </div>
  );
};

export default LinkedInCon;
