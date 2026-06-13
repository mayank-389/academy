import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ClipboardCheck, Keyboard, Laptop, MonitorCheck, MousePointerClick, Presentation, ShieldCheck } from "lucide-react";
import { CourseCard } from "@/components/CourseCard";
import { CTASection } from "@/components/CTASection";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader } from "@/components/SectionHeader";
import { computerCourses, facilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Computer Training",
  description:
    "Computer training courses at D K Academy with hands-on practice, MS Office, typing, basic computers, and accounting basics."
};

const icons = [Laptop, Presentation, ClipboardCheck, Keyboard];

const process = [
  {
    title: "Start From Basics",
    text: "Students begin with system use, files, keyboard confidence, and digital habits.",
    icon: MousePointerClick
  },
  {
    title: "Practice In Lab",
    text: "Each topic is supported with guided computer practice and assignments.",
    icon: MonitorCheck
  },
  {
    title: "Build Job Skills",
    text: "Learners practice documents, spreadsheets, typing, accounting basics, and office workflows.",
    icon: ShieldCheck
  }
];

export default function ComputerTrainingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary py-20 text-white lg:py-28">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src="/images/dk-academy-classroom.png"
            alt="Computer training classroom at D K Academy"
            fill
            className="object-cover opacity-55"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-gsap="fade-up">
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              Computer Training
            </span>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              Learn computers with real lab practice.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              From basic computer confidence to office skills, D K Academy helps students learn through hands-on assignments and guided practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/contact">Join Computer Course</MagneticButton>
              <MagneticButton href="/gallery" variant="ghost" className="border-white/20 bg-white/10 text-white">
                View Gallery
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Course Options"
            title="Computer programs for beginners and career learners"
            text="No personal laptop is required. Students can practice in the academy lab during training."
          />
          <div data-gsap="stagger" className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {computerCourses.map((course, index) => {
              const Icon = icons[index] || Laptop;
              return (
                <CourseCard
                  key={course.title}
                  icon={<Icon className="h-6 w-6" />}
                  title={course.title}
                  category={course.category}
                  duration={course.duration}
                  summary={course.summary}
                  modules={course.modules}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Training Method"
            title="A simple path from basics to confidence"
            text="The academy keeps learning structured, practical, and paced for students who need patient guidance."
          />
          <div data-gsap="stagger" className="grid gap-6 lg:grid-cols-3">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} data-stagger-item className="relative rounded-lg border border-slate-200 bg-surface p-7 dark:border-white/10 dark:bg-white/5">
                  <div className="absolute right-6 top-6 font-display text-6xl font-black text-slate-200 dark:text-white/10">
                    0{index + 1}
                  </div>
                  <div className="relative grid h-14 w-14 place-items-center rounded-lg bg-primary text-white shadow-glow">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="relative mt-7 font-display text-2xl font-black text-secondary dark:text-white">{step.title}</h2>
                  <p className="relative mt-3 leading-7 text-slate-600 dark:text-slate-300">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div data-gsap="fade-up">
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              Lab Facilities
            </span>
            <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">
              Learn on systems, not just from notes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              D K Academy is suitable for students who do not have a personal laptop but still want computer confidence.
            </p>
          </div>
          <div data-gsap="stagger" className="grid gap-4 sm:grid-cols-2">
            {facilities.slice(0, 6).map((facility) => (
              <div key={facility} data-stagger-item className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <p className="font-semibold leading-7">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start computer training from just Rs. 400/month."
        text="Send an inquiry for the right batch, course level, and fee details."
      />
    </>
  );
}
