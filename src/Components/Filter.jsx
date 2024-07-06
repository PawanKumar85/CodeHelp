import React from "react";

const Filter = ({ item }) => {
  return (
    <div className="">
      <button className="py-2 md:px-4  border-gray-600 border-3 rounded-full bg-gray-500 hover:bg-gray-600 duration-150 text-white font-semibold shadow-lg">
        {item.title}
      </button>
    </div>
  );
};

export default Filter;
