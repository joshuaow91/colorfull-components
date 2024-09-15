import { motion } from "framer-motion";
import { WrapperProps } from "../propTypes/wrapperPropTypes";

export default function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <motion.section
      className={`bg-lightGreen rounded-3xl mt-8 p-8 w-full max-w-4xl mx-auto ${
        className ? className : ""
      }`}
    >
      {children}
    </motion.section>
  );
}
