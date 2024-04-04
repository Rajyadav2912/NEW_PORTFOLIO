import React from "react";
import Data from "../data";
import Card from "../Components/Card/Card";

const Education = () => {
  const eduData = Data.Education;

  return (
    <div className="my-12 flex flex-col items-center">
      <h2 className="h2-heading">What I Have Qualification</h2>
      <h1 className="h1-heading">My Education</h1>
      <div className="page-3">
        {/* <Card /> */}
        {eduData.map((data, index) => (
          <Card
            key={index}
            name={data.name}
            image={data.image}
            branch={data.branch}
            standard={data.standard}
            date={data.date}
          />
          // console.log(data);
        ))}
      </div>
    </div>
  );
};

export default Education;
