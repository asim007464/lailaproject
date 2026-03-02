"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

export default function AnimatedSkillBar({ name, level, color, delay = 0 }: Props) {
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setWidth(level), delay);
    return () => clearTimeout(timer);
  }, [visible, level, delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-primary-400 font-semibold tabular-nums">
          {visible ? `${level}%` : "0%"}
        </span>
      </div>
      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden relative">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1500 ease-out relative`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
