"use client";

import { useEffect, useState } from "react";
import { User, Wrench } from "lucide-react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
    }, 1600); // ⏱ 1.6 secunde (sweet spot)

    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[#F8FBFF] via-[#D9F4FF] to-[#12960b]">
      <div className="absolute w-[30rem] h-[30rem] rounded-full bg-white/20 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center gap-6 animate-enter">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ring" />

          <User size={64} className="text-green-400 drop-shadow-xl" />

          <Wrench
            size={30}
            className="absolute bottom-2 right-3 text-green-700 animate-wrench"
          />
        </div>

        <p className="text-green-400/90 font-inter text-sm tracking-wide uppercase">
          GREENCLIM
        </p>
      </div>

      <style jsx>{`
        /* ENTER ANIMATION */
        .animate-enter {
          animation: enter 0.6s ease-out forwards;
        }

        @keyframes enter {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* WRENCH MOTION */
        @keyframes wrenchMove {
          0% {
            transform: rotate(0deg);
          }
          40% {
            transform: rotate(18deg);
          }
          70% {
            transform: rotate(-6deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .animate-wrench {
          animation: wrenchMove 1.2s ease-in-out infinite;
          transform-origin: bottom left;
        }

        /* RING PROGRESS */
        @keyframes ringSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-ring {
          animation: ringSpin 2.4s linear infinite;
        }
      `}</style>
    </div>
  );
}
