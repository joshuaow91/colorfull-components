import { MenuItem } from "../types/menuItemTypes";
import { RefObject } from "react";

export interface MenuProps {
  menuItems: MenuItem[];
  handleDrop: (menuItem: MenuItem) => void;
}

export interface MenuGridViewProps extends MenuProps {
  dropAreaRef: RefObject<HTMLDivElement>;
  setIsDragging: (isDragging: boolean) => void;
}

export interface MenuStepProps extends MenuProps {
  budget: number;
  spend: number;
  setSpend: (value: number) => void;
  setOrderedItems: (items: MenuItem[]) => void;
  progress: number;
  setProgress: (value: number) => void;
  overBudget: boolean;
  setOverBudget: (value: boolean) => void;
}
