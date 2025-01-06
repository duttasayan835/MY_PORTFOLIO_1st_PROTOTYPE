"use client";

import { useTime } from "@/hooks/use-time";
import { motion } from "framer-motion";

export function TimeDisplay() {
  const { time, mounted } = useTime();

  if (!mounted) {
    return <div className="mt-4 h-6" aria-hidden="true" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="mt-4 font-mono text-sm text-primary/80"
    >
      {time}
    </motion.div>
  );
}