import { motion } from "framer-motion";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { MenuProps } from "../../interfaces/menuInterfaces";

export default function MenuListView({ menuItems, handleDrop }: MenuProps) {
  return (
    <div className="flex flex-col gap-y-4 mb-4">
      {menuItems.map((menuItem) => (
        <motion.div
          key={menuItem.id}
          className="flex items-center bg-offWhite p-4 rounded-xl shadow-md"
          whileHover={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={menuItem.image}
            alt={menuItem.name}
            className="w-24 h-24 rounded-lg mr-4"
          />

          <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex-1">
            <h3 className="text-xl font-bold">{menuItem.name}</h3>
            <p className="text-sm text-gray-600">{menuItem.description}</p>
          </div>
          <div className="flex justify-between sm:flex-col items-center gap-4 mt-4 sm:mt-0">
            <span className="text-lg font-bold">
              ${menuItem.cost.toFixed(2)}
            </span>
            <button
              onClick={() => handleDrop(menuItem)}
              className="ml-4 flex items-center bg-green-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-green-600"
            >
              <PlusCircleIcon className="h-4 w-4 mr-2" /> Add
            </button>
          </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
