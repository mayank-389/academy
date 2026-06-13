"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MouseEvent, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button"
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);

  const move = (event: MouseEvent<HTMLElement>) => {
    const target = ref.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    target.style.transform = `translate(${x * 0.16}px, ${y * 0.18}px)`;
  };

  const leave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const setRef = (node: HTMLAnchorElement | HTMLButtonElement | null) => {
    ref.current = node;
  };

  const classes = cn(
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
    variant === "primary" &&
      "bg-primary text-white shadow-glow hover:-translate-y-0.5 hover:bg-blue-500",
    variant === "secondary" &&
      "bg-secondary text-white shadow-xl shadow-slate-950/15 hover:-translate-y-0.5 dark:bg-white dark:text-secondary",
    variant === "ghost" &&
      "border border-slate-200 bg-white/70 text-secondary backdrop-blur hover:border-primary/40 hover:text-primary dark:border-white/15 dark:bg-white/10 dark:text-white",
    className
  );

  const content = (
    <>
      <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/25 opacity-0 transition-opacity duration-300 group-hover:animate-shine group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </>
  );

  if (href && /^https?:\/\//.test(href)) {
    return (
      <a
        ref={setRef}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        onMouseMove={move}
        onMouseLeave={leave}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        ref={setRef}
        href={href}
        className={classes}
        onMouseMove={move}
        onMouseLeave={leave}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={setRef}
      type={type}
      className={classes}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      {content}
    </button>
  );
}
