import { useRef, useState } from "react";
import DropArea from "./DropArea";
import SpendTrack from "./SpendTrackGradientBar";
import { MenuStepProps } from "../../interfaces/menuInterfaces";
import { MenuItem } from "../../types/menuItemTypes";
import {
  ListBulletIcon,
  TrashIcon,
  ViewColumnsIcon,
} from "@heroicons/react/16/solid";
import MenuListView from "./MenuListView";
import MenuGridView from "./MenuGridView";

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
        <MenuGridView
          menuItems={menuItems}
          handleDrop={handleDrop}
          dropAreaRef={dropAreaRef}
          setIsDragging={setIsDragging}
        />
      ) : (
        <MenuListView menuItems={menuItems} handleDrop={handleDrop} />
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
