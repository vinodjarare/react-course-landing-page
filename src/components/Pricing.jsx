import React from "react";
import Price from "./Price";

const Pricing = () => {
  const data = [
    {
      title: "Basic",
      for: "Beginners",
      features: [
        "Photoshop 5.5+ PSD File",
        "Organized Layers and Folders",
        "Vector Based Graphics",
        "Documentation",
        "Free Fonts",
      ],
      price: 100,
    },
    {
      title: "Primium",
      for: "Advanced",
      features: [
        "Photoshop 5.5+ PSD File",
        "Organized Layers and Folders",
        "Vector Based Graphics",
        "Documentation",
        "Free Fonts",
      ],
      price: 300,
    },
    {
      title: "Gold",
      for: "Professionals",
      features: [
        "Photoshop 5.5+ PSD File",
        "Organized Layers and Folders",
        "Vector Based Graphics",
        "Documentation",
        "Free Fonts",
      ],
      price: 500,
    },
  ];
  return (
    <div className="container  p-6  sm:py-12 lg:pb-24">
      <h2 className="text-4xl font-bold leading-none sm:text-4xl sm:w-1/5 md:w-4/5 mx-auto lg:w-full text-center mb-8">
        Ready to start?
      </h2>
      <div className="w-full flex flex-col lg:flex-row gap-3 justify-center items-center">
        {data?.map((price, index) => (
          <Price key={index} price={price} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
