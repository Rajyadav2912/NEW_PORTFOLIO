import Data from "../data";
import Card from "../Components/Card/Card";
// import { useState } from "react";
import Filter from "../Components/Filter/Filter";

const Project = () => {
  const pro = Data.Projects;
  // const [category, setCategory] = useState([]);

  return (
    <div className="py-[90px]">
      <div className="mx-auto max-w-[740px] text-center">
        <h2 className="h2-heading">
          Work Experience & What I Have Done This Projects
        </h2>
        <h1 className="h1-heading">My Projects</h1>
      </div>
      <div className="page-3">
        <div className="mt-6">
          <Filter />
        </div>
        <div className="p-14 pl-[90px] flex flex-wrap gap-8">
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
      </div>
    </div>
  );
};

export default Project;
