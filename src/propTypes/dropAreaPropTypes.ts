import { MenuItem } from "../types/menuItemTypes";
import { RefObject } from "react";

export type DropAreaProps = {
  dropAreaRef: RefObject<HTMLDivElement>;
  isOverDropArea: boolean;
  setIsOverDropArea: (value: boolean) => void;
  isDragging: boolean;
  droppedItems: MenuItem[];
  removeItem: (itemId: number) => void;
  isListView: boolean;
};

export type DroppedItemProps = {
  id: number;
  name: string;
  cost: number;
  removeItem: (id: number) => void;
};
