"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Props {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypeWriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
  className = "",
}: Props) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const wordIndexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const tick = useCallback(() => {
    const currentWord = words[wordIndexRef.current];

    if (!isDeleting) {
      const next = currentWord.slice(0, text.length + 1);
      setText(next);

      if (next === currentWord) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
      timeoutRef.current = setTimeout(tick, typingSpeed);
    } else {
      const next = currentWord.slice(0, text.length - 1);
      setText(next);

      if (next === "") {
        setIsDeleting(false);
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        timeoutRef.current = setTimeout(tick, typingSpeed);
        return;
      }
      timeoutRef.current = setTimeout(tick, deletingSpeed);
    }
  }, [text, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[0.85em] bg-primary-400 ml-1 align-middle animate-blink rounded-sm" />
    </span>
  );
}
