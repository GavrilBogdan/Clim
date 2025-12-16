"use client";

import React from "react";
import Navbar from "../components/Navbar";

import {
  Wrench,
  Sparkles,
  ShieldCheck,
  BadgePercent,
  Snowflake,
} from "lucide-react";
import { i } from "framer-motion/client";

const FadeIn = ({ children, delay = 0 }: any) => {
  return (
    <div
      className="opacity-0 translate-y-6 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden py-24 px-6">
      <Navbar />

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

      <span className="absolute w-[25rem] h-[25rem] bg-blue-500/30 blur-3xl rounded-full -top-20 -left-20 -z-10" />
      <span className="absolute w-[30rem] h-[30rem] bg-blue-400/40 blur-[100px] rounded-full bottom-0 right-0 -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col gap-14 mt-10">
        <FadeIn>
          <h1 className="text-center font-inter font-black text-4xl sm:text-6xl text-blue-800 drop-shadow-[0_2px_16px_rgba(30,64,175,0.2)]">
            Servicii Profesionale de Montaj Aer Condiționat
          </h1>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-center font-mont text-lg sm:text-xl text-blue-900/80 max-w-3xl mx-auto leading-relaxed">
            La <span className="font-semibold text-blue-700">ClimInstall</span>,
            oferim servicii premium de instalare aer condiționat, cu montaj
            rapid, consultanță gratuită și garanție extinsă. Calitatea și
            profesionalismul sunt prioritățile noastre.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <FadeIn>
            <ServiceCard
              icon={<Snowflake size={42} className="text-blue-600" />}
              title="Montaj Aer Condiționat"
              description="Instalare rapidă, sigură și conform standardelor pentru toate modelele de AC."
            />
          </FadeIn>

          <FadeIn delay={150}>
            <ServiceCard
              icon={<Sparkles size={42} className="text-blue-600" />}
              title="Consultanță Gratuită"
              description="Te ajutăm să alegi aparatul potrivit pentru locuința sau biroul tău."
            />
          </FadeIn>

          <FadeIn delay={300}>
            <ServiceCard
              icon={<ShieldCheck size={42} className="text-blue-600" />}
              title="Garanție 24 Luni"
              description="Toate lucrările noastre beneficiază de garanție extinsă și suport tehnic."
            />
          </FadeIn>

          <FadeIn delay={450}>
            <ServiceCard
              icon={<BadgePercent size={42} className="text-blue-600" />}
              title="Prețuri Competitive"
              description="Oferim servicii premium la costuri accesibile și transparente."
            />
          </FadeIn>
        </div>

        <FadeIn delay={600}>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-6" />
        </FadeIn>

        <FadeIn delay={700}>
          <p className="text-center font-mont text-lg sm:text-xl text-blue-900/80 max-w-3xl mx-auto leading-relaxed">
            Ești gata să te bucuri de confortul oferit de un sistem de aer
            condiționat montat profesionist?
            <br /> Suntem aici să te ajutăm de la consultanță până la montaj.
          </p>
        </FadeIn>

        <FadeIn delay={850}>
          <div className="flex justify-center">
            <a
              href="/oferta"
              className="px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-all"
            >
              Cere Oferta Acum
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesPage;

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-8 rounded-2xl border border-blue-300/40 cursor-pointer bg-white/40 backdrop-blur-2xl shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all">
    <div className="mb-4">{icon}</div>
    <h3 className="font-inter font-semibold text-2xl text-blue-800">{title}</h3>
    <p className="text-blue-900/70 font-mont mt-3 leading-relaxed">
      {description}
    </p>
  </div>
);
