"use client";

import CustomCard from "@/components/card/CustomCard";
import CustomModal from "@/components/modal/CustomModal";
import Title from "@/components/title/Title";
import { productsHome } from "@/helper";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Products = () => {
  const ref = useRef();
  const [showModal, showModalSet] = useState(false);
  const [detail, detailSet] = useState({});

  const variants = {
    initial: {
      x: -10,
      y:  100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const isInview = useInView(ref, { margin: "0px" });

  const handleClick = (e) => {
    showModalSet(true);
    detailSet(e);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showModal]);

  return (
    <motion.div
      className="container mx-auto py-14 px-5 max-w-screen-xl"
      initial="initial"
      ref={ref}
      variants={variants}
      animate={isInview && "animate"}
      // whileInView={"animate"}
      // animate={"animate"}
    >
      <motion.div className="flex flex-col gap-8" variants={variants}>
        <motion.div
          className="flex justify-between items-end"
          variants={variants}
        >
          <Title title={"Produk Kami"} />
          <Link
            href={"/products"}
            className="text-[#878787] hover:text-blue-400 
            hidden sm:block cursor-pointer"
          >
            Lihat Selengkapnya...
          </Link>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 gap-5
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
          variants={variants}
        >
          {productsHome.map((e, i) => (
            <CustomCard key={i} {...e} handleClick={() => handleClick(e)} />
          ))}
        </motion.div>
        <Link
          href={"/products"}
          className="text-end text-[#878787] hover:text-blue-400 
            sm:hidden cursor-pointer"
        >
          Lihat Selengkapnya...
        </Link>
      </motion.div>
      {showModal && (
        <AnimatePresence>
          <CustomModal showModalSet={showModalSet} {...detail} />
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Products;

// grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
