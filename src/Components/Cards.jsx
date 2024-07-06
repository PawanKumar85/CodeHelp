import React from "react";
import Card from "./Card";


const Cards = ({ courses }) => {
  const allCourses = [];

  const getCourses = () => {
    Object.values(courses).forEach((courseCat) => {
      courseCat.forEach((course) => {
        allCourses.push(course);
      });
    });

    return allCourses;
  };
  return (
   <div className="max-w-[50%] md:max-w-[1080px] mx-auto md:bg-slate-300 p-6 rounded-xl shadow-xl">
     <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-4">
      {
        getCourses().map((item,index) => {
         return <Card key={index} item={item} />
        })
      }
    </div>
   </div>
  );
};

export default Cards;
