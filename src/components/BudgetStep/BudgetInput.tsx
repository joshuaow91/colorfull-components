import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";

type BudgetInputProps = {
  handleBudgetSubmit: (inputBudget: number) => void;
};

type FormValues = {
  inputBudget: number;
};

export default function BudgetInput({ handleBudgetSubmit }: BudgetInputProps) {
  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      inputBudget: 0,
    },
  });

  const [displayValue, setDisplayValue] = useState<string>("0.00");

  const formatCurrency = (value: number): string => {
    return (value / 100).toFixed(2);
  };

  const handleInputChange = (value: string) => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
    setDisplayValue(formatCurrency(numericValue));
    setValue("inputBudget", numericValue);
  };

  const onSubmit = (data: FormValues) => {
    handleBudgetSubmit(data.inputBudget / 100);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mt-8 mx-auto space-y-8">
      <h2 className="font-bold font-righteous text-4xl text-darkGreen tracking-tighter text-center">
        Set Spend Budget
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex justify-center">
          <Controller
            name="inputBudget"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                value={`$${displayValue}`}
                onChange={(e) => handleInputChange(e.target.value)}
                inputMode="numeric"
                className="text-8xl sm:text-9xl font-bold font-righteous bg-transparent border-none outline-none focus:ring-0 appearance-none transition-colors duration-300 text-darkGreen text-center"
              />
            )}
          />
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="flex items-center justify-center text-coral py-2 px-6 rounded-lg"
          >
            <ArrowRightCircleIcon className="h-12 w-12" />
          </button>
        </div>
      </form>
    </div>
  );
}
