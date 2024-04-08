import React from "react";
import Cards from "../Components/Experience/Cards";

const Education = () => {
  return (
    <div className="py-[90px]">
      <div className="mx-auto max-w-[380px] text-center">
        <h2 className="h2-heading">What I Have Qualification</h2>
        <h1 className="h1-heading education">My Education</h1>
      </div>
      <div className="page-3">
        <div className="p-16">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Education;
