import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { OrderSummaryProps } from "../../propTypes/orderSummaryPropTypes";
import { generateTimeOptions } from "../../utils/orderTimeUtils";

export default function OrderSummary({
  items,
  time,
  setTime,
}: OrderSummaryProps) {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeOptions, setTimeOptions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const options = generateTimeOptions();
    setTimeOptions(options);
    setTime("ASAP (15 mins)");
  }, [setTime]);

  const handleOrderSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOrderPlaced(true);
    }, 2000);
  };

  return (
    <div className="relative max-w-5xl sm:min-w-96">
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-colorfull-gradient z-0 rounded-2xl"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      )}

      <div className="relative z-10">
        {!isOrderPlaced ? (
          <>
            <h2 className="font-bold block font-righteous text-4xl text-darkGreen tracking-tighter text-center mb-6">
              Order Summary
            </h2>
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
                >
                  <span className="text-lg font-semibold">{item.name}</span>
                  <span className="text-lg font-bold">
                    ${item.cost.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col items-center">
              <label className="text-lg font-semibold mb-2">
                Select Delivery Time:
              </label>
              <div className="relative inline-block w-48">
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="border rounded p-2 text-lg w-full bg-gray-50 shadow-sm hover:shadow-md focus:ring-2 focus:ring-green-500 focus:outline-none text-center"
                >
                  {time}
                </button>

                {showDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-40 overflow-auto"
                  >
                    {timeOptions.map((option, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setTime(option);
                          setShowDropdown(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleOrderSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200 flex items-center"
              >
                Submit Order
              </button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <CheckCircleIcon className="h-20 w-20 text-green-500" />
            <h3 className="text-3xl font-bold text-green-600">Order Placed!</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className="text-xl font-semibold">
                  {item.name} - ${item.cost.toFixed(2)}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}
