import React from "react";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Education from "./Education";

const Main = () => {
  return (
    <div className="flex flex-col gap-2">
      <Home />
      <About />
      <Education />
    </div>
  );
};

export default Main;
