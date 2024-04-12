import React from "react";
import Data from "../../data";
import Tilt from "../Tilt/Tilt";

const Skill = () => {
  const skill = Data.Skill;

  return (
    <div className="lg:px-0 sm:px-6 px-2">
      <div className="mx-auto max-w-[380px] text-center">
        <h2 className="h2-heading">I Have Learn This Skills</h2>
        <h1 className="h1-heading skill">Skills</h1>
      </div>
      <div className="page-1">
        <Tilt>
          <div className="hover:border border-orange-300 hover:shadow-lg hover:shadow-orange-300 rounded-3xl xl:w-[730px] md:w-[600px] sm:w-[540px] w-[360px] xl:h-[450px] md:h-[400px] sm:h-[360px] h-[450px] flex flex-wrap justify-between md:gap-8 gap-4 md:p-6 p-5">
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
