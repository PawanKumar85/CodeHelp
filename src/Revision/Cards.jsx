import React, { useState } from "react";

import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const Cards = ({ item }) => {
  const [read, setRead] = useState(false);
  const [like, setLike] = useState(false);
  const des = `${item.description.substring(0, 100)}...`;

  const likeColor = "text-red-600";
  const dislikeColor = "text-red-300";

  const liked = () => {
    setLike(!like);
    like ? toast.warning("Like Removed") : toast.success("Like Successfully");
  };

  const image = item.image;

  return (
    <div>
      <div className="relative flex w-80 min-h-[350px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 my-4 h-40   bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src={image.url} alt={image.alt} />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {item.title}
            </h5>
            <div
              className="p-3 rounded-full bg-gray-200 shadow-lg cursor-pointer"
              onClick={liked}
            >
              <FaHeart
                fontSize={25}
                className={`${like ? likeColor : dislikeColor}`}
              />
            </div>
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {read ? item.description : des}
            <span
              className="text-sm text-blue-500 font-semibold cursor-pointer"
              onClick={() => setRead(!read)}
            >
              {read ? "Show Less" : "Read More"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
