import { motion } from "framer-motion";
import { ProgressTrackerProps } from "../propTypes/progressTrackerPropTypes";

export default function ProgressTracker({ step }: ProgressTrackerProps) {
  return (
    <div className="flex justify-center items-center">
      {["1", "2", "3", "4"].map((num, index) => (
        <div key={num} className="flex items-center">
          <motion.div
            className={`rounded-full h-10 w-10 flex items-center justify-center ${
              step >= index + 1 ? "bg-darkGreen" : "bg-gray-300"
            }`}
            animate={{
              backgroundColor: step >= index + 1 ? "#425f57" : "#CBD5E0",
            }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">{num}</span>
          </motion.div>
          {index < 3 && (
            <motion.div
              className={`h-1 ${
                step > index + 1 ? "bg-darkGreen" : "bg-gray-300"
              }`}
              style={{ width: "50px" }}
              animate={{
                backgroundColor: step > index + 1 ? "#425f57" : "#CBD5E0",
              }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
