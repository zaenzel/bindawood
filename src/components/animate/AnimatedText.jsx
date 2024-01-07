"use client";
import React from "react";
import {motion} from 'framer-motion'

const AnimatedText = ({ text, classname }) => {
  const quote = {
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

  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.h1
      className={classname}
      initial="initial"
      animate="animate"
      variants={quote}
    >
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export default AnimatedText;
