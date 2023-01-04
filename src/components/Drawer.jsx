import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
const Drawer = ({ isOpen, setIsOpen }) => {
  const tap = {
    whileHover: {
      scale: 1.1,
    },
    whileTap: {
      scale: 0.8,
    },
  };
  return (
    <>
      <div
        className={
          " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  dark:bg-light-gray dark:text-white" +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-hidden h-full">
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              className="p-4 font-bold cursor-pointer text-4xl text-inherit w-10"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineArrowRight />
            </motion.button>
            <nav className="list-none ml-4">
              <li>Home</li>
              <li>Courses</li>
            </nav>
            <div className="justify-self-end ml-4 flex items-center gap-5">
              <motion.button
                variants={tap}
                whileHover="whileHover"
                whileTap="whileTap"
                className="py-2 px-4 border-none rounded-sm bg-yellow-500 text-inherit font-medium w-28"
              >
                Sign Up
              </motion.button>
              <span>OR</span>
              <motion.button
                variants={tap}
                whileHover="whileHover"
                whileTap="whileTap"
                className="py-2 px-4 border-none rounded-sm bg-yellow-500 text-inherit font-medium w-28"
              >
                Sign in
              </motion.button>
            </div>
          </div>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </div>
    </>
  );
};

export default Drawer;
