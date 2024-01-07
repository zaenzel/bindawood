"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { marketplaceModal } from "@/helper";

const CustomModal = ({
  handleClick,
  showModalSet,
  name,
  price,
  desc,
  image,
  netto,
}) => {

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full px-5 max-w-lg ">
        <motion.div
          key="modal-detail"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            type: "tween",
            stiffness: 100,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative flex flex-col justify-center items-center w-full bg-white rounded-2xl"
        >
          <div
            className="absolute top-2 right-3 cursor-pointer"
            onClick={() => showModalSet(false)}
          >
            <MdOutlineClose size={25} />
          </div>

          <Image
            src={image}
            alt="foto produk"
            width={100}
            height={100}
            loading="lazy"
            className=""
          />
          <div className="text-white flex flex-col gap-3 bg-primary rounded-b-2xl p-5 w-full">
            <div className="flex gap-2">
              <p className="basis-1/4">Nama</p>
              <p className=" ">:</p>
              <p className="font-semibold basis-3/4 w-full">{name}</p>
            </div>
            <div className="flex gap-2">
              <p className="basis-1/4">Berat</p>
              <p className="">:</p>
              {netto?.map((e, i) => (
                <div
                  className={`flex items-center justify-center
                    group transition-all
                    border-2 border-white
                    hover:bg-sekunder
                    py-[2px] px-1 rounded cursor-pointer`}
                  key={i}
                >
                  <p className="text-sm font-semibold text-white group-hover:text-primary">
                    {e.weight} gr
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <p className="basis-1/4">Harga</p>
              <p className="">:</p>
              <p className="font-semibold basis-3/4 w-full">Rp {price}</p>
            </div>
            <div className="flex gap-2">
              <p className="basis-1/4">Deskripsi</p>
              <p className="">:</p>
              <p className="font-semibold basis-3/4 w-full">{desc}</p>
            </div>

            <div className="flex gap-2 items-center">
              <p className="basis-1/4">Tersedia di</p>
              <p>:</p>
              <div className="basis-3/4 w-full">
                <div className="flex justify-between items-center gap-3">
                  {marketplaceModal.map((e, i) => (
                    <Link
                      key={i}
                      target="blank"
                      href={e.link}
                      className="cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Image
                        key={i}
                        src={e.icon}
                        alt={e.name}
                        loading="lazy"
                        width={e.width}
                        height={e.height}
                        objectFit="contain"
                        className=""
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className="fixed z-10 top-0 left-0 bg-black w-screen h-screen opacity-80"
        onClick={() => showModalSet(false)}
      />
    </>
  );
};

export default CustomModal;
