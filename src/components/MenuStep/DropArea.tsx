import { motion } from "framer-motion";
import { MenuItem } from "./MenuSelection";
import { RefObject } from "react";

type DropAreaProps = {
  dropAreaRef: RefObject<HTMLDivElement>;
  isOverDropArea: boolean;
  setIsOverDropArea: (value: boolean) => void;
  isDragging: boolean;
  droppedItems: MenuItem[];
};

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
      className="border-2 rounded-lg p-10 text-center text-gray-500 min-h-[150px]"
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
        console.log("Item dropped");
      }}
      animate={{
        borderColor: isDragging
          ? "#F59E0B"
          : isOverDropArea
          ? "#38A169"
          : "#CBD5E0",
        backgroundColor: isDragging ? "rgba(255, 165, 0, 0.1)" : "#FFF",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {isOverDropArea
        ? "Release to add spend"
        : "Drag and drop here to add spend"}

      <div className="mt-4">
        {droppedItems.map((item) => (
          <div
            key={item.id}
            className="text-center p-2 bg-gray-100 rounded-lg mb-2 pointer-events-none"
          >
            {item.name} - ${item.cost.toFixed(2)}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
