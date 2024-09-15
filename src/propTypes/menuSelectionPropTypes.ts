import { MenuItem } from "../types/menuItemTypes";
import { RefObject } from "react";

export type MenuSelectionProps = {
  menu: MenuItem;
  handleDrop: (menu: MenuItem) => void;
  dropAreaRef: RefObject<HTMLDivElement>;
  setIsDragging: (isDragging: boolean) => void;
};
