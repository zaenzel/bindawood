"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/animate/AnimatedText";
import { useRouter } from "next/navigation";
import { wa } from "@/helper";

const Hero = () => {
  const router = useRouter();

  const animateButton = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <div
      className="relative w-full h-screen 
        flex flex-col sm:flex-row"
    >
      <div
        className="flex flex-col justify-center items-center md:items-start
        gap-10 bg-primary pb-10 pt-24 px-5 lg:pl-20 sm:basis-1/2"
      >
        <AnimatedText
          text={"Cara Pembuatan Obat Tradisional Yang Baik"}
          classname={
            "text-4xl md:text-6xl font-bold text-white text-center md:text-start"
          }
        />
        <motion.div
          className=""
          initial="initial"
          animate="animate"
          variants={animateButton}
        >
          <button
            className="px-5 lg:px-14 py-2 rounded 
            bg-sekunder text-tersier font-semibold text-base md:text-2xl
            shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
            cursor-pointer z-10 hover:scale-95 transition-transform"
            onClick={() => router.push(wa)}
          >
            Mulai Konsultasi
          </button>
        </motion.div>
      </div>
      <div className="relative w-full h-full sm:basis-1/2 flex justify-center items-center">
        <Image
          src={"/images/hero/home.png"}
          alt="bg-hero"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
        <a
          className="z-10 opacity-0"
          href="https://www.freepik.com/free-photo/jar-with-fresh-honey_6948351.htm#query=madu&position=10&from_view=search&track=sph&uuid=1a7b5026-a4a2-47d0-9256-b14a3ee8cb6f"
        >
          Image by Racool_studio
        </a>
      </div>
    </div>
  );
};

export default Hero;
