import React from "react";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Education from "../Components/Experience/Education";
import Skill from "../Components/Skill/Skill";
import Project from "../Components/Project/Project";
import Contact from "../Pages/Contact";

const Main = () => {
  return (
    <div className="flex flex-col gap-2">
      <Home />
      <About />
      <Education />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default Main;
