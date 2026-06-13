"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/?text=${encodeURIComponent(siteConfig.whatsappText)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp inquiry"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-900/25 transition hover:-translate-y-1"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400/45 animate-pulseRing" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className={cn(
          "grid h-12 w-12 place-items-center rounded-full bg-secondary text-white shadow-xl transition duration-300 dark:bg-white dark:text-secondary",
          shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
