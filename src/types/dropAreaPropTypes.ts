import { MenuItem } from "./menuItemTypes";
import { RefObject } from "react";

export type DropAreaProps = {
  dropAreaRef: RefObject<HTMLDivElement>;
  isOverDropArea: boolean;
  setIsOverDropArea: (value: boolean) => void;
  isDragging: boolean;
  droppedItems: MenuItem[];
};
