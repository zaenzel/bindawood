'use client'
import { Spinner } from "flowbite-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center gap-5">
      <Spinner aria-label="Extra large spinner example" size="lg" />
      <h1 className="text-2xl">Loading</h1>
    </div>
  );
};

export default loading;
