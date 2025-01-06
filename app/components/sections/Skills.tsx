"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SkillProgress } from "@/components/ui/skill-progress";

const skills = {
  languages: [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
  ],
  frameworks: [
    { name: "React/Next.js", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "TensorFlow/PyTorch", level: 85 },
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 85 },
    { name: "AWS/Cloud", level: 80 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-glow">Technical Skills</h2>
          <p className="text-muted-foreground">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 hover:border-primary/50 transition-colors duration-300 bg-background/95 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                <div className="space-y-6">
                  {skillList.map((skill, idx) => (
                    <SkillProgress key={idx} {...skill} />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}