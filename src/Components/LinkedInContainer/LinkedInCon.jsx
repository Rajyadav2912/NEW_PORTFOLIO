import React from "react";
import Model from "../Assets/3D ICON/LinkdIn-Model.png";

const LinkedInCon = () => {
  return (
    <div className="flex w-full h-full gap-12">
      <div className="w-[50%] border">
        <div className="bg-white w-[76%] h-full mx-auto rounded-[13%]">
          <div className="background"></div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[50%] border">
        <img src={Model} alt="" className="w-[80%] mx-auto" />
      </div>
    </div>
  );
};

export default LinkedInCon;
