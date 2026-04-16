"use client";
import {motion, type Variants} from "framer-motion";
import * as React from "react";


export function Reveal({ children, delay = 0, direction = "up" }: {children: React.ReactNode, delay?: number, direction?: string}) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: "easeOut",
      },
    },
  };


  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}