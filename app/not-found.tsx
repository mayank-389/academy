import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-surface px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-8xl font-black text-primary">404</p>
        <h1 className="mt-4 font-display text-4xl font-black text-secondary dark:text-white">
          Page not found
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          The page you are looking for may have moved. Return to D K Academy and continue exploring courses.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/">Back Home</MagneticButton>
        </div>
        <Link href="/contact" className="mt-5 inline-block text-sm font-bold text-primary">
          Contact for admission inquiry
        </Link>
      </div>
    </section>
  );
}
