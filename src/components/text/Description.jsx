"use client";
import React from "react";
import { motion } from "framer-motion";

const Description = ({ text }) => {
  return (
    <motion.p
      className="text-lg"
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay:0.5,
        duration: 1,
      }}
    >
      {text}
    </motion.p>
  );
};

export default Description;
