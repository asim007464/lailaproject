"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";

const inputClasses =
  "w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-white/[0.15] border border-white/[0.06] bg-white/[0.02] transition-all duration-300";

interface ProjectTypeSelectProps {
  options: string[];
  placeholder: string;
  name?: string;
  required?: boolean;
  defaultValue?: string;
}

export default function ProjectTypeSelect({
  options,
  placeholder,
  name = "project_type",
  required = true,
  defaultValue = "",
}: ProjectTypeSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        listRef.current?.contains(target)
      )
        return;
      setOpen(false);
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const dropdown = open && typeof document !== "undefined" && (
    <div
      ref={listRef}
      className="fixed z-[100] max-h-[280px] overflow-y-auto rounded-xl border border-white/[0.12] bg-[#1a1a1f] shadow-xl"
      style={{
        top: position.top,
        left: position.left,
        width: position.width,
        minWidth: position.width,
      }}
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className="w-full px-4 py-3 text-left text-sm text-foreground hover:bg-white/[0.08] focus:bg-white/[0.08] focus:outline-none first:rounded-t-xl last:rounded-b-xl"
          onClick={() => {
            setValue(option);
            setOpen(false);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative">
      <input type="hidden" name={name} value={value} readOnly required={required} />
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(!open)}
        className={`${inputClasses} flex items-center justify-between gap-2 text-left`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? "text-foreground" : "text-muted/40"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {typeof document !== "undefined" && createPortal(dropdown, document.body)}
    </div>
  );
}
