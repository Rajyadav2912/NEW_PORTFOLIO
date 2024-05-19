import React from "react";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Education from "../Components/Experience/Education";
import Skill from "../Components/Skill/Skill";
import Project from "../Components/Project/Project";
// import StarsCanvas from "../Pages/StarBackgorund";

const Main = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* <StarsCanvas /> */}
      <Home />
      <About />
      <Education />
      <Skill />
      <Project />
    </div>
  );
};

export default Main;
