// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../data";
// import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Arrow from "../Assets/Images/arrow.svg";
import ALLButton from "../Button/ALLButton";

const Project = () => {
  const pro = Data.Project;
  console.log(pro);

  return (
    <div className="pt-[50px]">
      <div className="mx-auto md:max-w-[740px] sm:max-w-[630px] max-w-[380px] text-center">
        <h2 className="h2-heading">
          Work Experience & What I Have Done This Projects
        </h2>
        <h1 className="h1-heading project">My Projects</h1>
      </div>
      <div className="page-3">
        <div className="md:p-16 p-10 md:pl-[90px] sm:pl-[60px] pl-[40px] flex flex-wrap justify-center gap-8 lg:mx-0 mx-auto">
          {pro.map((data, index) => (
            <Card
              key={index}
              date={data.date}
              image={data.image}
              title={data.title}
              info={data.description}
              link={data.link}
              weblink={data.weblink}
              skill={data.skills}
            />
          ))}
        </div>

        <div className="w-[165px] mx-auto">
          <ALLButton
            text={"See More"}
            linkto={"/projects"}
            icon={<img src={Arrow} alt="arrow" loading="lazy" />}
          />
          {/* <Link to="/projects">
            <button className="w-full flex h-full py-2 px-4  text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
              See More
              <img src={Arrow} alt="arrow" loading="lazy" />
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
