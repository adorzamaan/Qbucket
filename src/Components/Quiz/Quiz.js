import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { id, name, logo } = quiz;
  return (
    <div>
      <div className="max-w-xs pb-3 rounded-md shadow-md bg-gray-800">
        <img
          src={logo}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 flex justify-between px-4 items-center">
          <span className="block text-xs font-bold tracking-widest uppercase text-white ">
            {name}
          </span>
          <Link
            to={`/quiz/${id}`}
            type="button"
            className="px-3 py-1 font-semibold rounded-full bg-purple-500 text-white"
          >
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
