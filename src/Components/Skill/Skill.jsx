import React from "react";
import Data from "../../data";
import Tilt from "../Tilt/Tilt";

const Skill = () => {
  const skill = Data.Skill;

  return (
    <div>
      <div className="mx-auto max-w-[380px] text-center">
        <h2 className="h2-heading">I Have Learn This Skills</h2>
        <h1 className="h1-heading">Skills</h1>
      </div>
      <div className="page-1">
        <Tilt>
          <div className="hover:border border-indigo-700  hover:shadow-lg hover:shadow-indigo-700 rounded-3xl  w-[730px] h-[450px] flex flex-wrap gap-8 p-6">
            {skill.map((item, index) => {
              return (
                <div className="box" key={index}>
                  <img src={item.image} alt="img" />
                </div>
              );
            })}
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Skill;
