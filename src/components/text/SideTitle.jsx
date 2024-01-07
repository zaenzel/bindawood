"use client";
import React from "react";
import { motion } from "framer-motion";

const SideTitle = ({ text }) => {
  const title = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  
  return (
    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl
        text-center md:text-start text-white font-bold
        flex-1"
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
      variants={title}
    >
      {text}
    </motion.h1>
  );
};

export default SideTitle;
