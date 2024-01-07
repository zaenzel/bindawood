"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { marketplace } from "@/helper";

const MarketPlace = () => {
  const ref = useRef();

  const isInview = useInView(ref, { margin: "10px" });

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

  const variantMarketPlace = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.1,
        staggerChildren: 1,
      },
    },
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center py-16 px-10">
      <motion.h1
        className="text-3xl sm:text-4xl
        font-bold text-center"
        initial="initial"
        animate={isInview && "animate"}
        variants={quote}
        ref={ref}
      >
        {"Temukan Produk Kami".split(" ").map((word, index) => {
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
        <br />
        {"di Marketplace Kesayangan Anda".split(" ").map((word, index) => {
          return (
            <motion.span
              key={word + "-" + index}
              className={
                word === "Marketplace"
                  ? "inline-block text-primary"
                  : "inline-block"
              }
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
      <div
        className="flex flex-wrap gap-x-20 gap-y-10 md:gap-x-52
        w-full justify-center items-center 
        max-w-4xl"
      >
        {marketplace.map((e, i) => (
          <motion.div
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            variants={variantMarketPlace}
            key={i}
          >
            <Link
              target="blank"
              href={e.link}
              className="cursor-pointer 
              md:grayscale md:hover:grayscale-0
            "
            >
              <Image
                src={e.icon}
                alt={e.name}
                loading="lazy"
                width={e.width}
                height={e.height}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
