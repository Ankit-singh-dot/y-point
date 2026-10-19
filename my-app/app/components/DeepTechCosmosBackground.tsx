"use client";

import React, { useEffect, useRef } from "react";

/**
 * DeepTechCosmosBackground
 * A high-precision interactive mathematical deeptech lattice canvas.
 * Simulates deep laboratory research clusters, Brownian particle drift,
 * laser-etched node interconnects, and topographic contour waves of Powai [19.1334° N, 72.9133° E].
 */
export default function DeepTechCosmosBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates for interactive cursor illumination
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize, { passive: true });

    // Mathematical node representation for research clusters
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      cluster: "iitb" | "sine" | "ypoint" | "lab";
    }

    let nodes: Node[] = [];
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 65);

    const initNodes = () => {
      nodes = [];
      const clusters: Node["cluster"][] = ["iitb", "sine", "ypoint", "lab"];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() > 0.85 ? 2.5 : Math.random() * 1.5 + 0.8,
          baseAlpha: Math.random() * 0.4 + 0.2,
          cluster: clusters[Math.floor(Math.random() * clusters.length)],
        });
      }
    };

    initNodes();

    let step = 0;

    const render = () => {
      step += 0.005;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle topographic contour waves of Powai Lake & Campus elevation
      ctx.save();
      ctx.lineWidth = 1;
      for (let c = 0; c < 3; c++) {
        ctx.beginPath();
        const yOffset = height * (0.25 + c * 0.28);
        ctx.strokeStyle = `rgba(13, 115, 119, ${0.035 - c * 0.008})`;
        for (let x = 0; x <= width; x += 40) {
          const elevation =
            Math.sin(x * 0.003 + step + c) * 35 +
            Math.cos(x * 0.0015 - step * 0.5) * 20;
          if (x === 0) {
            ctx.moveTo(x, yOffset + elevation);
          } else {
            ctx.lineTo(x, yOffset + elevation);
          }
        }
        ctx.stroke();
      }
      ctx.restore();

      // 2. Update and draw nodes & interconnects
      const connectionDist = 130;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Brownian drift
        n.x += n.vx;
        n.y += n.vy;

        // Bounce at boundaries
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Interactive mouse reaction (gentle repulsion)
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < mouse.radius) {
          const force = (mouse.radius - distToMouse) / mouse.radius;
          n.x -= (dx / distToMouse) * force * 1.5;
          n.y -= (dy / distToMouse) * force * 1.5;

          // Micro laser connection to cursor
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 229, 163, ${(1 - distToMouse / mouse.radius) * 0.25})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const nx = n.x - n2.x;
          const ny = n.y - n2.y;
          const dist = Math.sqrt(nx * nx + ny * ny);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(13, 115, 119, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);

        if (n.cluster === "iitb" || n.cluster === "ypoint") {
          ctx.fillStyle = `rgba(0, 229, 163, ${n.baseAlpha + 0.2})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${n.baseAlpha * 0.7})`;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-65 dark:opacity-85" />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0D7377]/10 dark:bg-[#0D7377]/15 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] rounded-full bg-[#00E5A3]/5 dark:bg-[#00E5A3]/8 blur-[140px] pointer-events-none" />
    </div>
  );
}
