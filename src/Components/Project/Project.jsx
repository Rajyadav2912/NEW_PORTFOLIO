// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../data";
// import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Arrow from "../Assets/Images/arrow.svg";

const Project = () => {
  const pro = Data.Project;

  return (
    <div className="pt-[50px]">
      <div className="mx-auto max-w-[740px] text-center">
        <h2 className="h2-heading">
          Work Experience & What I Have Done This Projects
        </h2>
        <h1 className="h1-heading project">My Projects</h1>
      </div>
      <div className="page-3">
        <div className="p-16 pl-[90px] flex flex-wrap gap-8">
          {pro.map((data, index) => (
            <Card
              key={index}
              date={data.date}
              image={data.image}
              title={data.title}
              info={data.description}
              link={data.weblink}
              skill={data.skills}
            />
          ))}
        </div>

        <div className="w-[155px] mx-auto">
          <Link to="/projects">
            <button className="w-full flex h-full py-2 px-4  text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
              See More
              <img src={Arrow} alt="arrow" loading="lazy" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
