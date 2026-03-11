"use client";

import { useState, useCallback, useEffect } from "react";

const MIN = 0;
const MAX = 10000;
const STEP = 250;

function formatCurrency(value: number) {
  return `£${value.toLocaleString("en-GB", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

export default function BudgetRangeSlider() {
  const [mounted, setMounted] = useState(false);
  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(5000);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getPercent = useCallback(
    (value: number) => ((value - MIN) / (MAX - MIN)) * 100,
    []
  );

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - STEP);
    setMinVal(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal + STEP);
    setMaxVal(value);
  };

  const leftPercent = getPercent(minVal);
  const rightPercent = getPercent(maxVal);

  if (!mounted) {
    return (
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Budget Range
        </label>
        <div className="relative pt-10 pb-6">
          <div className="relative h-2 mt-6 rounded-full bg-white/5" />
          <div className="flex justify-between text-xs text-muted mt-2">
            <span>£0</span>
            <span>£10,000</span>
          </div>
        </div>
        <input type="hidden" name="budget_min" value={1000} />
        <input type="hidden" name="budget_max" value={5000} />
      </div>
    );
  }

  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        Budget Range
      </label>

      <div className="relative pt-10 pb-6">
        {/* Budget boxes at start and end of range — move with handles */}
        <span
          className="absolute text-sm font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-2.5 py-1 rounded-lg whitespace-nowrap z-10"
          style={{
            left: `${leftPercent}%`,
            top: "0.5rem",
            transform: "translate(-50%, 0)",
          }}
        >
          {formatCurrency(minVal)}
        </span>
        <span
          className="absolute text-sm font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-2.5 py-1 rounded-lg whitespace-nowrap z-10"
          style={{
            left: `${rightPercent}%`,
            top: "0.5rem",
            transform: "translate(-50%, 0)",
          }}
        >
          {formatCurrency(maxVal)}
        </span>

        <div className="relative h-2 mt-6">
          <div className="absolute inset-0 rounded-full bg-white/5" />

          <div
            className="absolute h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
            style={{
              left: `${leftPercent}%`,
              width: `${rightPercent - leftPercent}%`,
            }}
          />

          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={minVal}
            onChange={handleMinChange}
            className="budget-slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
            style={{ zIndex: minVal > MAX - 100 ? 5 : 3 }}
          />

          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={maxVal}
            onChange={handleMaxChange}
            className="budget-slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
            style={{ zIndex: 4 }}
          />
        </div>

        <div className="flex justify-between text-xs text-muted mt-2">
          <span>{formatCurrency(MIN)}</span>
          <span>{formatCurrency(MAX)}</span>
        </div>
      </div>

      <input type="hidden" name="budget_min" value={minVal} />
      <input type="hidden" name="budget_max" value={maxVal} />
    </div>
  );
}
