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
          className="xl:w-[28rem] w-[25rem] xl:-mt-[2rem] -mt-[0]"
        />
      </Tilt>
      <div className="absolute xl:top-1 top-14">
        <img
          src={React_js}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem]  w-[3.8rem] topdown"
        />
      </div>
      <div className="absolute top-[15rem] xl:-left-[4rem] -left-[3.5rem]">
        <img
          src={Express}
          alt=""
          loading="lazy"
          className="xl:w-[4rem] w-[3.4rem] rightleft "
        />
      </div>
      <div className="absolute xl:top-[28rem] top-[26rem] xl:left-12 left-10">
        <img
          src={DB}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem] w-[3.8rem] topdown"
        />
      </div>
      <div className="absolute xl:top-[25rem] top-[23rem] xl:left-[22rem] left-[17rem]">
        <img
          src={Js}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem] w-[3.4rem] rightleft"
        />
      </div>
      <div className="absolute xl:top-[12rem] top-[14rem] xl:left-[28rem] left-[22rem]">
        <img
          src={Java}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem] w-[3.6rem] topdown"
        />
      </div>
      <div className="absolute xl:top-[2rem] top-[5rem] xl:left-[20rem] left-[18rem]">
        <img
          src={Node}
          alt=""
          loading="lazy"
          className="xl:w-[4.5rem] w-[3.8rem] rightleft "
        />
      </div>
    </div>
  );
};

export default Hero;
