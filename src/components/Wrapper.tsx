import { motion } from "framer-motion";
import { WrapperProps } from "../propTypes/wrapperPropTypes";

const openAnimation = {
  clipPath: `circle(150% at 50% 50%)`,
  transition: {
    type: "spring",
    stiffness: 20,
    restDelta: 2,
    duration: 1,
  },
};

export default function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <motion.section
      className={`bg-lightGreen rounded-3xl mt-4 p-4 sm:p-8 w-full max-w-4xl mx-auto relative ${
        className ? className : ""
      }`}
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={openAnimation}
    >
      {children}
    </motion.section>
  );
}
