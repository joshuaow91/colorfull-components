import { Restaurant } from "../types/restaurantTypes";

import pizzaImage from "../../public/pizza2.png";
import sushiImage from "../../public/sushi2.png";
import burgerImage from "../../public/burger2.png";
import tacoImage from "../../public/taco2.png";
import pastaImage from "../../public/pasta2.png";
import saladImage from "../../public/salad2.png";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Place",
    image: pizzaImage,
  },
  {
    id: 2,
    name: "Sushi House",
    image: sushiImage,
  },
  {
    id: 3,
    name: "Burger Joint",
    image: burgerImage,
  },
  {
    id: 4,
    name: "Taco Spot",
    image: tacoImage,
  },
  {
    id: 5,
    name: "Pasta Corner",
    image: pastaImage,
  },
  {
    id: 6,
    name: "Salad Bar",
    image: saladImage,
  },
];
