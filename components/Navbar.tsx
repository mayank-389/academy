"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock, MapPin, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/MagneticButton";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("dk-theme");
    const shouldDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("dk-theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-secondary/85">
      <div className="hidden border-b border-slate-200/70 py-2 text-xs font-semibold text-slate-600 dark:border-white/10 dark:text-slate-300 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            {siteConfig.address}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            {siteConfig.hours.weekdays}
          </span>
        </div>
      </div>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-lg font-black text-white shadow-glow">
            DK
          </span>
          <span>
            <span className="block font-display text-lg font-black leading-5 text-secondary dark:text-white">
              D K Academy
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Kalyan Puri, Delhi
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-primary/10 hover:text-primary dark:text-slate-300",
                  active && "bg-primary/10 text-primary dark:text-blue-200"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleDark}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-secondary transition hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <div className="hidden lg:block">
            <MagneticButton href="/contact" className="min-h-11 px-5 py-2">
              Inquiry
            </MagneticButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-secondary dark:border-white/10 dark:bg-white/10 dark:text-white xl:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 dark:border-white/10 dark:bg-secondary xl:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-primary/10 hover:text-primary dark:text-slate-200",
                  pathname === link.href && "bg-primary/10 text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <MagneticButton href="/contact" className="mt-3 w-full">
              Admission Inquiry
            </MagneticButton>
          </div>
        </div>
      </div>
    </header>
  );
}
