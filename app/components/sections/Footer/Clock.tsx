"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Clock() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);

    /**
     * A function to update the current time.
     */
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };

    // Initial update
    updateTime();

    // Set up an interval to call `updateTime` every 1000ms
    const timer = setInterval(updateTime, 1000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // If the component hasn't mounted yet, don't render anything
  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      // Initial state
      initial={{ opacity: 0 }}

      // Animate to 1 and then back to 0.5
      animate={{ 
        opacity: [0.5, 1, 0.5],
      }}

      // Set up the animation options
      transition={{
        // Animate over 2 seconds
        duration: 2,

        // Repeat the animation indefinitely
        repeat: Infinity,

        // Reverse the animation each time it is repeated
        repeatType: "reverse",
      }}

      // Set the class name for the component
      className="mt-4 font-mono text-sm text-primary/80"
    >
      {/* Render the current time */}
      {time}
    </motion.div>
  );
}
