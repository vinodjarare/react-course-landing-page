import React from "react";

const Course = ({ title, desc }) => {
  return (
    <div className="py-2 px-4 bg-gray-100 dark:bg-gray-700 dark:hover:bg-yellow-500 rounded-md w-full hover:bg-yellow-500 hover:text-white transition ease-linear">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-xl">{desc}</p>
    </div>
  );
};

export default Course;
