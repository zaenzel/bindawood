"use client";
import React from "react";
import { motion } from "framer-motion";

const Title = ({ title }) => {
  const titleVariant = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.08,
      },
    },
  };

  const singleChar = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.h1
      initial="initial"
      animate="animate"
      variants={titleVariant}
      className="text-4xl relative text-start font-bold text-tersier w-fit"
    >
      {title.split(" ").map((char, index) => {
        return (
          <motion.span
            key={char + "-" + index}
            className="inline-block"
            variants={singleChar}
          >
            {char}&nbsp;
          </motion.span>
        );
      })}
      <motion.span
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2 }}
        className="w-[calc(100%+30px)] h-[8px] inline-block bg-primary
            absolute left-0 -bottom-2 -z-10"
      >
        &nbsp;
      </motion.span>
    </motion.h1>
  );
};

export default Title;
