"use client";

import { Wrench, Snowflake, ShieldCheck } from "lucide-react";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TrustBadges from "./TrustBadges";

const Services = () => {
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 800], [0, -40]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden flex flex-col gap-20 items-center justify-center px-8 py-20 select-none"
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "150px 150px",
        }}
      />

      <div className="flex flex-col items-center gap-12 max-w-6xl mx-auto">
        <motion.h2
          style={{ y: titleY }}
          className="text-4xl sm:text-5xl font-bold text-blue-700 drop-shadow-lg tracking-tight text-center"
        >
          Serviciile Noastre
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {[
            {
              icon: <Snowflake size={42} className="text-blue-600" />,
              title: "Montaj Aer Condiționat",
              description:
                "Instalare profesionistă, rapidă și sigură pentru toate modelele de AC.",
            },
            {
              icon: <Wrench size={42} className="text-blue-600" />,
              title: "Service & Mentenanță",
              description:
                "Curățare, verificări tehnice și întreținere pentru performanță maximă.",
            },
            {
              icon: <ShieldCheck size={42} className="text-blue-600" />,
              title: "Garanție & Siguranță",
              description:
                "Beneficiați de garanție extinsă și intervenții rapide în caz de urgență.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
            >
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-blue-500/60 blur-2xl rounded-full absolute -left-10 bottom-10"></span>
      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-blue-500/60 blur-2xl rounded-full absolute -right-10 top-10"></span>
      <TrustBadges />
    </section>
  );
};

export default Services;

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div
      className="
        group flex flex-col items-center text-center gap-4 p-6
        border border-blue-300/40 bg-white/40 backdrop-blur-3xl
        rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]
        transition-all duration-300 
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        hover:bg-white/60 hover:scale-[1.03] cursor-pointer
      "
    >
      <div className="p-4 bg-blue-200/40 rounded-full shadow-inner">{icon}</div>

      <h3 className="text-2xl font-bold text-blue-700 tracking-tight">
        {title}
      </h3>

      <p className="text-blue-900/70 leading-relaxed text-sm font-medium">
        {description}
      </p>
    </div>
  );
};
