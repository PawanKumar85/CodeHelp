import Cards from "./Cards";

const Body = ({ courses, category }) => {
  const getCourses = () => {
    if (category === "All") {
      const allData = [];

      Object.values(courses).forEach((item) => {
        item.forEach((course) => {
          allData.push(course);
        });
      });

      return allData;
    } else return courses[category];
  };
  // getCourses().map((item) => console.log(item,title));
  return (
    <div className="rounded-lg flex items-center justify-center max-w-[50%] md:max-w-[1000px] mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {getCourses().map((item) => {
          return <Cards key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
