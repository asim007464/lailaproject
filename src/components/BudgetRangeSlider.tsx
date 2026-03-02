"use client";

import { useState, useCallback } from "react";

const MIN = 0;
const MAX = 10000;
const STEP = 250;

function formatCurrency(value: number) {
  return `£${value.toLocaleString("en-GB")}`;
}

export default function BudgetRangeSlider() {
  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(5000);

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

  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        Budget Range
      </label>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-lg">
          {formatCurrency(minVal)}
        </span>
        <span className="text-xs text-muted mx-2">to</span>
        <span className="text-sm font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-lg">
          {formatCurrency(maxVal)}
        </span>
      </div>

      <div className="relative h-2 mt-2 mb-6">
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
          className="slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: minVal > MAX - 100 ? 5 : 3 }}
        />

        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={maxVal}
          onChange={handleMaxChange}
          className="slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: 4 }}
        />
      </div>

      <div className="flex justify-between text-xs text-muted">
        <span>{formatCurrency(MIN)}</span>
        <span>{formatCurrency(MAX)}</span>
      </div>

      <input type="hidden" name="budget_min" value={minVal} />
      <input type="hidden" name="budget_max" value={maxVal} />

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: #fafafa;
          border: 3px solid #09090b;
          box-shadow: 0 0 8px rgba(79, 70, 229, 0.3);
          cursor: pointer;
          pointer-events: all;
          transition: box-shadow 0.15s, transform 0.15s;
        }
        .slider-thumb::-webkit-slider-thumb:hover {
          box-shadow: 0 0 14px rgba(79, 70, 229, 0.5);
          transform: scale(1.1);
        }
        .slider-thumb::-webkit-slider-thumb:active {
          box-shadow: 0 0 18px rgba(79, 70, 229, 0.6);
          transform: scale(1.15);
        }
        .slider-thumb::-moz-range-thumb {
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: #fafafa;
          border: 3px solid #09090b;
          box-shadow: 0 0 8px rgba(79, 70, 229, 0.3);
          cursor: pointer;
          pointer-events: all;
          transition: box-shadow 0.15s, transform 0.15s;
        }
        .slider-thumb::-moz-range-thumb:hover {
          box-shadow: 0 0 14px rgba(79, 70, 229, 0.5);
        }
      `}</style>
    </div>
  );
}
