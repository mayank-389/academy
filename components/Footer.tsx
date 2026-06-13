import Link from "next/link";
import { Clock, MapPin, ExternalLink } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-white py-12 text-secondary dark:bg-slate-950 dark:text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary font-black text-white">
              DK
            </span>
            <span>
              <span className="block font-display text-xl font-black">D K Academy</span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {siteConfig.tagline}
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-slate-600 dark:text-slate-300">
            Computer training and academic coaching institute in Kalyan Puri, Delhi,
            focused on practical learning, affordability, and student confidence.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-black">Pages</h3>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-primary dark:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-black">Visit Us</h3>
          <div className="mt-4 space-y-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              {siteConfig.address}
            </p>
            <p className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                {siteConfig.hours.weekdays}
                <br />
                {siteConfig.hours.sunday}
              </span>
            </p>
            <a
              href={siteConfig.justdial}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-secondary transition hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Open Justdial Listing
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-4 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:px-6 lg:px-8">
        (c) {new Date().getFullYear()} D K Academy. All rights reserved.
      </div>
    </footer>
  );
}
