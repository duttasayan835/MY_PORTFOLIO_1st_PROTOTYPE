"use client";

import { useState, useEffect } from "react";

export function useTime() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleTimeString());
    
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return { time, mounted };
}