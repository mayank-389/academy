"use client";

import { useInView, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { stiffness: 80, damping: 18 });
  const display = useTransform(spring, (latest) => Math.round(latest).toLocaleString("en-IN"));

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  return (
    <div
      ref={ref}
      data-stagger-item
      className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
    >
      <div className="font-display text-3xl font-black text-secondary dark:text-white">
        <motion.span>{display}</motion.span>
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{label}</p>
    </div>
  );
}
