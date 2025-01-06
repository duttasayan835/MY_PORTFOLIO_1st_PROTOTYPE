"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { SocialLinks } from "./SocialLinks";
import { Copyright } from "./Copyright";

// Dynamically import TimeDisplay with no SSR to prevent hydration issues
const TimeDisplay = dynamic(() => import("./TimeDisplay").then(mod => mod.TimeDisplay), {
  ssr: false
});

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <motion.h2 
              className="text-2xl font-bold text-glow inline-block"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 10px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Sayan Dutta
            </motion.h2>
            <div className="text-muted-foreground mt-2">
              Web Developer & AI Specialist
            </div>
            <TimeDisplay />
          </motion.div>

          <SocialLinks />
          <Copyright />
        </div>
      </div>
    </footer>
  );
}