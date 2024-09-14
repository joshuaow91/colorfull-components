import { useState } from "react";
import ProgressTracker from "./ProgressTracker";
import RestaurantSelection from "./RestaurantStep/RestaurantSelector";
import MenuStep from "./MenuStep/MenuStep";
import OrderSummary from "./OrderSummary";
import { MenuItem } from "./MenuStep/MenuSelection";
import BudgetInput from "./BudgetStep/BudgetInput";

const menuItemsForRestaurants: Record<number, MenuItem[]> = {
  1: [
    { id: 1, name: "Pepperoni Pizza", cost: 10.0 },
    { id: 2, name: "Cheese Pizza", cost: 8.0 },
  ],
  2: [
    { id: 3, name: "Salmon Roll", cost: 12.0 },
    { id: 4, name: "Tuna Roll", cost: 15.0 },
  ],
};

export default function OrderSpendTracker() {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState<number | null>(null);
  const [spend, setSpend] = useState(0);
  const [progress, setProgress] = useState(0);
  const [overBudget, setOverBudget] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(
    null,
  );
  const [orderedItems, setOrderedItems] = useState<MenuItem[]>([]);
  const [deliveryTime, setDeliveryTime] = useState("");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const handleBudgetSubmit = (inputBudget: number) => {
    setBudget(inputBudget);
    setSpend(0);
    setProgress(0);
    setOrderedItems([]);
    setOverBudget(false);
    nextStep();
  };

  return (
    <div className="p-8 mx-auto text-zinc-900">
      <ProgressTracker step={step} />

      {step > 1 && (
        <button onClick={prevStep} className="pt-6">
          {" "}
          &lsaquo; <span className="underline">Back</span>
        </button>
      )}

      {step === 1 && <BudgetInput handleBudgetSubmit={handleBudgetSubmit} />}

      {step === 2 && (
        <RestaurantSelection
          onSelect={(id) => {
            setSelectedRestaurant(id);
            nextStep();
          }}
        />
      )}

      {step === 3 && selectedRestaurant && (
        <MenuStep
          menuItems={menuItemsForRestaurants[selectedRestaurant]}
          budget={budget as number}
          spend={spend}
          setSpend={setSpend}
          progress={progress}
          setProgress={setProgress}
          overBudget={overBudget}
          setOverBudget={setOverBudget}
          setOrderedItems={setOrderedItems}
        />
      )}

      {step === 4 && (
        <OrderSummary
          items={orderedItems}
          time={deliveryTime}
          setTime={setDeliveryTime}
        />
      )}

      {step > 2 && step < 4 && (
        <button onClick={nextStep} className="flex justify-end w-full pt-6">
          <span className="underline">Next</span> &rsaquo;
        </button>
      )}
    </div>
  );
}
