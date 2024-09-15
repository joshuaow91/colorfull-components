import { useRef, useState } from "react";
import MenuSelection from "./MenuItems";
import DropArea from "./DropArea";
import SpendTrack from "./SpendTrackGradientBar";
import { MenuStepProps } from "../../types/menuStepPropTypes";
import { MenuItem } from "../../types/menuItemTypes";
import {
  ListBulletIcon,
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

  const resetCart = () => {
    setDroppedItems([]);
    setSpend(0);
    setOrderedItems([]);
  };

  const isOverBudget = spend > budget;
  const progress = calculateProgress(spend);

  return (
    <div>
      <h2 className="font-bold block font-righteous text-4xl text-darkGreen tracking-tighter text-center mb-6">
        Choose Item(s)
      </h2>
      <SpendTrack
        progress={progress}
        spend={spend}
        overBudget={isOverBudget}
        budget={budget}
      />

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
        <div className="space-y-2 mb-4">
          {menuItems.map((menuItem) => (
            <div
              key={menuItem.id}
              className="flex justify-between items-center bg-coral text-lightBeige p-4 rounded-xl shadow-md"
            >
              <span className="text-xl">{menuItem.name}</span>
              <span className="text-lg font-bold">
                ${menuItem.cost.toFixed(2)}
              </span>
              <button
                onClick={() => handleDrop(menuItem)}
                className="flex items-center bg-lightBeige text-coral px-3 py-1 rounded-full shadow-md hover:bg-gray-200"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      )}

      <DropArea
        dropAreaRef={dropAreaRef}
        isOverDropArea={isOverDropArea}
        setIsOverDropArea={setIsOverDropArea}
        isDragging={isDragging}
        droppedItems={droppedItems}
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
