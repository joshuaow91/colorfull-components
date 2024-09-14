import { MenuItem } from "./menuItemTypes";
import { RefObject } from "react";

export type MenuSelectionProps = {
  menu: MenuItem;
  handleDrop: (menu: MenuItem) => void;
  dropAreaRef: RefObject<HTMLDivElement>;
  setIsDragging: (isDragging: boolean) => void;
};
