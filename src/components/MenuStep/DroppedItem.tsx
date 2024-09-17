import { XCircleIcon } from "@heroicons/react/24/solid";
import { DroppedItemProps } from "../../propTypes/dropAreaPropTypes";
import { motion } from "framer-motion";

export function DroppedItem({ id, name, cost, removeItem }: DroppedItemProps) {
  return (
    <motion.div
      className="p-2 rounded-xl bg-coral text-lightBeige font-bold"
      initial={{ opacity: 0, scale: 0.9, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      layout
    >
      <div className="flex justify-between items-center mb-4">
        <span className="bg-lightBeige text-coral rounded-full px-3 py-1 text-sm font-bold shadow-md">
          ${cost.toFixed(2)}
        </span>

        <button
          onClick={() => removeItem(id)}
          className="text-white hover:text-white/90"
        >
          <XCircleIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex justify-center items-center">
        <span className="text-lg">{name}</span>
      </div>
    </motion.div>
  );
}
