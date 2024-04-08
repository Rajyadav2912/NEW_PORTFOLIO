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
          className="w-[28rem] -mt-[2rem]"
        />
      </Tilt>
      <div className="absolute top-1">
        <img
          src={React_js}
          alt=""
          loading="lazy"
          className="w-[4.5rem] topdown"
        />
      </div>
      <div className="absolute top-[15rem] -left-[4rem]">
        <img
          src={Express}
          alt=""
          loading="lazy"
          className="w-[4rem] rightleft "
        />
      </div>
      <div className="absolute top-[28rem] left-12">
        <img src={DB} alt="" loading="lazy" className="w-[4.5rem] topdown" />
      </div>
      <div className="absolute top-[25rem] left-[22rem]">
        <img src={Js} alt="" loading="lazy" className="w-[4.5rem] rightleft" />
      </div>
      <div className="absolute top-[12rem] left-[28rem]">
        <img src={Java} alt="" loading="lazy" className="w-[4.5rem] topdown " />
      </div>
      <div className="absolute top-[2rem] left-[20rem]">
        <img
          src={Node}
          alt=""
          loading="lazy"
          className="w-[4.5rem] rightleft "
        />
      </div>
    </div>
  );
};

export default Hero;
