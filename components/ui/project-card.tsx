"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  source: string;
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  link,
  source,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-sm text-primary mb-2">{category}</span>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-glow transition-all duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-6 flex-grow">
            {description}
          </p>
          
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild className="hover-glow">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="hover-glow">
              <a href={source} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}