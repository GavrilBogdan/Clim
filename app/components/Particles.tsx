"use client";
import React, { useEffect, useState } from "react";

const Particles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generăm 20 de particule cu poziții random
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute bg-blue-400 rounded-full opacity-50 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`, // Dimensiuni între 1px și 5px
            height: `${Math.random() * 4 + 1}px`,
            animationDuration: `${Math.random() * 10 + 10}s`, // Între 10s și 20s
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
