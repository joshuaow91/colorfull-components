import { useRef, useState } from "react";
import MenuSelection from "./MenuItems";
import DropArea from "./DropArea";
import SpendTrack from "./SpendTrackGradientBar";
import { MenuStepProps } from "../../propTypes/menuStepPropTypes";
import { MenuItem } from "../../types/menuItemTypes";
import { motion } from "framer-motion";
import {
  ListBulletIcon,
  PlusCircleIcon,
  TrashIcon,
  ViewColumnsIcon,
} from "@heroicons/react/16/solid";

export default function MenuStep({
  menuItems,
  budget,
  spend,
  setSpend,
  setOrderedItems,
}: MenuStepProps) {
  const dropAreaRef = useRef(null);
  const [isOverDropArea, setIsOverDropArea] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [droppedItems, setDroppedItems] = useState<MenuItem[]>([]);
  const [isGridView, setIsGridView] = useState(true);

  const calculateProgress = (newSpend: number) => {
    return (newSpend / budget) * 100;
  };

  const handleDrop = (menu: MenuItem) => {
    const newSpend = spend + menu.cost;
    const newDroppedItems = [...droppedItems, menu];
    setSpend(newSpend);
    setOrderedItems(newDroppedItems);
    setDroppedItems(newDroppedItems);
  };

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  const removeItem = (itemId: number) => {
    const filteredItems = droppedItems.filter((item) => item.id !== itemId);
    const totalSpend = filteredItems.reduce((sum, item) => sum + item.cost, 0);
    setDroppedItems(filteredItems);
    setSpend(totalSpend);
    setOrderedItems(filteredItems);
  };

  const resetCart = () => {
    setDroppedItems([]);
    setSpend(0);
    setOrderedItems([]);
  };

  const isOverBudget = spend > budget;
  const progress = calculateProgress(spend);

  return (
    <div className="relative">
      <h2 className="font-bold block font-righteous text-4xl text-darkGreen tracking-tighter text-center mb-6">
        Choose Menu Item(s)
      </h2>

      <div className="sticky top-0 z-10 bg-lightGreen/30 backdrop-blur-md py-2">
        <SpendTrack
          progress={progress}
          spend={spend}
          overBudget={isOverBudget}
          budget={budget}
        />
      </div>

      <div className="flex justify-end gap-2 mb-4">
        <button
          onClick={toggleView}
          className="flex items-center px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition duration-200"
        >
          {isGridView ? (
            <>
              <ListBulletIcon className="h-5 w-5 mr-2" />
              List View
            </>
          ) : (
            <>
              <ViewColumnsIcon className="h-5 w-5 mr-2" />
              Grid View
            </>
          )}
        </button>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-4 gap-2 mb-4">
          {menuItems.map((menuItem) => (
            <MenuSelection
              key={menuItem.id}
              menu={menuItem}
              handleDrop={handleDrop}
              dropAreaRef={dropAreaRef}
              setIsDragging={setIsDragging}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-y-2 mb-4">
          {menuItems.map((menuItem) => (
            <motion.div
              key={menuItem.id}
              className="flex justify-between w-full items-center bg-offWhite text-coral font-semibold p-4 rounded-xl shadow-md"
              whileHover={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-x-4">
                <span className="text-lg font-bold bg-coral text-offWhite p-2 px-4 rounded-md">
                  ${menuItem.cost.toFixed(2)}
                </span>
                <span className="text-xl">{menuItem.name} </span>
              </div>
              <button
                onClick={() => handleDrop(menuItem)}
                className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-green-600"
              >
                <PlusCircleIcon className="h-4 w-4 mr-2" /> Add
              </button>
            </motion.div>
          ))}
        </div>
      )}

      <DropArea
        dropAreaRef={dropAreaRef}
        isOverDropArea={isOverDropArea}
        setIsOverDropArea={setIsOverDropArea}
        isDragging={isDragging}
        droppedItems={droppedItems}
        removeItem={removeItem}
        isListView={!isGridView}
      />

      <div className="flex justify-between mt-4">
        <button
          onClick={resetCart}
          className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          <TrashIcon className="h-5 w-5 mr-2" />
          Clear Cart
        </button>
      </div>
    </div>
  );
}
