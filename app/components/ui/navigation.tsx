"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-4 py-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent"
        >
          Sayan Dutta
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Button variant="ghost" className="hover-glow">{item}</Button>
            </motion.div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-background/80 backdrop-blur-lg md:hidden"
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Button key={item} variant="ghost" className="w-full justify-start hover-glow">
                {item}
              </Button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}