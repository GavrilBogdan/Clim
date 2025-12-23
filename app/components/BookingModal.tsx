"use client";
import React, { useState, useMemo, useEffect } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string | null;
  price: string | null;
}

const BTU_PRICES = {
  "9000-12000": { kit: 650, noKit: 700 },
  "18000": { kit: 850, noKit: 900 },
  "24000": { kit: 950, noKit: 1000 },
};

const BookingModal = ({
  isOpen,
  onClose,
  selectedPackage,
  price,
}: BookingModalProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [btu, setBtu] = useState<"9000-12000" | "18000" | "24000">(
    "9000-12000"
  );
  const [withKit, setWithKit] = useState(true);

  const [extraFrigo, setExtraFrigo] = useState(0);
  const [extraCable, setExtraCable] = useState(0);
  const [extraCondens, setExtraCondens] = useState(0);
  const [dismount, setDismount] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    if (
      selectedPackage === "9000-12000" ||
      selectedPackage === "18000" ||
      selectedPackage === "24000"
    ) {
      setBtu(selectedPackage);
      setWithKit(true);
    }
  }, [isOpen, selectedPackage]);

  const basePrice = withKit ? BTU_PRICES[btu].kit : BTU_PRICES[btu].noKit;

  const total = useMemo(() => {
    return (
      basePrice +
      extraFrigo * 100 +
      extraCable * 18 +
      extraCondens * 12 +
      (dismount ? 200 : 0)
    );
  }, [basePrice, extraFrigo, extraCable, extraCondens, dismount]);

  if (!isOpen) return null;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      userName: formData.get("user_name"),
      userPhone: formData.get("user_phone"),
      userAddress: formData.get("user_address"),
      btu,
      withKit,
      extras: {
        traseuFrigorific: extraFrigo,
        cabluAlimentare: extraCable,
        furtunCondens: extraCondens,
        demontare: dismount,
      },
      estimatedPrice: total,
    };

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert("A apărut o eroare. Te rugăm să încerci din nou.");
      }
    } catch {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl max-h-[90svh] flex flex-col">
        <div className="bg-green-600 rounded-t-2xl p-6 text-white flex justify-between">
          <div>
            <h3 className="font-bold text-xl">Solicită Montaj</h3>
            <p className="text-green-100 text-sm">
              Estimare rapidă & programare
            </p>
          </div>
          <button onClick={handleClose}>
            <X />
          </button>
        </div>

        <div className="p-6 overflow-y-auto overscroll-contain">
          {success ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle size={48} className="text-green-500 mb-4" />
              <h4 className="text-2xl font-bold">Cerere trimisă!</h4>
              <p className="text-slate-500 mt-2">
                Te contactăm în cel mai scurt timp.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 px-8 py-3 bg-slate-100 rounded-xl font-bold"
              >
                Închide
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-3 gap-2">
                {["9000-12000", "18000", "24000"].map((val) => (
                  <button
                    type="button"
                    key={val}
                    onClick={() => setBtu(val as any)}
                    className={`py-3 rounded-xl font-bold text-sm ${
                      btu === val
                        ? "bg-green-600 text-white"
                        : "bg-green-50 text-green-700"
                    }`}
                  >
                    {val} BTU
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setWithKit(true)}
                  className={`flex-1 py-3 rounded-xl font-bold ${
                    withKit ? "bg-green-600 text-white" : "bg-slate-100"
                  }`}
                >
                  Cu kit
                </button>
                <button
                  type="button"
                  onClick={() => setWithKit(false)}
                  className={`flex-1 py-3 rounded-xl font-bold ${
                    !withKit ? "bg-green-600 text-white" : "bg-slate-100"
                  }`}
                >
                  Fără kit
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <Extra
                  label="Traseu frigorific (100 lei / m)"
                  value={extraFrigo}
                  set={setExtraFrigo}
                />
                <Extra
                  label="Cablu alimentare (18 lei / m)"
                  value={extraCable}
                  set={setExtraCable}
                />
                <Extra
                  label="Furtun condens (12 lei / m)"
                  value={extraCondens}
                  set={setExtraCondens}
                />

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={dismount}
                    onChange={(e) => setDismount(e.target.checked)}
                  />
                  Demontare AC (+200 lei)
                </label>
              </div>

              <div className="p-4 bg-green-50 rounded-xl font-bold text-center text-green-700">
                Total estimativ: {total} lei
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                <input
                  required
                  name="user_name"
                  placeholder="Nume complet"
                  className="input border border-green-300 rounded-lg p-2"
                />
                <input
                  required
                  name="user_phone"
                  placeholder="Telefon"
                  className="input border border-green-300 rounded-lg p-2"
                />
                <input
                  required
                  name="user_address"
                  placeholder="Localitate"
                  className="input border border-green-300 rounded-lg p-2"
                />
              </div>
              <button
                disabled={loading}
                className="w-full py-4 bg-green-600 text-white rounded-xl font-bold flex justify-center gap-2"
              >
                {loading && <Loader2 className="animate-spin" />}
                Trimite cererea
              </button>
              <div>
                <p className="text-xs text-center text-slate-400">
                  Preț estimativ. Confirmarea finală se face telefonic.
                </p>
                <p className="text-xs text-center text-slate-400 mt-2">
                  Prin trimiterea cererii ești de acord cu prelucrarea datelor.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

const Extra = ({ label, value, set }: any) => (
  <div className="flex justify-between items-center">
    <span>{label}</span>
    <input
      type="number"
      min={0}
      value={value}
      onChange={(e) => set(Number(e.target.value))}
      className="w-20 px-2 py-1 border rounded-lg"
    />
  </div>
);
