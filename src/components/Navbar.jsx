import { CiLight, CiDark } from "react-icons/ci";
import { MdSort } from "react-icons/md";
import { motion } from "framer-motion";
const Navbar = ({ dark, setDark, isOpen, setIsOpen }) => {
  return (
    <header className="sm:h-16 bg-white text-inherit w-full flex justify-between px-6 items-center dark:bg-slate-800 dark:text-white box-border shadow-md dark:border-b-2 dark:border-gray-700">
      <h2 className="text-inherit font-medium text-3xl text-yellow-5~00">
        Course Karo
      </h2>
      <div className="flex item-center justify-center gap-6">
        <motion.button
          onClick={() => setDark(!dark)}
          className="text-3xl cursor-pointer"
          whileTap={{ rotate: [0, 90, 30, 0], transition: { duration: 0.6 } }}
        >
          {dark ? <CiLight /> : <CiDark />}
        </motion.button>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.7 }}
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdSort />
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
