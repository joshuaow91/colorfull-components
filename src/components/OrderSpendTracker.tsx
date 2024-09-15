import { useState } from "react";
import ProgressTracker from "./ProgressTracker";
import RestaurantSelection from "./RestaurantStep/RestaurantSelector";
import MenuStep from "./MenuStep/MenuStep";
import OrderSummary from "./SummaryStep/OrderSummary";
import { MenuItem } from "../types/menuItemTypes";
import BudgetInput from "./BudgetStep/BudgetInput";
import { menuItemsForRestaurants } from "../data/menuItems";
import Wrapper from "./Wrapper";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";

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
    <div className="p-8 max-w-5xl mx-auto text-zinc-900">
      <ProgressTracker step={step} />

      {step > 1 && (
        <button onClick={prevStep} className="ml-4">
          {" "}
          &lsaquo; <span className="underline">Back</span>
        </button>
      )}

      {step === 1 && <BudgetInput handleBudgetSubmit={handleBudgetSubmit} />}

      {step === 2 && (
        <Wrapper>
          <RestaurantSelection
            onSelect={(id) => {
              setSelectedRestaurant(id);
              nextStep();
            }}
          />
        </Wrapper>
      )}

      {step === 3 && selectedRestaurant && (
        <Wrapper>
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
        </Wrapper>
      )}

      {step === 4 && (
        <Wrapper>
          <OrderSummary
            items={orderedItems}
            time={deliveryTime}
            setTime={setDeliveryTime}
          />
        </Wrapper>
      )}

      {step > 2 && step < 4 && (
        <button onClick={nextStep} className="flex justify-end w-full pt-6">
          <ArrowRightCircleIcon className="h-12 w-12 text-coral" />
        </button>
      )}
    </div>
  );
}
