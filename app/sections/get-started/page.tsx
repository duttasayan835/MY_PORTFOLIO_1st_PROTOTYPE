"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-background p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto"
      >
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Get Started</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Choose a plan that best fits your needs and start creating amazing experiences today.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <p className="text-3xl font-bold mb-4">$9<span className="text-lg text-muted-foreground">/mo</span></p>
            <ul className="space-y-2 mb-6">
              <li>✓ Basic 3D Models</li>
              <li>✓ Standard Support</li>
              <li>✓ 5 Projects</li>
            </ul>
            <Button className="w-full">Select Plan</Button>
          </Card>
          
          <Card className="p-6 border-primary">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-3xl font-bold mb-4">$29<span className="text-lg text-muted-foreground">/mo</span></p>
            <ul className="space-y-2 mb-6">
              <li>✓ Advanced 3D Models</li>
              <li>✓ Priority Support</li>
              <li>✓ 15 Projects</li>
            </ul>
            <Button className="w-full">Select Plan</Button>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-3xl font-bold mb-4">$99<span className="text-lg text-muted-foreground">/mo</span></p>
            <ul className="space-y-2 mb-6">
              <li>✓ Custom 3D Models</li>
              <li>✓ 24/7 Support</li>
              <li>✓ Unlimited Projects</li>
            </ul>
            <Button className="w-full">Select Plan</Button>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}