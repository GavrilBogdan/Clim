"use client";

import React, { useEffect, useRef } from "react";

const HyperSpeedBeams = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // CHANGE 1: Removed { alpha: false } so transparency works
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number, cx: number, cy: number;

    // --- Configuration ---
    const beamCount = 300;
    const baseSpeed = 15;
    const fov = 600;
    const colors = ["#15803d", "#166534", "#22c55e", "#4ade80"];

    // --- The Beam Class ---
    class Beam {
      x: number;
      y: number;
      z: number;
      speedOffset: number;
      color: string;
      length: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.speedOffset = Math.random() * 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.length = Math.random() * 100 + 50;
        this.reset();
        this.z = Math.random() * fov;
      }

      reset() {
        this.z = fov;
        this.x = Math.random() * w * 4 - w * 2;
        this.y = Math.random() * h * 4 - h * 2;
      }

      update() {
        this.z -= baseSpeed + this.speedOffset;
        if (this.z <= 1) {
          this.reset();
        }
      }

      draw() {
        if (this.z <= 1) return;

        const scale = fov / this.z;
        const x2d = this.x * scale + cx;
        const y2d = this.y * scale + cy;

        const scaleTail = fov / (this.z + this.length);
        const x2dTail = this.x * scaleTail + cx;
        const y2dTail = this.y * scaleTail + cy;

        ctx.beginPath();
        ctx.moveTo(x2d, y2d);
        ctx.lineTo(x2dTail, y2dTail);

        const alpha = Math.min(1, scale / 10);

        ctx.strokeStyle = this.color;
        ctx.globalAlpha = alpha; // Use globalAlpha for easier fading

        ctx.lineWidth = scale * 0.3;
        ctx.lineCap = "round";

        ctx.shadowBlur = scale * 1.5;
        ctx.shadowColor = this.color;

        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1; // Reset alpha for next drawing
      }
    }

    // --- Initialization ---
    const beams: Beam[] = [];
    const init = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cx = w / 2;
      cy = h / 2;
      canvas.width = w;
      canvas.height = h;

      beams.length = 0;
      for (let i = 0; i < beamCount; i++) {
        beams.push(new Beam());
      }
    };

    // --- Animation Loop ---
    const render = () => {
      // CHANGE 2: Clear the canvas completely every frame instead of filling with color
      ctx.clearRect(0, 0, w, h);

      for (const beam of beams) {
        beam.update();
        beam.draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", init);
    init();
    render();

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-50 pointer-events-none"
    />
  );
};

export default HyperSpeedBeams;
