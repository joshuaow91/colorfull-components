import { useState, useRef } from "react";
import { useMotionValue } from "framer-motion";
import BudgetInput from "./BudgetInput";
import DropArea from "./DropArea";
import SpendTrack from "./SpendTrackGradientBar";
import MenuItem, { MenuItem as MenuItemType } from "./MenuItem";

export default function OrderSpendTracker() {
  const [budget, setBudget] = useState<number | null>(null);
  const [tempBudget, setTempBudget] = useState<number | null>(null);
  const [spend, setSpend] = useState(0);
  const [progress, setProgress] = useState(0);
  const [overBudget, setOverBudget] = useState(false);
  const [droppedItems, setDroppedItems] = useState<MenuItemType[]>([]);
  const [resetKey, setResetKey] = useState(0);

  const x = useMotionValue(0);
  const dropAreaRef = useRef(null);
  const [isOverDropArea, setIsOverDropArea] = useState(false);

  const handleBudgetSubmit = () => {
    if (tempBudget && tempBudget > 0) {
      setBudget(tempBudget);
      setProgress((spend / tempBudget) * 100);
      setOverBudget(false);
    }
  };

  const handleDrop = (menu: MenuItemType) => {
    if (budget !== null) {
      const newSpend = spend + menu.cost;
      if (newSpend <= budget) {
        setSpend(newSpend);
        setProgress((newSpend / budget) * 100);
        setOverBudget(false);
      } else {
        setSpend(newSpend);
        setProgress(100);
        setOverBudget(true);
      }
      setDroppedItems((prev) => [...prev, menu]);
    }
  };

  const handleReset = () => {
    setBudget(null);
    setTempBudget(null);
    setSpend(0);
    setProgress(0);
    setOverBudget(false);
    setDroppedItems([]);
    setResetKey((prevKey) => prevKey + 1);
    x.set(0);
  };

  const menuItems: MenuItemType[] = [
    { id: 1, name: "Drink", cost: 2 },
    { id: 2, name: "Side", cost: 3 },
    { id: 3, name: "Dessert", cost: 5 },
  ];

  return (
    <div className="p-8 mx-auto text-zinc-900">
      <h2 className="text-4xl font-righteous text-darkGreen font-bold">
        Budget Tracker
      </h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white py-2 px-4 rounded-lg"
        >
          Reset
        </button>
      </div>

      <BudgetInput
        tempBudget={tempBudget}
        setTempBudget={setTempBudget}
        handleBudgetSubmit={handleBudgetSubmit}
      />

      {budget !== null && (
        <SpendTrack
          progress={progress}
          spend={spend}
          overBudget={overBudget}
          budget={budget}
        />
      )}

      <h3 className="text-xl mb-2">Drag and Drop Menu Items</h3>
      <div className="flex gap-4 mb-6">
        {menuItems.map((menuItem) => (
          <MenuItem
            key={`menu-${resetKey}-${menuItem.id}`}
            menu={menuItem}
            handleDrop={handleDrop}
            dropAreaRef={dropAreaRef}
            resetKey={resetKey}
          />
        ))}
      </div>

      <DropArea
        dropAreaRef={dropAreaRef}
        isOverDropArea={isOverDropArea}
        setIsOverDropArea={setIsOverDropArea}
        droppedItems={droppedItems}
      />
    </div>
  );
}
