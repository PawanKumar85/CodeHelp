import React, { useState } from "react";

const Filter = ({ data, setCategory, category }) => {

  return (
    <div className=" hidden md:max-w-[650px] mx-auto md:flex justify-center gap-8 mt-4 bg-slate-400 p-4 rounded-full">
      {data.map((item) => {
        return (
          <button
            key={item.id}
            className={`border-2  text-white rounded-full py-2 px-4
              ${
                category === item.title
                  ? "italic opacity-[110%] text-blue-950 bg-gray-200 shadow-xl font-bold duration-200 transition-all rounded-full ease-in border-2 border-blue-950"
                  : "text-white bg-blue-950"
              }
              `}
            onClick={() => setCategory(item.title)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
