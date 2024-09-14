import { motion } from "framer-motion";

type Restaurant = {
  id: number;
  name: string;
  image: string;
};

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Place",
    image: "",
  },
  {
    id: 2,
    name: "Sushi House",
    image: "",
  },
];

export default function RestaurantSelection({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      {restaurants.map((restaurant) => (
        <motion.div
          key={restaurant.id}
          className="p-4 rounded-lg cursor-pointer bg-white shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(restaurant.id)}
        >
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="rounded-t-md w-full h-32 object-cover"
          />
          <h3 className="mt-2 text-center font-bold">{restaurant.name}</h3>
        </motion.div>
      ))}
    </div>
  );
}
