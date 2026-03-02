"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  glowSize?: number;
  glowColor?: string;
}

export default function MouseGlow({
  children,
  className = "",
  glowSize = 400,
  glowColor = "rgba(79, 70, 229, 0.06)",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    function onMove(e: globalThis.MouseEvent) {
      const rect = container!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        glow!.style.opacity = "1";
        glow!.style.transform = `translate(${x - glowSize / 2}px, ${y - glowSize / 2}px)`;
      } else {
        glow!.style.opacity = "0";
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [glowSize]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={glowRef}
        className="absolute pointer-events-none rounded-full blur-3xl transition-opacity duration-500 opacity-0"
        style={{
          width: glowSize,
          height: glowSize,
          background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
          zIndex: 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
