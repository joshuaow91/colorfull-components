import { motion } from "framer-motion";
import { ProgressTrackerProps } from "../propTypes/progressTrackerPropTypes";

export default function ProgressTracker({ step }: ProgressTrackerProps) {
  const steps = [
    "Budget",
    "Restaurant",
    "Menu Items",
    "Review",
  ];

  return (
    <div className="flex justify-center w-full">
      <ol className="flex items-center text-xs text-gray-900 font-medium sm:text-base max-w-4xl w-full">
        {steps.map((label, index) => (
          <li
            key={index}
            className={`relative flex-1 flex flex-col items-center ${
              index <= step - 1 ? "text-darkGreen" : "text-gray-900"
            } after:content-[''] after:w-full after:h-0.5 ${
              index < step - 1 ? "after:bg-darkGreen" : "after:bg-gray-200"
            } after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-10 md:after:left-28 ${
              index === steps.length - 1 ? "after:w-0 after:hidden" : ""
            }`}
          >
            <motion.div
              className="block whitespace-nowrap z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.span
                className={`w-6 h-6 ${
                  index <= step - 1
                    ? "bg-darkGreen border-transparent text-offWhite"
                    : "bg-offWhite border-2 border-darkGreen text-darkGreen"
                } rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10`}
                animate={{
                  scale: index === step - 1 ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {index + 1}
              </motion.span>
              <motion.div
                className="text-center"
                animate={{ opacity: index <= step - 1 ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
              >
                {label}
              </motion.div>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}
