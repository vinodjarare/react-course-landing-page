import React from "react";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="container  p-6  sm:py-12 lg:py-24">
      <h1 className="text-4xl font-bold leading-none sm:text-4xl sm:w-1/5 md:w-4/5 mx-auto lg:w-full text-center">
        Courses
      </h1>
      <div className="flex justify-center items-center gap-4 mx-auto lg:justify-evenly py-6 flex-col lg:flex-row    ">
        <div className="flex flex-col gap-4 ">
          <Course
            title="HTML Basic"
            desc="Throughout my career, i have met some incredible talents. I have to say the Web Team ranks on top of my list."
          />
          <Course
            title="Python Basic"
            desc="Throughout my career, i have met some incredible talents. I have to say the Web Team ranks on top of my list."
          />
          <Course
            title="JavaScript Basic"
            desc="Throughout my career, i have met some incredible talents. I have to say the Web Team ranks on top of my list."
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <Course
            title="UX Design"
            desc="Throughout my career, i have met some incredible talents. I have to say the Web Team ranks on top of my list."
          />
          <Course
            title="React Basic"
            desc="Throughout my career, i have met some incredible talents. I have to say the Web Team ranks on top of my list."
          />
          <Course
            title="Node Basic"
            desc="Throughout my career, i have met some incredible talents. I have to say the Web Team ranks on top of my list."
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
