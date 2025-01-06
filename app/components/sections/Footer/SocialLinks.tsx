"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex gap-4 mb-8"
    >
      <Button 
        variant="outline" 
        size="icon" 
        className="hover-glow bg-background/50"
        asChild
      >
        <a 
          href="https://github.com/duttasayan835" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4" />
        </a>
      </Button>
      <Button 
        variant="outline" 
        size="icon" 
        className="hover-glow bg-background/50"
        asChild
      >
        <a 
          href="https://www.linkedin.com/in/sayan-dutta-exceptional98/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button 
        variant="outline" 
        size="icon" 
        className="hover-glow bg-background/50"
        asChild
      >
        <a href="mailto:duttsayan835@gmail.com">
          <Mail className="h-4 w-4" />
        </a>
      </Button>
    </motion.div>
  );
}