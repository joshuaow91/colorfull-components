import { MenuItem } from "../types/menuItemTypes";

export const menuItemsForRestaurants: Record<number, MenuItem[]> = {
  1: [
    {
      id: 1,
      name: "Pepperoni Pizza",
      cost: 10.0,
      image: "/pizza2.png",
      description:
        "A classic pepperoni pizza with mozzarella cheese and pepperoni.",
    },
    {
      id: 2,
      name: "Cheese Pizza",
      cost: 8.0,
      image: "/pizza2.png",
      description:
        "Simple cheese pizza with a tomato base and fresh mozzarella.",
    },
    {
      id: 3,
      name: "Margherita Pizza",
      cost: 9.5,
      image: "/pizza2.png",
      description:
        "Fresh mozzarella, basil, and tomatoes on a crispy thin crust.",
    },
    {
      id: 4,
      name: "BBQ Chicken Pizza",
      cost: 12.0,
      image: "/pizza2.png",
      description:
        "BBQ chicken, red onions, and cilantro with tangy BBQ sauce.",
    },
    {
      id: 5,
      name: "Hawaiian Pizza",
      cost: 11.0,
      image: "/pizza2.png",
      description: "Ham and pineapple on a traditional pizza base.",
    },
    {
      id: 6,
      name: "Veggie Pizza",
      cost: 9.0,
      image: "/pizza2.png",
      description:
        "Loaded with fresh vegetables, including peppers, onions, and olives.",
    },
    {
      id: 7,
      name: "Four Cheese Pizza",
      cost: 13.0,
      image: "/pizza2.png",
      description:
        "Mozzarella, parmesan, gouda, and blue cheese on a crispy crust.",
    },
    {
      id: 8,
      name: "Meat Lovers Pizza",
      cost: 14.0,
      image: "/pizza2.png",
      description: "Loaded with pepperoni, sausage, ham, and bacon.",
    },
  ],
  2: [
    {
      id: 9,
      name: "Salmon Roll",
      cost: 12.0,
      image: "/sushi2.png",
      description: "Fresh salmon rolled with seaweed and sushi rice.",
    },
    {
      id: 10,
      name: "Tuna Roll",
      cost: 15.0,
      image: "/sushi2.png",
      description: "Tuna wrapped in sushi rice and seaweed.",
    },
    {
      id: 11,
      name: "California Roll",
      cost: 10.0,
      image: "/sushi2.png",
      description: "Crab, avocado, and cucumber rolled in sushi rice.",
    },
    {
      id: 12,
      name: "Shrimp Tempura Roll",
      cost: 13.0,
      image: "/sushi2.png",
      description: "Crispy shrimp tempura with avocado and cucumber.",
    },
    {
      id: 13,
      name: "Spicy Tuna Roll",
      cost: 16.0,
      image: "/sushi2.png",
      description: "Spicy tuna with cucumber and sesame seeds.",
    },
    {
      id: 14,
      name: "Eel Roll",
      cost: 14.0,
      image: "/sushi2.png",
      description: "Eel, cucumber, and avocado with a sweet soy glaze.",
    },
    {
      id: 15,
      name: "Rainbow Roll",
      cost: 18.0,
      image: "/sushi2.png",
      description: "An assortment of fresh fish atop a California roll.",
    },
    {
      id: 16,
      name: "Avocado Roll",
      cost: 9.0,
      image: "/sushi2.png",
      description: "Sliced avocado rolled with sushi rice and seaweed.",
    },
  ],
  3: [
    {
      id: 17,
      name: "Classic Cheeseburger",
      cost: 10.0,
      image: "/burger2.png",
      description:
        "A juicy beef patty with cheddar cheese, lettuce, and tomato.",
    },
    {
      id: 18,
      name: "Bacon Burger",
      cost: 12.0,
      image: "/burger2.png",
      description: "Beef burger topped with crispy bacon and cheddar cheese.",
    },
    {
      id: 19,
      name: "BBQ Burger",
      cost: 13.0,
      image: "/burger2.png",
      description:
        "Grilled beef patty with tangy BBQ sauce, onion rings, and cheddar.",
    },
    {
      id: 20,
      name: "Veggie Burger",
      cost: 9.5,
      image: "/burger2.png",
      description:
        "A vegetarian patty served with fresh vegetables and hummus.",
    },
    {
      id: 21,
      name: "Mushroom Swiss Burger",
      cost: 11.5,
      image: "/burger2.png",
      description: "Sautéed mushrooms and melted Swiss cheese on a beef patty.",
    },
    {
      id: 22,
      name: "Double Cheeseburger",
      cost: 14.0,
      image: "/burger2.png",
      description: "Two beef patties with double cheese, lettuce, and pickles.",
    },
    {
      id: 23,
      name: "Jalapeño Burger",
      cost: 12.5,
      image: "/burger2.png",
      description: "Spicy beef burger with jalapeños and pepper jack cheese.",
    },
    {
      id: 24,
      name: "Guacamole Burger",
      cost: 13.0,
      image: "/burger2.png",
      description: "Topped with creamy guacamole, lettuce, and tomato.",
    },
  ],
  4: [
    {
      id: 25,
      name: "Beef Taco",
      cost: 3.0,
      image: "/taco2.png",
      description:
        "Seasoned ground beef with lettuce, cheese, and salsa in a soft taco.",
    },
    {
      id: 26,
      name: "Chicken Taco",
      cost: 3.5,
      image: "/taco2.png",
      description:
        "Grilled chicken with pico de gallo and cheese in a soft taco.",
    },
    {
      id: 27,
      name: "Carnitas Taco",
      cost: 4.0,
      image: "/taco2.png",
      description: "Slow-cooked pork carnitas with onions and cilantro.",
    },
    {
      id: 28,
      name: "Fish Taco",
      cost: 4.5,
      image: "/taco2.png",
      description: "Crispy fried fish with cabbage slaw and lime crema.",
    },
    {
      id: 29,
      name: "Shrimp Taco",
      cost: 5.0,
      image: "/taco2.png",
      description: "Grilled shrimp with spicy mayo and pickled onions.",
    },
    {
      id: 30,
      name: "Veggie Taco",
      cost: 3.0,
      image: "/taco2.png",
      description: "A medley of grilled vegetables topped with salsa verde.",
    },
    {
      id: 31,
      name: "Chorizo Taco",
      cost: 4.0,
      image: "/taco2.png",
      description: "Spicy chorizo sausage with onions and cilantro.",
    },
    {
      id: 32,
      name: "Steak Taco",
      cost: 4.5,
      image: "/taco2.png",
      description: "Grilled steak with onions, cilantro, and avocado.",
    },
  ],
  5: [
    {
      id: 33,
      name: "Spaghetti Carbonara",
      cost: 14.0,
      image: "/pasta2.png",
      description:
        "Spaghetti tossed with creamy egg sauce, pancetta, and Parmesan.",
    },
    {
      id: 34,
      name: "Fettuccine Alfredo",
      cost: 13.0,
      image: "/pasta2.png",
      description: "Rich and creamy Alfredo sauce with fettuccine pasta.",
    },
    {
      id: 35,
      name: "Penne Arrabbiata",
      cost: 12.0,
      image: "/pasta2.png",
      description:
        "Penne pasta in a spicy tomato sauce with garlic and chili flakes.",
    },
    {
      id: 36,
      name: "Lasagna",
      cost: 15.0,
      image: "/pasta2.png",
      description:
        "Layers of pasta, ricotta, and meat sauce baked to perfection.",
    },
    {
      id: 37,
      name: "Bolognese",
      cost: 14.5,
      image: "/pasta2.png",
      description: "Classic Italian meat sauce served over tagliatelle pasta.",
    },
    {
      id: 38,
      name: "Pesto Pasta",
      cost: 12.5,
      image: "/pasta2.png",
      description: "Fresh basil pesto with pine nuts, garlic, and Parmesan.",
    },
    {
      id: 39,
      name: "Ravioli",
      cost: 13.0,
      image: "/pasta2.png",
      description: "Cheese-filled ravioli served with marinara sauce.",
    },
    {
      id: 40,
      name: "Linguine with Clams",
      cost: 16.0,
      image: "/pasta2.png",
      description:
        "Linguine pasta tossed with clams in a white wine garlic sauce.",
    },
  ],
  6: [
    {
      id: 41,
      name: "Caesar Salad",
      cost: 8.0,
      image: "/salad2.png",
      description:
        "Romaine lettuce with Caesar dressing, croutons, and Parmesan.",
    },
    {
      id: 42,
      name: "Greek Salad",
      cost: 9.0,
      image: "/salad2.png",
      description:
        "Fresh tomatoes, cucumbers, olives, and feta cheese with oregano dressing.",
    },
    {
      id: 43,
      name: "Cobb Salad",
      cost: 10.0,
      image: "/salad2.png",
      description:
        "Chicken, avocado, bacon, egg, and blue cheese on a bed of lettuce.",
    },
    {
      id: 44,
      name: "Caprese Salad",
      cost: 11.0,
      image: "/salad2.png",
      description:
        "Sliced mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
    },
    {
      id: 45,
      name: "Kale Salad",
      cost: 8.5,
      image: "/salad2.png",
      description: "Fresh kale with lemon vinaigrette and shaved Parmesan.",
    },
    {
      id: 46,
      name: "Spinach Salad",
      cost: 9.5,
      image: "/salad2.png",
      description: "Baby spinach with strawberries, goat cheese, and walnuts.",
    },
    {
      id: 47,
      name: "Arugula Salad",
      cost: 10.5,
      image: "/salad2.png",
      description: "Peppery arugula with shaved fennel and lemon dressing.",
    },
    {
      id: 48,
      name: "Quinoa Salad",
      cost: 12.0,
      image: "/salad2.png",
      description:
        "Quinoa with avocado, cucumber, and a light citrus vinaigrette.",
    },
  ],
};
