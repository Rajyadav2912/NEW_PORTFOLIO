// import React, { useState } from "react";
import Data from "../../data";
// import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Project = () => {
  const pro = Data.Project;

  return (
    <div className="py-[50px]">
      <div className="mx-auto max-w-[740px] text-center">
        <h2 className="h2-heading">
          Work Experience & What I Have Done This Projects
        </h2>
        <h1 className="h1-heading">My Projects</h1>
      </div>
      <div className="page-3">
        <div className="p-20 pl-[90px] flex flex-wrap gap-8">
          {pro.map((data) => (
            <Card
              date={data.date}
              image={data.image}
              title={data.title}
              info={data.description}
              link={data.weblink}
              skill={data.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
