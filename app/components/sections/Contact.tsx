"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/lib/hooks/use-toast";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_nkwa0sp',
        'template_f0ynch7',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '-w-hr6U8WGdNjB0uU'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-glow">The Collaboration Portal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step into our digital nexus where ideas transform into reality. Let's connect and
            create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 backdrop-blur-sm bg-background/50 hover:border-primary/50 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    className="bg-background/50 border-secondary hover:border-primary/50 transition-colors"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background/50 border-secondary hover:border-primary/50 transition-colors"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    className="bg-background/50 border-secondary hover:border-primary/50 transition-colors min-h-[150px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full group hover-glow"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-glow">Connect With Me</h3>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="hover-glow bg-background/50"
                    asChild
                  >
                    <a 
                      href="https://github.com/duttasayan835" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="hover-glow bg-background/50"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/sayan-dutta-exceptional98/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="hover-glow bg-background/50"
                    asChild
                  >
                    <a href="mailto:duttsayan835@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-glow">Location</h3>
                <p className="text-muted-foreground">
                  Based in India
                  <br />
                  Available for remote work worldwide
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-glow">Email</h3>
                <a 
                  href="mailto:duttsayan835@gmail.com" 
                  className="text-primary hover:text-glow transition-all"
                >
                  duttsayan835@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}