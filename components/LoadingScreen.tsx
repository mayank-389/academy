"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-secondary text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <div className="relative flex flex-col items-center gap-5">
            <div className="relative grid h-24 w-24 place-items-center rounded-full border border-white/15">
              <span className="absolute inset-0 rounded-full border border-primary/50 animate-pulseRing" />
              <span className="absolute inset-3 rounded-full border border-accent/50 animate-pulseRing [animation-delay:0.35s]" />
              <span className="font-display text-2xl font-black">DK</span>
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold">D K Academy</p>
              <p className="mt-1 text-sm text-white/65">Preparing your learning space</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
