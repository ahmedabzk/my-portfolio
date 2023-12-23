import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

function Button({ active, selected, children }) {
  const buttonClass = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selected}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 mt-2 mr-3 bg-purple-500"
      ></motion.div>
    </button>
  );
}

export default Button;
