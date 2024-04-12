import Data from "../data";
import Card from "../Components/Card/Card";
import { useState } from "react";
import Filter from "../Components/Filter/Filter";
import filterData from "../filter";

const Project = () => {
  const pro = Data.Projects;
  const [category, setCategory] = useState(filterData[0].title);

  return (
    <div className="py-[90px]">
      <div className="mx-auto max-w-[740px] text-center">
        <h2 className="h2-heading">
          Work Experience & What I Have Done This Projects
        </h2>
        <h1 className="h1-heading project">My Projects</h1>
      </div>
      <div className="page-3 pro-page3">
        <div className="mt-6">
          <Filter category={category} setCategory={setCategory} />
        </div>
        <div className="lg:p-14 p-10 lg:pl-[90px] md:pl-[60px] pl-[40px] flex flex-wrap items-center justify-center gap-8">
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
            // <Cards />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
