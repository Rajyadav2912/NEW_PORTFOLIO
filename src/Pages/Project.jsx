import Data from "../data";
import Card from "../Components/Card/Card";
import { useState } from "react";
import Filter from "../Components/Filter/Filter";
import filterData from "../filter";
import ALLProject from "../Components/Project/ALLProject";

const Project = () => {
  // const pro = Data.Projects;use
  const [proData, setProData] = useState(Data.Projects);

  const [category, setCategory] = useState(filterData[0].title);
  //  const [category, setCategory] = useState(Data.Project.category)
  // console.log(category);

  // const filterItems = (category) => {
  //   const Items = proData.filter((val) => val.category === category);
  //   setProData(Items);
  //   console.log(Items);
  // };



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
          <Filter
            filterData={filterData}
            // filterItems={filterItems}
            category={category}
            setCategory={setCategory}
          />
        </div>

        {/* <div className="lg:p-14 p-10 lg:pl-[75px] md:pl-[60px] pl-[40px] flex flex-wrap items-center justify-center gap-8"> */}
        <ALLProject proData={proData} category={category} />

        {/* {proData.map(
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
                category={category}
              />
            )
            // <Cards />
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Project;
