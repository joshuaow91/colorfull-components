import { useRef, useState } from "react";
import MenuSelection from "./MenuSelection";
import DropArea from "./DropArea";
import SpendTrack from "./SpendTrackGradientBar";
import { MenuStepProps } from "../../types/menuStepPropTypes";
import { MenuItem } from "../../types/menuItemTypes";

export default function MenuStep({
  menuItems,
  budget,
  spend,
  setSpend,
  progress,
  setProgress,
  overBudget,
  setOverBudget,
  setOrderedItems,
}: MenuStepProps) {
  const dropAreaRef = useRef(null);
  const [isOverDropArea, setIsOverDropArea] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [droppedItems, setDroppedItems] = useState<MenuItem[]>([]);

  const handleDrop = (menu: MenuItem) => {
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
    setOrderedItems([...droppedItems, menu]);
  };

  return (
    <div className="pt-4">
      <SpendTrack
        progress={progress}
        spend={spend}
        overBudget={overBudget}
        budget={budget}
      />
      <div className="menu-items flex gap-4">
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
      <DropArea
        dropAreaRef={dropAreaRef}
        isOverDropArea={isOverDropArea}
        setIsOverDropArea={setIsOverDropArea}
        isDragging={isDragging}
        droppedItems={droppedItems}
      />
    </div>
  );
}
