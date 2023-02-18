import React from "react";
import Banners from "../components/Banners";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Subscribe from "../components/Subscribe.jsx";
const Home = () => {
  return (
    <div className="dark:bg-light-gray h-full w-full dark:text-white text-3xl px-6">
      <Hero />
      <Banners />
      {/* subscribe form */}
      <Subscribe />
      <Courses />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
