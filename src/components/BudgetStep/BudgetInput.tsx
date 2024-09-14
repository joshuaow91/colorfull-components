import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

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
  const [isUserInput, setIsUserInput] = useState(false);

  const formatCurrency = (value: number): string => {
    return (value / 100).toFixed(2);
  };

  const handleInputChange = (value: string) => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
    setDisplayValue(formatCurrency(numericValue));
    setValue("inputBudget", numericValue);
    setIsUserInput(numericValue > 0);
  };

  const onSubmit = (data: FormValues) => {
    handleBudgetSubmit(data.inputBudget / 100);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="pt-10 relative flex flex-col items-center">
          <span
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-7xl font-bold transition-colors duration-300 ${
              isUserInput ? "text-darkGreen" : "text-darkGreen/40"
            } pointer-events-none`}
          >
            $
          </span>

          <Controller
            name="inputBudget"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                value={displayValue}
                onChange={(e) => handleInputChange(e.target.value)}
                inputMode="numeric"
                className={`pl-16 text-9xl font-bold max-w-sm font-righteous bg-transparent border-none outline-none focus:ring-0 appearance-none transition-colors duration-300 ${
                  isUserInput ? "text-darkGreen" : "text-darkGreen/40"
                }`}
              />
            )}
          />

          <button
            type="submit"
            className="justify-end items-end flex w-full text-darkGreen py-2 px-6 rounded-lg"
          >
            Set Budget &rarr;
          </button>
        </div>
      </form>
    </div>
  );
}
