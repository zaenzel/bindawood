"use client";

import React, { useEffect, useState } from "react";
import LinksDesktop from "./links/LinksDesktop";
import Hamburger from "./hamburger/Hamburger";
import LinkMobile from "./links/LinkMobile";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Tentang Kami",
    link: "/about",
  },
  {
    name: "Produk",
    link: "/products",
  },
  {
    name: "Kontak",
    link: "/contact",
  },
];

const CustomNavbar = () => {
  const [isOpen, isOpenSet] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full z-30 top-0 bg-white 
      bg-opacity-80 backdrop-blur-sm
      transition-transform duration-300 transform
      ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <navbar
        className="flex justify-between items-center
        container mx-auto px-3 sm:px-0 py-4
        z-30"
      >
        <Link href={"/"} className="flex sm:flex-col md:flex-row gap-2 items-center">
          <Image
            src={"/images/logo.png"}
            alt="bg-hero"
            priority
            width={50}
            height={50}
          />
          <p className="text-sm md:text-base font-semibold text-primary">CV Bin Dawood</p>
        </Link>

        <div className="hidden sm:block">
          <LinksDesktop links={links} />
        </div>

        <div className="sm:hidden">
          <Hamburger isOpen={isOpen} isOpenSet={isOpenSet} />
        </div>

        <AnimatePresence>
          {isOpen && (
            <LinkMobile links={links} isOpen={isOpen} isOpenSet={isOpenSet} />
          )}
        </AnimatePresence>
      </navbar>
    </header>
  );
};

export default CustomNavbar;
