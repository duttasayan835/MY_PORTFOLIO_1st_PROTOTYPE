"use client";

import { motion } from "framer-motion";
import { NeuralNode } from "@/components/ui/neural-node";

const aiTools = [
  {
    title: "ChatGPT Integration",
    description: "Advanced language model powering intelligent conversations and code generation",
    icon: "sparkles",
    applications: [
      "AI Writing Assistant",
      "Code Review Bot",
      "Content Generation",
      "Language Translation"
    ]
  },
  {
    title: "Claude Analytics",
    description: "Specialized in detailed analysis and technical documentation",
    icon: "brain",
    applications: [
      "Technical Documentation",
      "Research Analysis",
      "Data Interpretation",
      "Report Generation"
    ]
  },
  {
    title: "Vertex AI Platform",
    description: "Enterprise-grade ML platform for scalable AI solutions",
    icon: "network",
    applications: [
      "ML Model Deployment",
      "Predictive Analytics",
      "Real-time Processing",
      "Custom AI Solutions"
    ]
  }
];

export default function AISection() {
  return (
    <section id="ai" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-glow">The Neural Network Hub</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our interconnected AI ecosystem, where cutting-edge tools and technologies
            converge to create innovative solutions for complex challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiTools.map((tool, index) => (
            <NeuralNode key={index} {...tool} delay={index * 0.2} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-[2px] rounded-full bg-gradient-to-r from-primary/50 via-primary-foreground/50 to-primary/50 group transition-all duration-300 hover:from-primary hover:via-primary-foreground hover:to-primary">
            <div className="px-8 py-4 rounded-full bg-background/90 backdrop-blur-sm">
              <p className="text-lg font-medium group-hover:text-glow transition-all duration-300">
                Powering Next-Generation AI Solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}