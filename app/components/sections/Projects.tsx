"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    title: "Savitr-AI",
    description: "An AI-powered delivery route optimization system with real-time tracking and analytics.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    category: "AI & Web Development",
    link: "#",
    source: "#"
  },
  {
    title: "Road Safety Analysis",
    description: "Interactive dashboard analyzing road safety patterns across India using ML and data visualization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Data Analysis",
    link: "#",
    source: "#"
  },
  {
    title: "Spotify Clone",
    description: "A full-featured music streaming platform with real-time playback and playlist management.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "Web Development",
    link: "#",
    source: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-secondary/50 backdrop-blur-sm z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-glow">Featured Projects</h2>
          <p className="text-muted-foreground">
            Explore my latest works showcasing innovation and technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}