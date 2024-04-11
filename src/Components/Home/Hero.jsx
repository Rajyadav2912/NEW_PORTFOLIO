import React from "react";
import React_js from "../Assets/3D ICON/react.png";
import Express from "../Assets/3D ICON/express.png";
import Node from "../Assets/3D ICON/NodeJs.png";
import DB from "../Assets/3D ICON/mongo-db.png";
import Js from "../Assets/3D ICON/js.png";
import Java from "../Assets/3D ICON/java.png";
import Heros from "../Assets/Images/Hero-Image1.jpg";
import Tilt from "../Tilt/Tilt";

const Hero = () => {
  return (
    <div>
      <Tilt>
        <img
          src={Heros}
          alt="img"
          loading="lazy"
          className="xl:w-[28rem] md:w-[25rem] w-[23rem] h-full xl:-mt-[2rem] lg:-mt-[0] mt-[1rem] md:opacity-100 opacity-[0.50]"
        />
      </Tilt>
      <div className="absolute md:flex hidden xl:top-1 lg:top-14 top-[4.5rem]">
        <img
          src={React_js}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem] lg:w-[3.8rem] w-[3.2rem] topdown"
        />
      </div>
      <div className="absolute md:flex hidden top-[15rem] xl:-left-[4rem] lg:-left-[3.5rem] -left-[2rem]">
        <img
          src={Express}
          alt=""
          loading="lazy"
          className="xl:w-[4rem] lg:w-[3.4rem] w-[3rem] rightleft "
        />
      </div>
      <div className="absolute md:flex hidden xl:top-[28rem] lg:top-[26rem] top-[24rem] xl:left-12 lg:left-10 left-14">
        <img
          src={DB}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem] lg:w-[3.8rem] w-[3.2rem] topdown"
        />
      </div>
      <div className="absolute md:flex hidden xl:top-[25rem] lg:top-[23rem] top-[20.5rem] xl:left-[22rem] lg:left-[17rem] left-[16rem]">
        <img
          src={Js}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem] lg:w-[3.4rem] w-[3rem] rightleft "
        />
      </div>
      <div className="absolute md:flex hidden xl:top-[12rem] top-[14rem] xl:left-[28rem] left-[22rem]">
        <img
          src={Java}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem] w-[3.6rem] topdown"
        />
      </div>
      <div className="absolute md:flex hidden xl:top-[2rem] lg:top-[5rem] top-[6.5rem] xl:left-[20rem] lg:left-[18rem] left-[17rem]">
        <img
          src={Node}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem] lg:w-[3.8rem] w-[3rem] rightleft "
        />
      </div>
    </div>
  );
};

export default Hero;
