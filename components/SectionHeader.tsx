import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
  children
}: SectionHeaderProps) {
  return (
    <div
      data-gsap="fade-up"
      className={cn(
        "mx-auto mb-12 max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left"
      )}
    >
      <span className="mb-4 inline-flex rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary dark:border-blue-300/20 dark:bg-blue-300/10 dark:text-blue-200">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-black leading-tight text-secondary dark:text-white md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
          {text}
        </p>
      ) : null}
      {children}
    </div>
  );
}
