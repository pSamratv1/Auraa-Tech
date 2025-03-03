import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import Logo from "../../assets/image_2025-02-17_203429843-removebg-preview.png";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-screen  fixed top-1 inset-x-0 mx-auto border border-transparent  rounded-lg bg-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 lg:px-52 py-4 justify-between items-center  space-x-4",
          className
        )}
      >
        <div className="hidden lg:block">
          <img className="h-25 w-25" src={Logo} alt="Auraa Tech" />
        </div>
        <div className="flex space-x-10 lg:space-x-12">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              to={navItem.link} // Use `to` instead of `href`
              className={cn(
                "relative  items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-lg">{navItem.name}</span>
            </Link>
          ))}
          <button className="border text-sm lg:text-lg font-medium relative border-neutral-200  text-white  px-4 py-2 rounded-full">
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
