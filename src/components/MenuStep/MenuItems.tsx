import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { MenuSelectionProps } from "../../types/menuSelectionPropTypes";
import { MenuItem } from "../../types/menuItemTypes";

export default function MenuSelection({
  menu,
  handleDrop,
  dropAreaRef,
  setIsDragging,
}: MenuSelectionProps) {
  const [isDropped, setIsDropped] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleDropWithAnimation = (menu: MenuItem) => {
    setIsDropped(true);
    setTimeout(() => {
      handleDrop(menu);
      x.set(0);
      y.set(0);
      setIsDropped(false);
    }, 500);
  };

  return (
    <motion.div
      className="relative p-4 rounded-xl bg-coral text-lightBeige cursor-pointer font-bold"
      drag
      dragConstraints={dropAreaRef}
      dragElastic={0.5}
      style={{ x, y }}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        handleDropWithAnimation(menu);
        setIsDragging(false);
      }}
      whileHover={{
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f88a8a",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      animate={isDropped ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col">
        <span className="absolute top-2 right-2 bg-lightBeige text-coral rounded-full px-3 py-1 text-sm font-bold shadow-md">
          ${menu.cost.toFixed(2)}
        </span>
        <span className="text-lg mt-8">{menu.name}</span>
      </div>
    </motion.div>
  );
}
