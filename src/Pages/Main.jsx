import React from "react";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Education from "../Components/Experience/Education";
import Skill from "../Components/Skill/Skill";
import Project from "../Components/Project/Project";

const Main = ({ defaultOptions }) => {
  return (
    <div className="flex flex-col gap-2">
      <Home />
      <About option={defaultOptions} />
      <Education />
      <Skill />
      <Project />
    </div>
  );
};

export default Main;
