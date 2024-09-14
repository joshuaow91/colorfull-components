import { MenuItem } from "./menuItemTypes";

export type MenuStepProps = {
  menuItems: MenuItem[];
  budget: number;
  spend: number;
  setSpend: (value: number) => void;
  progress: number;
  setProgress: (value: number) => void;
  overBudget: boolean;
  setOrderedItems: (items: MenuItem[]) => void;
  setOverBudget: (value: boolean) => void;
};
