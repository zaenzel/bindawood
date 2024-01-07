"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { whoAreWe } from "@/helper";
import Description from "@/components/text/Description";

const WhoUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const xImg = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="relative bg-sekunder min-h-screen sm:min-h-fit sm:h-fit flex justify-center sm:items-center overflow-hidden"
    >
      <motion.div
        style={{ y: yImg }}
        className="absolute top-10
        -right-14 opacity-50 lg:opacity-100"
      >
        <Image
          src={"/images/madu-kotak.png"}
          alt="madu"
          width={200}
          height={200}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <a
          className="z-10 opacity-0"
          href="https://www.freepik.com/free-psd/honeycomb-with-honey-drop-isolated-transparent-background_78179089.htm#query=madu&position=0&from_view=search&track=sph&uuid=4f98d23b-8d58-4b2f-8e13-fb01aa12f15b"
        >
          Image by tohamina
        </a>
      </motion.div>

      <motion.div
        className="h-full px-5 py-20 text-center text-tersier z-10
        flex flex-col gap-5 justify-center items-center max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Siapa Kami?</h1>
        <Description
          text={whoAreWe}
        />
      </motion.div>

      <motion.div
        style={{ x: xImg }}
        className="absolute -bottom-10 -left-20 opacity-50 lg:opacity-100"
      >
        <Image
          src={"/images/madu-toples.png"}
          alt="madu"
          loading="lazy"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
        <a
          className="z-10 opacity-0"
          href="https://www.freepik.com/free-psd/sweet-honey-jar-isolated-transparent-background_86349694.htm#query=madu&position=1&from_view=search&track=sph&uuid=50d8eb20-5d0f-46df-ae36-057471daa7af"
        >
          Image by tohamina
        </a>
      </motion.div>
    </div>
  );
};

export default WhoUs;
