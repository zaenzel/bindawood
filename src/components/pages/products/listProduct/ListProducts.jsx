"use client";

import CustomCard from "@/components/card/CustomCard";
import CustomModal from "@/components/modal/CustomModal";
import { products } from "@/helper";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ListProducts = () => {
  const [showModal, showModalSet] = useState(false);
  const [detail, detailSet] = useState({});

  const handleClick = (e) => {
    showModalSet(true);
    detailSet(e);
  };

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

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showModal]);

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"visible"}
        className="grid grid-cols-2 sm:grid-cols-2 
        md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {products.map((item, i) => (
          <CustomCard variants={variants} custom={i} key={i} {...item} handleClick={() => handleClick(item)} />
        ))}
      </motion.div>
      {showModal && (
        <AnimatePresence>
          <CustomModal showModalSet={showModalSet} {...detail} />
        </AnimatePresence>
      )}
    </>
  );
};

export default ListProducts;
