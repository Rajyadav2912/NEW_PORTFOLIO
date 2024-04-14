import React from "react";
import Card from "../Card/Card";

const ALLProject = ({ proData, category }) => {
  const allProject = [];

  for (let i = 0; i < proData.length; i++) {
    allProject.push(proData[i]);
  }

  console.log(allProject);

  return (
    <div>
      {allProject.map(
        (data, index) => (
          // console.log(data)
          <Card
            key={index}
            date={data.date}
            image={data.image}
            title={data.title}
            info={data.description}
            link={data.weblink}
            skill={data.skills}
          />
        )
        // <Cards />
      )}
    </div>
  );
};

export default ALLProject;
