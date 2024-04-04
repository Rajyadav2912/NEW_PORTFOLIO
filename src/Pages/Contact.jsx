import React from "react";
import hero from "../Components/Assets/Images/3d-Contact-image.png";
import Web from "../Components/Assets/Images/web.png";
import language from "../Components/Assets/3D ICON/language.png";

const Contact = () => {
  return (
    <div className="py-[40px]">
      <div className="mx-auto max-w-[740px] text-center">
        <h2 className="h2-heading">Get In Touch</h2>
        <h1 className="h1-heading">Contact Me</h1>
      </div>
      <div className="page-4">
        <div className="w-[40%] relative">
          <img src={hero} alt="" className="relative" />
          <img
            src={Web}
            alt=""
            className="absolute w-[90px] top-[64px] right-[40px]"
          />
          <img
            src={language}
            alt=""
            className="absolute w-[90px] top-[20rem] left-[3rem]"
          />
        </div>
        <div className="w-[40%] flex flex-wrap gap-4">
          <input
            type="text"
            className="w-[250px] h-[50px] px-3 rounded-lg"
            placeholder="Enter full name..."
          />
          <input
            type="text"
            className="w-[250px] h-[50px] px-3 rounded-lg"
            placeholder="Enter email eddress..."
          />
          <input
            type="numver"
            className="w-[250px] h-[50px] px-3 rounded-lg"
            placeholder="Enter mob. No.."
          />
          <input
            type="text"
            className="w-[250px] h-[50px] px-3 rounded-lg"
            placeholder="Enter email Subject..."
          />
          <textarea
            row={5}
            col={10}
            placeholder="Message...."
            onResize="none"
            className="w-[84%] h-[200px] rounded-lg p-3"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
