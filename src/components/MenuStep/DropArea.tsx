import { motion } from "framer-motion";
import { DropAreaProps } from "../../propTypes/dropAreaPropTypes";
import { DroppedItem } from "./DroppedItem";
import {
  handleDrop,
  handleDragLeave,
  handleDragOver,
} from "../../utils/dragAndDropHandling";

export default function DropArea({
  dropAreaRef,
  isOverDropArea,
  setIsOverDropArea,
  isDragging,
  droppedItems,
  removeItem,
  isListView,
}: DropAreaProps) {
  return (
    <motion.div
      ref={dropAreaRef}
      className="border-4 mt-8 border-dashed rounded-xl p-10 flex justify-center items-center text-darkGreen min-h-[150px]"
      onDragOver={(e) => handleDragOver(e, setIsOverDropArea)}
      onDragLeave={() => handleDragLeave(setIsOverDropArea)}
      onDrop={(e) => handleDrop(e, setIsOverDropArea)}
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
      {droppedItems.length === 0 && (
        <span className="font-bold">
          {isOverDropArea
            ? "Release to add spend"
            : isListView
            ? "Add an item above to your cart"
            : "Drag and drop here to add to your cart"}
        </span>
      )}

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {droppedItems.map((item) => (
          <DroppedItem
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            removeItem={removeItem}
          />
        ))}
      </div>
    </motion.div>
  );
}
