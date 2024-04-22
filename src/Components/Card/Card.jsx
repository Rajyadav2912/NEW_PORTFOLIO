import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../Assets/Images/arrow.svg";
import githubIcon from "../Assets/3D ICON/github.png";
import Tilt from "../Tilt/Tilt";
import ALLButton from "../Button/ALLButton";

const Card = ({ image, title, date, info, link, weblink, skill, index }) => {
  const [readmore, setReadMore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 150)}....`;

  function readmoreHanlder() {
    console.log("click hua hn");
    setReadMore(!readmore);
    // console.log(description);
  }

  return (
    <Tilt>
      <div
        className="w-[350px] h-full border rounded-3xl flex flex-col justify-center gap-5 p-4 hover:-translate-y-5 transition-all duration-700"
        key={index}
      >
        <div className="relative">
          <img src={image} alt="" className=" rounded-t-[2rem] border" />
          <Link to={link}>
            <img
              src={githubIcon}
              alt=""
              className="absolute w-[60px] top-0 right-0"
            />
          </Link>
        </div>
        <div className="flex gap-3">
          {skill.map((skill, index) => (
            <div className="w-[35px]" key={index}>
              <img src={skill.image} />
            </div>
          ))}
        </div>
        <div className="text-[16px] font-bold ">
          <p>{title}</p>
          <p>{date}</p>
        </div>
        <div>
          <p className="text-justify text-[14px]">
            {description}
            <span
              className="text-blue-600 cursor-pointer text-[15px]"
              onClick={readmoreHanlder}
            >
              {readmore ? `...show less` : `read more`}
            </span>
          </p>
        </div>
        <div className="w-[225px] mx-auto">
          <ALLButton
            text={"Go to Web page"}
            linkto={weblink}
            page={"_blank"}
            icon={<img src={Arrow} alt="arrow" loading="lazy" />}
          />
          {/* <Link to={weblink}>
            <button className="w-full flex h-full py-2 px-3 text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
              Go to Web page
              <img src={Arrow} alt="arrow" loading="lazy" />
            </button>
          </Link> */}
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
