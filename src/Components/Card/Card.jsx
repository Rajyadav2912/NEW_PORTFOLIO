import React from "react";
import "./Card.css";
import Student from "../Assets/3D ICON/student.png";

const Card = ({ name, date, image, branch, standard }) => {
  return (
    <div className=" ">
      <div className="container">
        <span className="line"></span>
        <div className="student-box">
          <img src={Student} alt="" />
        </div>

        <div className="Box">
          <img src={image} alt="" />

          <h2 className="text-[18px]">{name}</h2>
          <h3>{branch}</h3>
          <h4>{standard}</h4>
          <span className="border ml-[40rem] w-[20rem]">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
