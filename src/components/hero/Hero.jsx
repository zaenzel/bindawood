import Image from "next/image";
import React from "react";
import AnimatedText from "../animate/AnimatedText";

const Hero = ({ image, title }) => {
  return (
    <div>
      <div className="relative w-full h-[400px] ">
        <Image src={image} alt="bg-hero" fill objectFit="cover" priority />
        <div
          className="absolute top-0 left-0 
            bg-gradient-to-t from-black
            w-full h-full"
        />
        <AnimatedText
          text={title}
          classname={
            "absolute top-1/2 left-1/2 -translate-x-1/2 text-center text-white font-bold text-4xl md:text-6xl"
          }
        />
      </div>
    </div>
  );
};

export default Hero;
