type BudgetInputProps = {
  tempBudget: number | null;
  setTempBudget: (value: number) => void;
  handleBudgetSubmit: () => void;
};

export default function BudgetInput({
  tempBudget,
  setTempBudget,
  handleBudgetSubmit,
}: BudgetInputProps) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="number"
        placeholder="Set Budget"
        value={tempBudget || ""}
        onChange={(e) => setTempBudget(Number(e.target.value))}
        className="border p-2 rounded-lg bg-lightBeige border-darkGreen w-full"
      />
      <button
        onClick={handleBudgetSubmit}
        className="bg-darkGreen text-white py-2 px-4 rounded-lg"
      >
        Set Budget
      </button>
    </div>
  );
}
