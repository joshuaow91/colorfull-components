import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { RefObject } from "react";

type DropAreaProps = {
  dropAreaRef: RefObject<HTMLDivElement>;
  isOverDropArea: boolean;
  setIsOverDropArea: (value: boolean) => void;
  droppedItems: MenuItem[];
};

export default function DropArea({
  dropAreaRef,
  isOverDropArea,
  setIsOverDropArea,
  droppedItems,
}: DropAreaProps) {
  return (
    <motion.div
      ref={dropAreaRef}
      className={`border-2 ${
        isOverDropArea ? "border-green-500" : "border-gray-400"
      } rounded-lg p-10 text-center text-gray-500 min-h-[150px]`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsOverDropArea(true);
        console.log("Dragging over drop area");
      }}
      onDragLeave={() => {
        setIsOverDropArea(false);
        console.log("Left drop area");
      }}
      whileHover={{ scale: 1.05 }}
    >
      {isOverDropArea
        ? "Release to add spend"
        : "Drag and drop here to add spend"}

      <div className="mt-4">
        {droppedItems.map((item) => (
          <div
            key={item.id}
            className="text-center p-2 bg-gray-100 rounded-lg mb-2"
          >
            {item.name} - ${item.cost}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
