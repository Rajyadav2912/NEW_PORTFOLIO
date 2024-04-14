import React from "react";

const Filter = (props) => {
  let category = props.category;
  let setCategory = props.setCategory;
  let filterData = props.filterData;

  // console.log(Data);

  function filterHanlder(title) {
    setCategory(title);
    console.log(title);
  }

  return (
    <div
      className="md:w-11/12 w-[94%] flex flex-wrap lg:max-w-[55%] md:max-w-[75%] sm:max-w-[95%] max-w-[85%] space-x-4 md:gap-x-3 gap-x-1 gap-y-3 mx-auto 
    py-3 justify-center border rounded-3xl md:px-3 px-1"
    >
      {filterData.map((data) => (
        <button
          className={`text-lg lg:px-3 px-1 rounded-md font-medium 
               ${
                 category === data.type
                   ? "bg-[#3ae3ec] p-2 px-4 text-black rounded-full shadow-blue-700"
                   : "bg-transparent"
               } transition-all duration-700`}
          key={data.id}
          onClick={() => filterHanlder(data.type)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
