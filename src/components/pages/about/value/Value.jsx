"use client";

import SideTitle from "@/components/text/SideTitle";
import { valueOfCompany } from "@/helper";
import React from "react";
import { motion } from "framer-motion";

const Value = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 1,
      },
    }),
  };

  return (
    <div
      className="flex flex-col md:flex-row 
        justify-center items-center gap-10
        bg-primary py-16 px-10 sm:px-16"
    >
      <SideTitle text={"Prinsip dan Nilai Perusahaan"} />

      <motion.ol
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
        className="list-decimal flex-1 flex flex-col gap-5"
      >
        {valueOfCompany.map((e, i) => (
          <motion.li
            variants={variants}
            key={i}
            custom={i}
            className="text-lg text-white font-semibold"
          >
            {e}
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
};

export default Value;
