import React from "react";

const Banners = () => {
  return (
    <div className="scroll-container w-full h-48 flex overflow-x-auto">
      <div className="inline-flex animate-marquee">
        <div className="flex-shrink-0 h-32 w-32 bg-gray-200 m-4"></div>
        <div className="flex-shrink-0 h-32 w-32 bg-gray-200 m-4"></div>
        <div className="flex-shrink-0 h-32 w-32 bg-gray-200 m-4"></div>
        <div className="flex-shrink-0 h-32 w-32 bg-gray-200 m-4"></div>
        {/* // add more content here */}
      </div>
    </div>
  );
};

export default Banners;
