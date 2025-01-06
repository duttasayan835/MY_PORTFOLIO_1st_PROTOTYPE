"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { GsapReveal } from "@/components/ui/gsap-reveal";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <GsapReveal delay={0.2}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-sm md:text-base text-muted-foreground">
              Welcome to Sayan's Digital Nexus
            </span>
          </div>
        </GsapReveal>

        <GsapReveal delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Sayan Dutta
            </span>
          </h1>
        </GsapReveal>
        
        <GsapReveal delay={0.6}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A Web Developer and Generative AI Expert crafting innovative digital experiences
            through code and creativity. Specializing in next-generation web applications
            and AI-powered solutions.
          </p>
        </GsapReveal>
        
        <GsapReveal delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#projects">
              <Button size="lg" className="group">
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#about">
              <Button size="lg" variant="outline">
                About Me
              </Button>
            </Link>
          </div>
        </GsapReveal>

        <GsapReveal delay={1} distance={50}>
          <div className="mt-16 flex items-center justify-center gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </GsapReveal>
      </div>
    </div>
  );
}