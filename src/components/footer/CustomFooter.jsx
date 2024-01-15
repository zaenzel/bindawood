import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const CustomFooter = () => {
  return (
    <div className="bg-primary border-t-8 border-sekunder">
      <div
        className="container mx-auto py-10 px-5 
        flex flex-wrap gap-10 justify-center lg:justify-between  items-center"
      >
        <div className="flex flex-col items-center text-white font-bold">
          <Image
            src={"/images/logo.png"}
            alt="bg-hero"
            priority
            width={50}
            height={50}
          />
          <p className="text-sm md:text-base font-semibold text-white">
            CV Bin Dawood
          </p>
        </div>
        <div
          className="flex flex-wrap justify-center 
          lg:justify-start gap-10"
        >
          <div className="flex gap-3 items-center text-white">
            <IoIosCall size={30} />
            <p className="font-semibold tracking-wider text-lg">0812889988</p>
          </div>
          <div className="flex gap-3 items-center text-white">
            <MdEmail size={30} />
            <p className="font-semibold tracking-wider text-lg">
              bindawood85@gmail.com
            </p>
          </div>
          <div className="flex gap-3 items-center text-white">
            <p className="font-semibold tracking-wider text-lg">
              Ikuti kami di :
            </p>
            <Link href={"#"}>
              <FaFacebookSquare
                size={30}
                className="cursor-pointer hover:scale-105 transition-transform"
              />
            </Link>
            <Link href={"#"}>
              <FaInstagram
                size={30}
                className="cursor-pointer hover:scale-105 transition-transform"
              />
            </Link>
            <Link href={"#"}>
              <FaYoutube
                size={40}
                className="cursor-pointer hover:scale-105 transition-transform"
              />
            </Link>
          </div>
          <div className="flex gap-3 items-center text-white">
            <IoLocationSharp size={30} />
            <p className="font-semibold tracking-wider text-lg">
              Jl.raya mezz Al Kp Payangan, RT 006/RW 007, Jati Sari, kec Jati
              Asih ,Kota Bekasi ,Jawa barat ,17426
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;
