"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGsapScroll } from "@/hooks/use-gsap-scroll";

export function Providers({ children }: { children: ReactNode }) {
  useGsapScroll(); // Initialize GSAP scroll behavior

  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}