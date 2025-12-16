"use client";
import React from "react";
import HyperSpeedBeams from "./HyperSpeedBeams";
import Particles from "./Particles";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center px-8">
      <HyperSpeedBeams />
      <Particles />

      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "150px 150px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        <div>
          <h1 className="font-bai font-extrabold text-4xl sm:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]  ">
            Montaj Aere Conditionate
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-bold font-inter text-black/70 max-w-2xl mx-auto">
            Montaj rapid, profesionist și garantat pentru aparate de aer
            condiționat.
          </p>
        </div>

        <div className="flex justify-center flex-col sm:flex-row gap-3 sm:gap-8 mt-4">
          <Link
            href={"/form"}
            className="backdrop-blur-2xl cursor-pointer relative px-10 py-3 rounded-full font-inter font-bold text-lg text-white bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 shadow-xl shadow-blue-500/40 hover:scale-[1.06] transition-all duration-300 before:absolute before:-inset-[2px] before:rounded-full before:bg-gradient-to-r before:from-blue-300 before:via-blue-500 before:to-blue-700 before:opacity-50 before:blur-xl before:-z-10 after:absolute after:inset-0 after:rounded-full after:border after:border-white/20"
          >
            Cere Oferta
          </Link>

          <Link
            href={"/servicii"}
            className="cursor-pointer relative px-10 py-3 rounded-full font-inter font-bold text-lg text-blue-700 bg-white border border-blue-200/40 shadow-lg shadow-blue-300/20 hover:scale-[1.05] hover:shadow-blue-400/30 transition-all duration-300 before:absolute before:-inset-[2px] before:rounded-full before:bg-gradient-to-r before:from-white before:via-blue-100/40 before:to-blue-200/40 before:blur-sm before:opacity-0 hover:before:opacity-100 before:-z-10 after:absolute after:inset-0 after:rounded-full after:border after:border-blue-600/30"
          >
            Servicii
          </Link>
        </div>
      </div>

      <span className="absolute left-5 sm:left-8 top-1/6 sm:top-1/4 opacity-30 sm:opacity-100 bg-purple-500/40 text-white px-4 py-1 font-bold rounded-xl text-sm shadow-md backdrop-blur-md">
        Rapid & Ușor
      </span>

      <span className="absolute right-5 sm:right-35 bottom-1/6 opacity-30 sm:opacity-100 sm:bottom-1/4 bg-blue-500/70 text-white px-4 py-1 font-bold rounded-xl text-sm shadow-md backdrop-blur-md">
        Garantie 24 luni
      </span>

      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-blue-500/60 blur-2xl rounded-full absolute -left-15 bottom-10"></span>
      <span className="sm:hidden w-[15rem] h-[15rem] bg-white/40 blur-2xl rounded-full absolute -right-15 top-20"></span>
      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-blue-500/60 blur-2xl rounded-full absolute -right-15 top-0"></span>
    </section>
  );
};

export default Hero;
