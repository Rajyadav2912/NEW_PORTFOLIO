import React from "react";
import React_js from "../Assets/3D ICON/react.png";
import Js from "../Assets/3D ICON/js.png";
import Html from "../Assets/3D ICON/html.png";
import Css from "../Assets/3D ICON/css.png";
import Java from "../Assets/3D ICON/java.png";
import Heros from "../Assets/Images/Hero-Image1.jpg";

const Hero = () => {
  return (
    <div>
      <img
        src={Heros}
        alt="img"
        loading="lazy"
        className="w-[30.3rem] absolute -top-[4.2rem]"
      />
      <div className="absolute -top-4">
        <img
          src={React_js}
          alt=""
          loading="lazy"
          className="w-[4.5rem] topdown"
        />
      </div>
      <div className="absolute top-[15rem] -left-[4rem]">
        <img src={Js} alt="" loading="lazy" className="w-[4.5rem] topdown " />
      </div>
      <div className="absolute top-[28rem] left-12">
        <img
          src={Html}
          alt=""
          loading="lazy"
          className="w-[4.5rem] rightleft"
        />
      </div>
      <div className="absolute top-[24rem] left-96">
        <img src={Css} alt="" loading="lazy" className="w-[4.5rem] topdown" />
      </div>
      <div className="absolute top-32 left-[28rem]">
        <img
          src={Java}
          alt=""
          loading="lazy"
          className="w-[4.5rem] rightleft "
        />
      </div>
    </div>
  );
};

export default Hero;
