import { MenuItem } from "../types/menuItemTypes";

export type OrderSummaryProps = {
  items: MenuItem[];
  time: string;
  setTime: (time: string) => void;
};
