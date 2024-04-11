import React, { useState } from "react";
import hero from "../Assets/Images/3d-Contact-image.png";
import Web from "../Assets/3D ICON/web-development.png";
import language from "../Assets/3D ICON/language.png";
import Tilt from "../Tilt/Tilt";
// import { Link } from "react-router-dom";

const Contact = () => {
  const [fromData, setFromData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const changeHanlder = (e) => {
    setFromData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    // console.log("changeHanlder", fromData);
  };

  function submitHandler() {
    console.log("click submit");
    console.log(fromData);
  }

  return (
    <div className="py-[50px]">
      <div className="mx-auto max-w-[740px] text-center">
        <h2 className="h2-heading">Get In Touch</h2>
        <h1 className="h1-heading contact">Contact Me</h1>
      </div>
      <div className="page-4">
        <div className="xl:w-[35%] lg:w-[45%] w-[55%] relative">
          <Tilt>
            <img src={hero} alt="" className="relative w-full" />
          </Tilt>
          <img
            src={Web}
            alt=""
            className="absolute lg:w-[90px] w-[65px] top-[64px] right-[40px] topdown"
          />
          <img
            src={language}
            alt=""
            className="absolute lg:w-[90px] w-[65px] top-[20rem] left-[3rem] rightleft"
          />
        </div>

        <div className="xl:w-[45%] lg:w-[56%] w-[70%]">
          <Tilt>
            <div className="text-black rounded-3xl p-[1px] animate-text hover:bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
              <div className="flex rounded-3xl items-center justify-center flex-col pb-3 bg-black">
                <form>
                  <div className="flex flex-wrap justify-center xl:gap-4 gap-3 py-6">
                    <input
                      type="text"
                      className="xl:w-[280px] lg:w-[270px] w-[480px] xl:h-[50px] h-[45px] px-3 rounded-lg outline-none"
                      placeholder="Enter full name..."
                      name="fullName"
                      onChange={changeHanlder}
                      value={fromData.fullName}
                    />

                    <input
                      type="email"
                      className="xl:w-[280px] lg:w-[270px] w-[480px] xl:h-[50px] h-[45px] px-3 rounded-lg outline-none"
                      placeholder="Enter email eddress..."
                      name="email"
                      onChange={changeHanlder}
                      value={fromData.email}
                    />

                    <input
                      type="tel"
                      className="xl:w-[280px] lg:w-[270px] w-[480px] xl:h-[50px] h-[45px] px-3 rounded-lg outline-none"
                      placeholder="Enter mob. No.."
                      name="phone"
                      onChange={changeHanlder}
                      value={fromData.phone}
                    />

                    <input
                      type="text"
                      className="xl:w-[280px] lg:w-[270px] w-[480px] xl:h-[50px] h-[45px] px-3 rounded-lg outline-none"
                      placeholder="Enter email Subject..."
                      name="subject"
                      onChange={changeHanlder}
                      value={fromData.subject}
                    />

                    <textarea
                      row={5}
                      col={10}
                      placeholder="Message...."
                      className="xl:w-[87%] w-[96%] h-[200px] rounded-lg p-3 outline-none"
                      name="message"
                      onChange={changeHanlder}
                      value={fromData.message}
                    ></textarea>
                  </div>

                  <div className="w-[120px] xl:ml-12 ml-3">
                    <button
                      onClick={submitHandler}
                      className="w-full h-full py-2 px-6 gap-1 text-[1.1rem] font-bold rounded-lg bg-[#c1ffff] text-black"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Contact;
