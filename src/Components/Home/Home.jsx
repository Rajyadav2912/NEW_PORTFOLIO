import React from "react";
import Hero from "./Hero";
import Content from "./Content";

const Home = () => {
  return (
    <section
      className="xl:w-[80%] w-[90%] xl:h-[36rem] lg:h-[34rem] h-[32rem] xl:mt-44 md:mt-36  mt-[8.5rem] mx-auto md:gap-[1rem] gap-0 flex lg:justify-between relative"
      id="home"
    >
      <div className="xl:w-[51%] lg:w-[50%] md:w-[55%] sm:w-[72%] w-[85%] md:pt-10 sm:pt-20 pt-16 md:z-0 z-10">
        <Content />
      </div>
      <div className="xl:w-[42%] lg:w-[40%] md:w-[45%] sm:w-[60%] w-full h-full  md:right-0 sm:-right-[20%] -right-[62%]  flex md:relative absolute">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
