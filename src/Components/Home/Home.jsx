import React from "react";
import Hero from "./Hero";
import Content from "./Content";

const Home = () => {
  return (
    <section
      className="xl:w-[80%] border w-[90%] xl:h-[38rem] h-[34rem] xl:mt-44 mt-36 mx-auto flex justify-between"
      id="home"
    >
      <div className="xl:w-[45%] w-[50%] border pt-10">
        <Content />
      </div>
      <div className="xl:w-[42%] w-[40%]  border flex relative">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
