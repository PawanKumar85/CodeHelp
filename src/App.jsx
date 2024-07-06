import { useEffect, useState } from "react";
import Filter from "./Revision/Filter";
import Navbar from "./Revision/Navbar";
import Body from "./Revision/Body";
import Loader from "./Revision/Loader";
import { toast } from "react-toastify";
import data from './Data/data.json'

const App = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const url = "https://codehelp-apis.vercel.app/api/get-top-courses";

  const [course, setCourse] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const req = await fetch(url);
      const res = await req.json();
      // console.log(res.data);
      setCourse(res.data);
    } catch (error) {
      toast.error("Something wents wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar isMenu={isMenu} setIsMenu={setIsMenu} data={data}/>
      <Filter isMenu={isMenu} setIsMenu={setIsMenu} data={data}/>
      {loading ? <Loader /> : <Body courses={course} />}
    </div>
  );
};

export default App;
