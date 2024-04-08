import React from "react";
import Hero from "./Hero";
import Content from "./Content";

const Home = () => {
  return (
    <section
      className="w-[80%] h-[38rem] mt-44 mx-auto flex justify-between"
      id="home"
    >
      <div className="w-[45%] pt-10">
        <Content />
      </div>
      <div className="w-[42%] flex relative">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
