"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface SkillProgressProps {
  name: string;
  level: number;
}

export function SkillProgress({ name, level }: SkillProgressProps) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="font-medium group-hover:text-glow transition-all duration-300">
          {name}
        </span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
      >
        <Progress 
          value={level} 
          className="h-2 transition-all duration-300 group-hover:bg-primary/20"
        />
      </motion.div>
    </div>
  );
}