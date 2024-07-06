import React, { useState } from "react";

const Filter = ({ isMenu, setIsMenu, data }) => {
  return (
    <div className="hidden md:max-w-[650px] mx-auto md:flex justify-center gap-8 mt-4 bg-slate-200 p-4 rounded-full">
      {data.map((item) => {
        return (
          <button
            key={item.id}
            className="border-2 bg-slate-500 text-white rounded-full py-2 px-4 shadow-2xl"
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
