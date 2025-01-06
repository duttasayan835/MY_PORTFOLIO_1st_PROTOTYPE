"use client";

import { HTMLAttributes } from "react";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { cn } from "@/lib/utils";

interface GsapRevealProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
}

export function GsapReveal({
  children,
  className,
  direction,
  distance,
  delay,
  duration,
  ...props
}: GsapRevealProps) {
  const ref = useGsapReveal({ direction, distance, delay, duration });

  return (
    <div ref={ref} className={cn("opacity-0", className)} {...props}>
      {children}
    </div>
  );
}