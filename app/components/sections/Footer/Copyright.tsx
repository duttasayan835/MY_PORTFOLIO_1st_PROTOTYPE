"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Copyright() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center text-sm text-muted-foreground"
    >
      <div className="flex items-center justify-center gap-2">
        Made with{" "}
        <motion.span
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
        </motion.span>
        {" "}using Next.js & Three.js
      </div>
      <div className="mt-2">
        © {new Date().getFullYear()} Sayan Dutta. All rights reserved.
      </div>
    </motion.div>
  );
}