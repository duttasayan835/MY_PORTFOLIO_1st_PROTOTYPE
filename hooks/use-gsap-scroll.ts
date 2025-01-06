"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function useGsapScroll() {
  useEffect(() => {
    // Smooth scroll to section when clicking navigation links
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const id = link.getAttribute('href');
        if (id) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: id,
              offsetY: 80,
            },
            ease: "power3.inOut",
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleNavClick);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}