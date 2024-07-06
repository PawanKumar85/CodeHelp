import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = ({ isMenu, setIsMenu, data, category, setCategory }) => {
  return (
    <div className="bg-blue-950 w-full p-4 shadow-xl">
      <nav className="max-w-[80%] flex justify-between   md:justify-center mx-auto">
        <h1 className="italic text-2xl font-bold text-white cursor-pointer">
          Top Courses
        </h1>

        <div
          className="md:hidden duration-200"
          onClick={() => {
            console.log("Click", isMenu);
            setIsMenu(!isMenu);
          }}
        >
          {isMenu ? (
            <ImCross fontSize={30} className="text-white" />
          ) : (
            <TiThMenu fontSize={30} className="text-white" />
          )}
        </div>
      </nav>
      {isMenu ? (
        <div className="flex flex-col gap-3 mt-4 p-4 items-center translate-x-4 md:hidden">
          {data.map((item) => {
            return (
              <li
                key={item.id}
                className={`w-[100%] list-none  border-b-2 border-gray-500  p-3 text-center
                  ${category === item.title ? "italic opacity-[110%] text-blue-950 bg-gray-200 shadow-xl font-bold duration-200 transition-all rounded-xl ease-out" : "text-white"}
                  `}
                onClick={() => setCategory(item.title)}
              >
                {item.title}
              </li>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
