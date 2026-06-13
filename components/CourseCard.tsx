import { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

type CourseCardProps = {
  icon: ReactNode;
  title: string;
  category: string;
  duration: string;
  summary: string;
  modules?: string[];
  href?: string;
};

export function CourseCard({
  icon,
  title,
  category,
  duration,
  summary,
  modules = [],
  href = "/contact"
}: CourseCardProps) {
  return (
    <article
      data-stagger-item
      className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow dark:border-white/10 dark:bg-white/5"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-700 dark:text-amber-300">
          {category}
        </div>
      </div>
      <h3 className="font-display text-xl font-black text-secondary dark:text-white">{title}</h3>
      <p className="mt-2 text-sm font-semibold text-primary">{duration}</p>
      <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">{summary}</p>
      {modules.length ? (
        <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {modules.map((module) => (
            <li key={module} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {module}
            </li>
          ))}
        </ul>
      ) : null}
      <MagneticButton href={href} variant="ghost" className="mt-6 w-full">
        Enquire Now
      </MagneticButton>
    </article>
  );
}
