import { motion } from "framer-motion";
import { formatCurrency } from "../../utils/formatCurrency";
import { SpendTrackProps } from "../../propTypes/spendTrackPropTypes";

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

      <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-colorfull-gradient rounded-full"
          style={{ width: `${progress}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.5 }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center h-full text-darkGreen font-bold"
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
