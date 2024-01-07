"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { whyUs } from "@/helper";
import SideTitle from "@/components/text/SideTitle";

const WhyUs = () => {
  const ref = useRef(null);

  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="flex flex-col md:flex-row 
        justify-center items-center gap-10
        bg-primary py-16 px-10 sm:px-16"
    >
      <SideTitle text="Kenapa Harus Bin Dawood" />

      <div
        className="relative flex-1 md:max-h-80
        md:overflow-y-scroll 
        scrollbar-none hover:scrollbar-thin scrollbar-thumb-sekunder scrollbar-track-gray-100 
        pr-10"
      >
        <ul className="flex flex-col gap-5">
          {whyUs.map((e, i) => (
            <motion.li
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              variants={variants}
              key={i}
              className="text-white"
            >
              <h5 className="font-bold text-2xl">{e.title}</h5>
              <p className="font-medium text-lg">{e.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyUs;
