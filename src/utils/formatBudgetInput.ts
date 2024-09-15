export const formatCurrency = (value: number): string => {
  return (value / 100).toFixed(2);
};

export const handleInputChange = (
  value: string,
  setDisplayValue: (value: string) => void,
  setValue: (fieldName: "inputBudget", value: number) => void,
) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  setDisplayValue((numericValue / 100).toFixed(2));
  setValue("inputBudget", numericValue);
};
