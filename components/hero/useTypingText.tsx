"use client";

import { useEffect, useRef, useState } from "react";

export default function useTypingText(
  text: string = "",
  speed: number = 30,
  isPaused: boolean = false
) {
  const [display, setDisplay] = useState("");
  const indexRef = useRef(0);

  // FIXED TYPE 👇
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDisplay("");
    indexRef.current = 0;

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text]);

  useEffect(() => {
    if (isPaused) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }

    function tick() {
      const i = indexRef.current;

      if (i < text.length) {
        setDisplay((prev) => prev + text.charAt(i));
        indexRef.current = i + 1;
        timeoutRef.current = setTimeout(tick, speed);
      } else {
        timeoutRef.current = null;
      }
    }

    timeoutRef.current = setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPaused, speed, text]);

  return display;
}
