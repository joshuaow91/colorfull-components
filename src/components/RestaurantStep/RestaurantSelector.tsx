import { motion } from "framer-motion";
import { restaurants } from "../../data/restaurants";

export default function RestaurantSelection({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  return (
    <>
      <h2 className="font-bold block font-righteous text-4xl text-darkGreen tracking-tighter text-center mb-6">
        Choose a Restaurant
      </h2>

      <div className="grid grid-cols-3 gap-4 ">
        {restaurants.map((restaurant) => (
          <motion.div
            key={restaurant.id}
            className="p-4 rounded-lg cursor-pointer bg-coral"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(restaurant.id)}
          >
            <motion.img
              src={restaurant.image}
              alt={restaurant.name}
              className="rounded-t-md w-full h-32 object-contain"
              whileHover={{
                y: -15,
                transition: { type: "spring", stiffness: 300 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3
              className="mt-2 text-center text-lightBeige font-bold"
              whileHover={{ scale: 1.1, color: "#f3a683" }}
            >
              {restaurant.name}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </>
  );
}
