import { motion } from "framer-motion";
import { formatCurrency } from "../../utils/formatCurrency";

type SpendTrackProps = {
  progress: number;
  spend: number;
  overBudget: boolean;
  budget: number | null;
};

export default function SpendTrack({
  progress,
  spend,
  overBudget,
  budget,
}: SpendTrackProps) {
  return (
    <div className="relative w-full mb-8">
      {budget !== null && (
        <motion.div
          className="text-lg font-bold text-darkGreen mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          Budget: ${formatCurrency(budget)}
        </motion.div>
      )}

      <div className="w-full h-8 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-400 to-green-500 rounded-full"
          key={progress}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 flex justify-center items-center h-full text-white font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
          >
            ${formatCurrency(spend)}
          </motion.div>
        </motion.div>

        {overBudget && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-red-500 text-white flex items-center justify-center rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            Over Budget! Spend: ${formatCurrency(spend)}
          </motion.div>
        )}
      </div>
    </div>
  );
}
