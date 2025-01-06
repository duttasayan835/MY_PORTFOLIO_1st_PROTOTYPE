"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4"
              alt="Sayan Dutta"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-glow"
            >
              About Me
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6"
            >
              A passionate Full Stack Developer and AI enthusiast based in India, with expertise
              in building exceptional digital experiences. I specialize in creating innovative
              web applications that combine cutting-edge technology with intuitive design.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-4 mb-8"
            >
              <Button variant="outline" size="icon" className="hover-glow">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover-glow">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover-glow">
                <Mail className="h-4 w-4" />
              </Button>
            </motion.div>
            
            <Button variant="outline" className="group hover-glow">
              Download Resume
              <FileDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}