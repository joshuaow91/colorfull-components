import { MenuItem } from "./menuItemTypes";

export type OrderSummaryProps = {
  items: MenuItem[];
  time: string;
  setTime: (time: string) => void;
};
