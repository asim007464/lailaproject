"use client";

import type { ReactNode } from "react";

interface TechItem {
  name: string;
  icon: ReactNode;
}

interface Props {
  items: TechItem[];
  speed?: number;
  className?: string;
}

export default function InfiniteMarquee({
  items,
  speed = 35,
  className = "",
}: Props) {
  const renderSet = (keyPrefix: string) =>
    items.map((item, i) => (
      <div
        key={`${keyPrefix}-${item.name}-${i}`}
        className="inline-flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-5 py-3 shrink-0 group hover:border-primary-500/20 hover:bg-primary-500/[0.04] transition-all duration-300 cursor-default"
      >
        <span className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300 shrink-0">
          {item.icon}
        </span>
        <span className="text-sm font-medium text-muted group-hover:text-foreground/80 transition-colors duration-300 whitespace-nowrap">
          {item.name}
        </span>
      </div>
    ));

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max gap-4 animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {renderSet("a")}
        {renderSet("b")}
      </div>
    </div>
  );
}
