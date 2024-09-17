import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { BudgetInputProps, FormValues } from "../../types/budgetTypes";
import { handleInputChange } from "../../utils/formatBudgetInput";

export default function BudgetInput({ handleBudgetSubmit }: BudgetInputProps) {
  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      inputBudget: 0,
    },
  });

  const [displayValue, setDisplayValue] = useState<string>("0.00");

  const onSubmit = (data: FormValues) => {
    handleBudgetSubmit(data.inputBudget / 100);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center max-w-5xl mt-16 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
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
                onChange={(e) =>
                  handleInputChange(e.target.value, setDisplayValue, setValue)
                }
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
    </motion.div>
  );
}
