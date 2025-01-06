"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            <p className="text-muted-foreground mt-2">
              Web Developer & AI Specialist
            </p>
            <motion.div
              className="mt-4 font-mono text-sm text-primary/80"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {time.toLocaleTimeString()}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4 mb-8"
          >
            <Button variant="outline" size="icon" className="hover-glow bg-background/50">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover-glow bg-background/50">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover-glow bg-background/50">
              <Mail className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground"
          >
            <p className="flex items-center justify-center gap-2">
              Made with{" "}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.div>
              {" "}using Next.js & Three.js
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} Sayan Dutta. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}