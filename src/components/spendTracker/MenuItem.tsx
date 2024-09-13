import { motion, useMotionValue } from "framer-motion";
import { RefObject, useState } from "react";

export type MenuItem = {
  id: number;
  name: string;
  cost: number;
};

type MenuItemProps = {
  menu: MenuItem;
  handleDrop: (menu: MenuItem) => void;
  dropAreaRef: RefObject<HTMLDivElement>;
  resetKey: number;
};

export default function MenuItem({
  menu,
  handleDrop,
  dropAreaRef,
  resetKey,
}: MenuItemProps) {
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
      className="border p-4 rounded-lg bg-gray-200 cursor-pointer"
      drag
      dragConstraints={dropAreaRef}
      dragElastic={0.5}
      style={{ x, y }}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      key={`menu-${resetKey}-${menu.id}`}
      onDragEnd={() => handleDropWithAnimation(menu)}
      initial={{ x: 0, y: 0 }}
      animate={isDropped ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {menu.name} - ${menu.cost}
    </motion.div>
  );
}
