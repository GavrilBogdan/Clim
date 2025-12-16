"use client";
import React, { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string | null;
  price: string | null;
}

const BookingModal = ({
  isOpen,
  onClose,
  selectedPackage,
  price,
}: BookingModalProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      userName: formData.get("user_name"),
      userPhone: formData.get("user_phone"),
      userAddress: formData.get("user_address"),
      packageName: selectedPackage,
      packagePrice: price,
    };

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert("A apărut o eroare. Te rugăm să încerci din nou.");
      }
    } catch (error) {
      console.error(error);
      alert("Eroare de conexiune.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
        <div className="bg-blue-600 p-6 text-white flex justify-between items-start">
          <div>
            <h3 className="font-bold text-xl">Solicită Montaj</h3>
            <p className="text-blue-100 text-sm mt-1">
              Completează detaliile pentru programare.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-white/20 rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {success ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">
                Cerere Trimisă!
              </h4>
              <p className="text-slate-500 mt-2 mb-6">
                Te vom contacta în scurt timp pe numărul de telefon furnizat.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition"
              >
                Închide
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-xl mb-2">
                <span className="font-semibold text-blue-800">
                  {selectedPackage || "Ofertă Personalizată"}
                </span>
                {price && (
                  <span className="font-bold text-blue-600">{price}</span>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">
                    Nume Complet
                  </label>
                  <input
                    required
                    name="user_name"
                    type="text"
                    placeholder="Ex: Popescu Mario"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">
                    Telefon
                  </label>
                  <input
                    required
                    name="user_phone"
                    type="tel"
                    placeholder="07xx xxx xxx"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">
                    Localitate / Sector
                  </label>
                  <input
                    required
                    name="user_address"
                    type="text"
                    placeholder="Ex: București, Sector 3"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
              >
                {loading && <Loader2 size={20} className="animate-spin" />}
                {loading ? "Se trimite..." : "Trimite Cererea"}
              </button>

              <p className="text-xs text-center text-slate-400 mt-2">
                Prin trimiterea cererii ești de acord cu prelucrarea datelor.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
