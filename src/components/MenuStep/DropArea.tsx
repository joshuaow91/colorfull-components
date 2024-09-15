import { motion } from "framer-motion";
import { DropAreaProps } from "../../propTypes/dropAreaPropTypes";

export default function DropArea({
  dropAreaRef,
  isOverDropArea,
  setIsOverDropArea,
  isDragging,
  droppedItems,
}: DropAreaProps) {
  return (
    <motion.div
      ref={dropAreaRef}
      className="border-2 border-dashed rounded-lg p-10 text-center text-gray-500 min-h-[150px]"
      onDragOver={(e) => {
        e.preventDefault();
        setIsOverDropArea(true);
      }}
      onDragLeave={() => {
        setIsOverDropArea(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        setIsOverDropArea(false);
      }}
      animate={{
        borderColor: isDragging
          ? "#F59E0B"
          : isOverDropArea
          ? "#38A169"
          : "#CBD5E0",
        backgroundColor: isDragging ? "rgba(255, 165, 0, 0.1)" : "#edf7e1",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {isOverDropArea
        ? "Release to add spend"
        : "Drag and drop here to add spend"}

      <div className="mt-4 grid grid-cols-4 gap-4">
        {droppedItems.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-coral text-lightBeige font-bold relative"
          >
            <span className="absolute top-2 right-2 bg-lightBeige text-coral rounded-full px-3 py-1 text-sm font-bold shadow-md">
              ${item.cost.toFixed(2)}
            </span>
            <span className="text-lg mt-8">{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
