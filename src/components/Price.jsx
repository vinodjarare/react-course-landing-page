import { motion } from "framer-motion";

const Price = ({ price }) => {
  return (
    <div className="w-fit flex flex-col gap-2 text-7xl justify-center items-center text-justify py-4 px-4 border-2 border-gray-600 rounded-md">
      <h2 className="text-2xl font-semibold">{price.title}</h2>
      <em className="text-lg">- For {price.for}-</em>
      {price?.features?.map((feature, index) => (
        <li key={index} className="text-xl list-none text-justify">
          {feature}
        </li>
      ))}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-8 py-3 text-lg font-semibold  rounded bg-yellow-500 dark:text-white"
      >
        Buy Now ₹{price?.price}
      </motion.button>
    </div>
  );
};

export default Price;
