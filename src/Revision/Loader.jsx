import "./Loader.css";
const Loader = () => {
  return (
    <div className="flex items-center h-80 justify-center gap-3">
      <div className="loader">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
        <div className="bar7"></div>
        <div className="bar8"></div>
        <div className="bar9"></div>
        <div className="bar10"></div>
        <div className="bar11"></div>
        <div className="bar12"></div>
      </div>
        <div className="text-gray-500 font-bold">Loading....</div>
    </div>
  );
};

export default Loader;
