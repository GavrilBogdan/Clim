"use client";

import {
  User,
  MapPin,
  Phone,
  Wallet,
  Loader2,
  AlertCircle,
} from "lucide-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  // 1. Folosim un singur state pentru tot formularul (mai curat)
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    localitate: "",
    buget: "",
    telefon: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Funcție generică pentru a actualiza orice câmp
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Resetăm eroarea când utilizatorul începe să scrie din nou
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 2. Validare Simplă
    if (!formData.nume || !formData.telefon || !formData.localitate) {
      setStatus("error");
      setErrorMessage("Te rugăm să completezi câmpurile obligatorii.");
      return;
    }

    // 3. Validare Telefon (minim 10 cifre)
    if (formData.telefon.length < 10) {
      setStatus("error");
      setErrorMessage("Introdu un număr de telefon valid.");
      return;
    }

    setStatus("loading");

    try {
      // Asigură-te că ruta API este corectă (ex: /api/booking sau /api/contact)
      // Adaptăm payload-ul pentru a se potrivi cu ce așteaptă API-ul tău Resend
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: `${formData.nume} ${formData.prenume}`,
          userPhone: formData.telefon,
          userAddress: formData.localitate,
          packageName: "Oferta Buget Custom", // Trimitem un nume generic de pachet
          packagePrice: `${formData.buget} RON`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        // 4. Resetăm formularul după succes
        setFormData({
          nume: "",
          prenume: "",
          localitate: "",
          buget: "",
          telefon: "",
        });
      } else {
        throw new Error("Eroare la server");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Ceva nu a mers bine. Încearcă din nou.");
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6 py-24 select-none">
      <Navbar />

      {/* Background Elements */}
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
      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-blue-500/60 blur-3xl rounded-full absolute -left-10 bottom-10 -z-10"></span>
      <span className="hidden sm:flex w-[15rem] h-[15rem] bg-purple-500/40 blur-3xl rounded-full absolute -right-10 top-10 -z-10"></span>

      {/* Main Card */}
      <div className="border border-blue-200/40 rounded-3xl p-6 sm:p-10 w-full max-w-md bg-white/60 backdrop-blur-2xl shadow-xl flex flex-col gap-6">
        <div className="text-center">
          <h1 className="font-bold font-inter text-3xl text-blue-900 drop-shadow-sm">
            Cere Ofertă
          </h1>
          <p className="text-blue-900/60 mt-2 text-sm font-medium">
            Spune-ne ce cauți și te contactăm noi.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <InputField
              name="nume"
              value={formData.nume}
              onChange={handleChange}
              placeholder="Nume"
              icon={<User size={18} />}
            />
            <InputField
              name="prenume"
              value={formData.prenume}
              onChange={handleChange}
              placeholder="Prenume"
              icon={<User size={18} />}
            />
          </div>

          <InputField
            name="localitate"
            value={formData.localitate}
            onChange={handleChange}
            placeholder="Localitate"
            icon={<MapPin size={18} />}
          />

          <InputField
            name="buget"
            value={formData.buget}
            onChange={handleChange}
            placeholder="Buget (Opțional)"
            icon={<Wallet size={18} />}
            type="number"
          />

          <InputField
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            placeholder="Telefon (07xx...)"
            icon={<Phone size={18} />}
            type="tel"
          />

          {/* Mesaj de Eroare Inline */}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-50 p-3 rounded-lg border border-red-100 animate-fadeIn">
              <AlertCircle size={16} />
              {errorMessage}
            </div>
          )}

          <button
            disabled={status === "loading" || status === "success"}
            className={`
              w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 shadow-lg mt-2 flex items-center justify-center gap-2
              ${
                status === "success"
                  ? "bg-green-600 scale-[1.02] shadow-green-500/30"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30"
              }
              ${
                status === "loading"
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:scale-[1.02] active:scale-[0.98]"
              }
            `}
          >
            {status === "loading" && (
              <Loader2 size={18} className="animate-spin" />
            )}
            {status === "loading"
              ? "Se trimite..."
              : status === "success"
              ? "Trimis cu Succes!"
              : "Trimite Cererea"}
          </button>

          {status === "success" && (
            <p className="text-center text-green-700 font-medium text-sm mt-1 animate-fadeIn">
              Mulțumim! Te vom suna în curând.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Page;

// Componenta InputField optimizată
const InputField = ({
  placeholder,
  icon,
  type = "text",
  value,
  name,
  onChange,
}: {
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative w-full group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 group-focus-within:text-blue-600 transition-colors">
        {icon}
      </div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-4 py-3 bg-white/50 border border-blue-200 rounded-xl outline-none text-blue-900 placeholder-blue-300 font-medium focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
      />
    </div>
  );
};
