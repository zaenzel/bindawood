"use client";

import React from "react";

const Hamburger = ({ isOpen, isOpenSet }) => {
  const handleClick = () => {
    isOpenSet(!isOpen);
  };

  return (
    <button
      className="flex-col justify-center items-center"
      onClick={handleClick}
    >
      <span
        className={`bg-tersier block h-0.5 w-6 rounded-sm transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-tersier block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-tersier block h-0.5 w-6 rounded-sm transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
