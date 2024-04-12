import React from "react";
import filterData from "../../filter";

const Filter = (props) => {
  let category = props.category;
  let setCategory = props.setCategory;

  // console.log(Data);

  function filterHanlder(title) {
    setCategory(title);
  }

  return (
    <div
      className="md:w-11/12 w-[90%] flex flex-wrap max-w-max space-x-4 md:gap-x-3 gap-x-1 mx-auto 
    py-3 justify-center border rounded-3xl md:px-3 px-1"
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
          className={`text-lg px-3 rounded-md font-medium 
               ${
                 category === data.title
                   ? "bg-[#3ae3ec] p-2 px-4 text-black rounded-full shadow-blue-700"
                   : "bg-transparent"
               } transition-all duration-700`}
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
