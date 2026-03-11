"use client";

import { useId } from "react";

export default function Logo({ size = 36 }: { size?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NWstudios logo"
    >
      <defs>
        <linearGradient id={`logoBg-${id}`} x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill={`url(#logoBg-${id})`} />
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="22"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        NW
      </text>
      <circle cx="38" cy="12" r="2.5" fill="#fbbf24" />
    </svg>
  );
}
