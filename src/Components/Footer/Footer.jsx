import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import insta from "../Assets/3D ICON/Instagram.png";
import fb from "../Assets/3D ICON/Facebook.png";
import linkedin from "../Assets/3D ICON/LinkedIn.png";
import github from "../Assets/3D ICON/github.png";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="pb-5">
      <div className="page-4 footer">
        <div className="flex w-[80%] h-[300px] justify-around mx-auto">
          <div className="w-[30%] p-5 flex flex-col gap-4">
            <h1 className="font-extrabold text-[35px]">Raj Yadav</h1>
            <p className="font-bold text-[16px]">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <p className="font-bold text-[16px]">Keep Rising 🚀.</p>
          </div>
          <div className="w-[30%] p-5 flex flex-col gap-4">
            <h1 className="font-extrabold text-[34px]">Direct Link</h1>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="flex items-center font-bold text-[16px] gap-2"
              >
                <IoHome size={18} /> Home
              </a>
              <a
                href="/aboout"
                className="flex items-center font-bold text-[16px] gap-2"
              >
                <FaUser size={18} /> About
              </a>
              <a
                href="/education"
                className="flex items-center font-bold text-[16px] gap-2"
              >
                <FaUserGraduate size={18} /> Education
              </a>
              <a
                href="/skill"
                className="flex items-center font-bold text-[16px] gap-2"
              >
                <FaLaptopCode size={18} /> Skills
              </a>
              <a
                href="/projects"
                className="flex items-center font-bold text-[16px] gap-2"
              >
                <AiOutlineFundProjectionScreen size={18} /> Projects
              </a>
            </div>
          </div>
          <div className="w-[30%] p-5 flex flex-col gap-4">
            <h1 className="font-extrabold text-[35px]">Contact Info.</h1>
            <p className="flex items-center font-bold text-[16px] gap-4">
              <FaPhone size={20} />
              +91 8349-020-828
            </p>
            <p className="flex items-center font-bold text-[16px] gap-4">
              <IoIosMail size={20} />
              rajyadav7047@gmail.com
            </p>
            <p className="flex items-center font-bold text-[16p6] gap-4">
              <FaMapLocationDot size={20} />
              Indore(M.P) - 452010, India
            </p>
            <div className="flex gap-3">
              <a href="#">
                <img src={linkedin} alt="" className="w-[55px]" />
              </a>
              <a href="#">
                <img src={github} alt="" className="w-[55px]" />
              </a>
              <a href="#">
                <img src={fb} alt="" className="w-[55px]" />
              </a>
              <a href="#">
                <img src={insta} alt="" className="w-[55px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-4 items-center">
          <div className="w-full h-[1px] border"></div>
          <div className="font-bold text-[18px] flex items-center gap-2">
            <RiCopyrightLine /> Copyright and Designed with 😎 by Raj Yadav
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
