import React from "react";
import filterData from "../../filter";

const Filter = () => {
  // let category = props.category;
  // let setCategory = props.setCategory;

  // console.log(Data);

  function filterHanlder(title) {
    setCategory(title);
  }

  return (
    <div
      className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto 
    py-4 justify-center border rounded-3xl px-4"
    >
      {/* {filterData.map((data) => {
        return (
          <button
            className={`text-lg px-2 rounded-md font-medium
             text-white bg-black hover:bg-opacity-50 border-2 
              transition-all duration-300
          ${
            category === data.title
              ? "bg-[#47fa27] bg-opacity-60 border-white"
              : "bg-opacity border-transparent"
          }`}
            key={data.id}
            onClick={() => filterHanlder(data.title)}
          >
            {data.title}
          </button>
        );
      })} */}

      {filterData.map((data) => (
        <button
          className={`text-lg px-2 rounded-md font-medium
             text-white bg-black hover:bg-opacity-50
              transition-all duration-300`}
          key={data.id}
          onClick={() => filterHanlder(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
