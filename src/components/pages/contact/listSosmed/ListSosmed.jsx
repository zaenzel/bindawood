"use client";
import { medsos } from "@/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ListSosmed = () => {
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
    <motion.div
      className="flex flex-wrap gap-5
            justify-center items-center 
            w-full max-w-2xl"
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
    >
      {medsos.map((e, i) => (
        <motion.div variants={variants} key={i} custom={i}>
          <Link
            target="blank"
            href={e.url}
            className="cursor-pointer 
                md:grayscale md:hover:grayscale-0
                px-5 flex flex-col items-center
                "
          >
            <div className="relative w-16 h-16">
              <Image src={e.image} alt={e.name} loading="lazy" fill />
            </div>
            <h5 className="text-center mt-5">{e.name}</h5>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ListSosmed;
