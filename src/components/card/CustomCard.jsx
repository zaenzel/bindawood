"use client";

import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const CustomCard = ({
  name,
  price,
  desc,
  image = "/images/madu-gemuk-badan.jpeg",
  netto,
  handleClick,
}) => {
 

  return (
    <div
      className="flex flex-col gap-3
      px-2 sm:px-5 py-5 border cursor-pointer
      relative hover:shadow-2xl flex-1 "
      onClick={handleClick}
    >
      <div className="relative w-full h-20 md:h-44 ">
        <Image
          src={image ? image : "/images/madu-gemuk-badan.jpeg"}
          alt="madu"
          fill
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </div>

      <h5 className="md:text-2xl font-bold tracking-tight text-tersier">
        {name}
      </h5>

      <div className="flex flex-wrap gap-2">
        {netto?.map((e, i) => (
          <div
            className={`flex items-center justify-center group transition-all
            border-2 border-primary
            hover:bg-primary
            p-[2px] rounded cursor-pointer`}
            key={i}
          >
            <p className="text-xs sm:text-sm font-semibold text-primary group-hover:text-sekunder">
              {e.weight} gr
            </p>
          </div>
        ))}
      </div>

      {/* <p className="text-tersier font-semibold md:text-lg">Rp {price}</p> */}
      <p className="text-tersier md:text-lg line-clamp-2">{desc}</p>

      {/* <div className="flex flex-col gap-3 text-tersier">
        <p>Tersedia di :</p>
        <div className="flex justify-between items-center gap-3">
          {marketplace.map((e, i) => (
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
      </div> */}

      {/* <div
          className={`bg-black opacity-0 absolute 
          w-full h-full top-0 left-0 rounded
          group-hover:opacity-50 transition-opacity ease duration-300`}
        ></div>
        <div
          className={`opacity-0 
          absolute top-1/2 -translate-x-1/2 left-1/2
          group-hover:opacity-100 transition-opacity ease duration-300`}
        >
          <Button size={"lg"} outline gradientDuoTone="greenToBlue">
            Lihat Detail
          </Button>
        </div> */}
    </div>
  );
};

export default CustomCard;
