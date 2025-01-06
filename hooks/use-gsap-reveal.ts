"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
}

export function useGsapReveal({
  direction = "up",
  distance = 100,
  delay = 0,
  duration = 1,
}: RevealProps = {}) {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = element.current;
    if (!el) return;

    const getInitialPosition = () => {
      switch (direction) {
        case "up": return { y: distance };
        case "down": return { y: -distance };
        case "left": return { x: distance };
        case "right": return { x: -distance };
        default: return { y: distance };
      }
    };

    gsap.fromTo(el,
      {
        opacity: 0,
        ...getInitialPosition(),
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, distance, delay, duration]);

  return element;
}