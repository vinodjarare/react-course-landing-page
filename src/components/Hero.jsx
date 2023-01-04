import hero from "../assets/Business_SVG.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100 h-full w-full">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={hero}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl w-4/5 mx-auto lg:w-full">
              Lorem Ipsum
              <span className="text-yellow-500">senectus</span>dolar life.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-3 text-lg font-semibold  rounded bg-yellow-500 dark:text-white"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
