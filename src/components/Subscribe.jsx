import { motion } from "framer-motion";
import subscribe from "../assets/subscribe.svg";

const Subscribe = () => {
  return (
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img
          src={subscribe}
          alt="subscribe"
          className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
      </div>
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left gap-3">
        <h2 className="text-4xl font-bold leading-none sm:text-4xl sm:w-1/5 md:w-4/5 mx-auto lg:w-full">
          Subscribe to the Class
        </h2>
        <input
          type="text"
          placeholder="Enter your name here..."
          className="py-1 px-2 border-2 border-gray-300 dark:border-gray-700 bg-transparent rounded w-full text-3xl placeholder:text-2xl outline-none"
        />
        <input
          type="text"
          placeholder="Enter your email..."
          className="py-1 px-2 border-2 border-gray-300 dark:border-gray-700 bg-transparent rounded w-full text-3xl placeholder:text-2xl outline-none"
        />
        <input
          type="text"
          placeholder="Let us know which course you want to learn"
          className="py-1 px-2 border-2 border-gray-300 dark:border-gray-700 bg-transparent rounded w-full text-3xl placeholder:text-2xl outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-3 text-lg font-semibold  rounded bg-yellow-500 dark:text-white"
        >
          Request Information
        </motion.button>
      </div>
    </div>
  );
};

export default Subscribe;
