import { motion } from "framer-motion";

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <motion.section
      className={`bg-lightGreen rounded-3xl min-w-80 max-w-5xl mx-auto${className}`}
    >
      {children}
    </motion.section>
  );
}
