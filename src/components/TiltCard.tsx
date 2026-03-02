"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = "",
  glareColor = "rgba(255,255,255,0.08)",
  maxTilt = 8,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    glare.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glareColor}, transparent 60%)`;
    glare.style.opacity = "1";
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    glare.style.opacity = "0";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-300 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 opacity-0"
      />
    </div>
  );
}
