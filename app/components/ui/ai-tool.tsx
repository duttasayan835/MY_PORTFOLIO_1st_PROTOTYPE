"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Brain, Network, Sparkles } from "lucide-react";

interface AIToolProps {
  name: string;
  description: string;
  icon: string;
  projects: string[];
  delay?: number;
}

const icons = {
  sparkles: Sparkles,
  brain: Brain,
  network: Network,
};

export function AITool({ name, description, icon, projects, delay = 0 }: AIToolProps) {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="p-6 group hover:border-primary/50 transition-all duration-300">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-foreground/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-primary group-hover:text-glow" />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-glow transition-all duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="space-y-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="text-sm text-primary/80 group-hover:text-primary transition-colors duration-300"
            >
              • {project}
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}