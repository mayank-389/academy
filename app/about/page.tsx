import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, CheckCircle2, HeartHandshake, Lightbulb, MapPin, ShieldCheck, Target } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CTASection } from "@/components/CTASection";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig, stats, usps } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about D K Academy, a computer training and academic coaching institute in Kalyan Puri, Delhi."
};

const values = [
  {
    title: "Practical First",
    text: "Students learn by using systems, solving assignments, and repeating real digital workflows.",
    icon: Lightbulb
  },
  {
    title: "Student Friendly",
    text: "The environment is supportive, approachable, and built around doubt clearing.",
    icon: HeartHandshake
  },
  {
    title: "Career Mindset",
    text: "Computer skills are taught with a focus on confidence, employability, and daily usefulness.",
    icon: Target
  },
  {
    title: "Trusted Guidance",
    text: "Academic coaching and course counselling help learners choose the right path.",
    icon: ShieldCheck
  }
];

const aboutCards = [
  {
    title: "Computer Training",
    text: "Lab-based computer courses for beginners and career-focused learners.",
    icon: BookOpen
  },
  {
    title: "Academic Coaching",
    text: "Structured support from Class 1st to Post Graduation.",
    icon: BookOpen
  },
  {
    title: "Admission Guidance",
    text: "Course counselling for students and parents before enrollment.",
    icon: BookOpen
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface py-20 dark:bg-slate-950 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div data-gsap="fade-up">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              About D K Academy
            </span>
            <h1 className="font-display text-4xl font-black leading-tight text-secondary dark:text-white md:text-6xl">
              A focused learning institute in Kalyan Puri, Delhi.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              D K Academy provides computer training and academic coaching with an emphasis on practical learning,
              personal guidance, and affordable access for students who want to grow with confidence.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <MagneticButton href="/courses">View Courses</MagneticButton>
              <MagneticButton href="/contact" variant="ghost">Visit Institute</MagneticButton>
            </div>
          </div>
          <div data-gsap="fade-up" data-delay="0.12" className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-glow dark:border-white/10 dark:bg-white/5">
            <Image
              src="/images/dk-academy-classroom.png"
              alt="Students learning at D K Academy"
              width={1200}
              height={760}
              className="h-[430px] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/88 p-4 text-secondary shadow-xl backdrop-blur dark:bg-secondary/80 dark:text-white">
              <p className="flex items-start gap-3 text-sm font-bold">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {siteConfig.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Approach"
            title="Clear teaching. Real practice. Consistent support."
            text="The academy supports both academic learning and skill learning, helping students move from hesitation to confidence."
          />
          <div data-gsap="stagger" className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} data-stagger-item className="rounded-lg border border-slate-200 bg-surface p-6 dark:border-white/10 dark:bg-white/5">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-accent/15 text-amber-700 dark:text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-black text-secondary dark:text-white">{value.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div data-gsap="fade-up">
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              Why Families Choose Us
            </span>
            <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">
              Designed for students who need structure and confidence.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              D K Academy keeps learning accessible while maintaining a serious, disciplined classroom experience.
            </p>
          </div>
          <div data-gsap="stagger" className="grid gap-3 sm:grid-cols-2">
            {usps.map((usp) => (
              <div key={usp} data-stagger-item className="flex gap-3 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="font-semibold leading-7 text-slate-100">{usp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="At A Glance"
            title="Built for everyday progress"
            text="Simple numbers, clear value, and a location that serves students around Kalyan Puri."
          />
          <div data-gsap="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <AnimatedCounter key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {aboutCards.map((item) => {
            const Icon = item.icon;
            return (
            <article key={item.title} data-gsap="fade-up" className="rounded-lg border border-slate-200 bg-surface p-7 dark:border-white/10 dark:bg-white/5">
              <Icon className="h-8 w-8 text-primary" />
              <h2 className="mt-5 font-display text-2xl font-black text-secondary dark:text-white">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
            </article>
            );
          })}
        </div>
      </section>

      <CTASection title="Come see the learning environment." text="Visit D K Academy near Ravi Band, Jalebi Chowk Road, and discuss the right course or coaching program." />
    </>
  );
}
