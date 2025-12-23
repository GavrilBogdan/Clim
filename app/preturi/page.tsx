"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BookingModal from "../components/BookingModal";
import { Check, Snowflake, Zap, Crown } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: any) => (
  <div
    className="animate-fadeIn opacity-0 translate-y-4"
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    {children}
    <style jsx>{`
      @keyframes fadeIn {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
      }
    `}</style>
  </div>
);

const PricingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<{
    title: string;
    price: string;
  } | null>(null);

  const handleOpenModal = (title: string, price: string) => {
    setSelectedPkg({ title, price });
    setIsModalOpen(true);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden px-6 py-24 select-none bg-green-50/30">
      <Navbar />

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPkg?.title || ""}
        price={selectedPkg?.price || ""}
      />

      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 85%)",
        }}
      />
      <span className="absolute w-[40rem] h-[40rem] bg-green-400/20 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2 -z-10" />

      <div className="w-full flex flex-col items-center justify-center max-w-6xl mx-auto mt-10">
        <FadeIn>
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-bai font-extrabold text-4xl sm:text-6xl text-slate-900 tracking-tight">
              Investiție Transparentă
            </h1>
            <p className="text-slate-600 font-mont text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Alege pachetul potrivit. Fără costuri ascunse.{" "}
              <br className="hidden sm:block" />
              Montaj profesional inclus în toate pachetele.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-center">
          <FadeIn delay={100}>
            <PriceCard
              icon={<Snowflake size={32} className="text-blue-500" />}
              title="9000–12000 BTU"
              price="de la 650 lei"
              description="650 lei cu kit / 700 lei fără kit"
              features={[
                "Montaj AC 9000–12000 BTU",
                "Cu kit: 650 lei",
                "Fără kit: 700 lei",
                "Traseu frigorific extra: 100 lei / m",
                "Cablu alimentare: 18 lei / m",
                "Furtun condens: 12 lei / m",
                "Demontare AC: +200 lei",
              ]}
              onSelect={() => handleOpenModal("9000-12000", "650")}
            />
          </FadeIn>

          <FadeIn delay={200}>
            <PriceCard
              icon={<Zap size={32} className="text-white" />}
              title="18000 BTU"
              price="de la 850 lei"
              description="850 lei cu kit / 900 lei fără kit"
              recommended
              features={[
                "Montaj AC 18000 BTU",
                "Cu kit: 850 lei",
                "Fără kit: 900 lei",
                "Traseu frigorific extra: 100 lei / m",
                "Cablu alimentare: 18 lei / m",
                "Furtun condens: 12 lei / m",
                "Demontare AC: +200 lei",
              ]}
              onSelect={() => handleOpenModal("18000", "850")}
            />
          </FadeIn>

          <FadeIn delay={300}>
            <PriceCard
              icon={<Crown size={32} className="text-purple-500" />}
              title="24000 BTU"
              price="de la 950 lei"
              description="950 lei cu kit / 1000 lei fără kit"
              features={[
                "Montaj AC 24000 BTU",
                "Cu kit: 950 lei",
                "Fără kit: 1000 lei",
                "Traseu frigorific extra: 100 lei / m",
                "Cablu alimentare: 18 lei / m",
                "Furtun condens: 12 lei / m",
                "Demontare AC: +200 lei",
              ]}
              onSelect={() => handleOpenModal("24000", "950")}
            />
          </FadeIn>
        </div>

        <FadeIn delay={500}>
          <div className="mt-16 text-center space-y-8">
            <p className="text-green-900/60 font-mont text-sm max-w-xl mx-auto border-t border-green-300 pt-8">
              * Prețurile afișate sunt pentru manoperă și materialele standard.
              Pentru instalații complexe sau unități industriale, vă rugăm să
              cereți o ofertă dedicată. <br></br>* Prin trimiterea cererii ești
              de acord cu prelucrarea datelor.
            </p>

            <button
              onClick={() => handleOpenModal("Ofertă Personalizată", "")}
              className="inline-block px-12 py-4 bg-slate-900 hover:bg-green-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Cere Ofertă Personalizată
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PricingPage;

const PriceCard = ({
  icon,
  title,
  price,
  description,
  features,
  recommended = false,
  onSelect,
}: {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  onSelect?: () => void;
}) => {
  return (
    <div
      className={`
        relative flex flex-col p-8 rounded-3xl transition-all duration-300
        ${
          recommended
            ? "bg-green-600 text-white shadow-2xl shadow-green-500/40 scale-100 lg:scale-110 z-10 ring-4 ring-green-200/30"
            : "bg-white/60 backdrop-blur-xl border border-white/60 hover:border-green-300 shadow-lg text-slate-800 hover:bg-white"
        }
      `}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
          Recomandat
        </div>
      )}

      <div className="mb-6">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
            recommended ? "bg-white/20" : "bg-blue-50"
          }`}
        >
          {icon}
        </div>
        <h3
          className={`font-inter font-bold text-2xl mb-2 ${
            recommended ? "text-white" : "text-slate-800"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            recommended ? "text-blue-100" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span
          className={`text-4xl font-black ${
            recommended ? "text-white" : "text-slate-900"
          }`}
        >
          {price}
        </span>
        <span
          className={`text-sm font-medium ${
            recommended ? "text-blue-200" : "text-slate-400"
          }`}
        >
          / lucrare
        </span>
      </div>

      <div
        className={`h-px w-full mb-8 ${
          recommended ? "bg-white/20" : "bg-slate-200"
        }`}
      />

      <ul className="flex flex-col gap-4 mb-8 flex-grow">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-medium">
            <Check
              size={18}
              className={`shrink-0 mt-0.5 ${
                recommended ? "text-green-200" : "text-green-500"
              }`}
            />
            <span className={recommended ? "text-blue-50" : "text-slate-600"}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`
          w-full py-3 rounded-xl font-bold text-center transition-all cursor-pointer
          ${
            recommended
              ? "bg-white text-green-700 hover:bg-green-50 shadow-md"
              : "bg-blue-50 text-green-700 hover:bg-green-100 hover:text-green-800"
          }
        `}
      >
        Alege {title}
      </button>
    </div>
  );
};
