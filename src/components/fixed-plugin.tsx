"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export function FixedPlugin() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-3 text-black font-bold shadow-xl shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}

export default FixedPlugin;
