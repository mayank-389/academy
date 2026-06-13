import type { Metadata } from "next";
import { BookMarked, BookOpenCheck, CheckCircle2, GraduationCap, NotebookPen, PenLine, Trophy, UsersRound } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader } from "@/components/SectionHeader";
import { academicPrograms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academic Coaching",
  description:
    "Academic coaching at D K Academy for Class 1st to Post Graduation with revision, doubts, and structured guidance."
};

const programIcons = [BookMarked, NotebookPen, Trophy, GraduationCap];

const coachingFeatures = [
  "Concept clarity with regular revision",
  "Homework and assignment guidance",
  "Subject-wise doubt clearing",
  "Exam-focused practice and discipline",
  "Supportive faculty and student-friendly environment",
  "Guidance from Class 1st to Post Graduation"
];

export default function AcademicCoachingPage() {
  return (
    <>
      <section className="bg-surface py-20 dark:bg-slate-950 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div data-gsap="fade-up">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Academic Coaching
            </span>
            <h1 className="font-display text-4xl font-black leading-tight text-secondary dark:text-white md:text-6xl">
              Coaching support from school basics to higher studies.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              D K Academy helps learners build study discipline, understand concepts, revise regularly, and prepare with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/contact">Ask for Coaching</MagneticButton>
              <MagneticButton href="/courses" variant="ghost">All Courses</MagneticButton>
            </div>
          </div>
          <div data-gsap="stagger" className="grid gap-4">
            {["Class 1st-5th", "Class 6th-10th", "Class 11th-12th", "Graduation & PG"].map((item) => (
              <div key={item} data-stagger-item className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-accent/15 text-amber-700 dark:text-amber-300">
                    <BookOpenCheck className="h-6 w-6" />
                  </div>
                  <p className="font-display text-xl font-black text-secondary dark:text-white">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Programs"
            title="Academic support for every stage"
            text="The coaching structure is designed for regular practice, doubt solving, and better study habits."
          />
          <div data-gsap="stagger" className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {academicPrograms.map((program, index) => {
              const Icon = programIcons[index] || GraduationCap;
              return (
                <article key={program.title} data-stagger-item className="rounded-lg border border-slate-200 bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-white/5">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-black text-secondary dark:text-white">{program.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{program.summary}</p>
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
              Coaching Method
            </span>
            <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">
              Better marks begin with a better routine.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The classroom approach focuses on discipline, repetition, guidance, and confidence-building.
            </p>
          </div>
          <div data-gsap="stagger" className="grid gap-4 sm:grid-cols-2">
            {coachingFeatures.map((feature) => (
              <div key={feature} data-stagger-item className="flex gap-3 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <p className="font-semibold leading-7">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            { title: "Doubt Sessions", text: "Students get guided support when topics feel unclear.", icon: PenLine },
            { title: "Regular Practice", text: "Revision and written practice help students retain concepts.", icon: NotebookPen },
            { title: "Parent Friendly", text: "The environment is approachable for learners and families.", icon: UsersRound }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} data-gsap="fade-up" className="rounded-lg border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/5">
                <Icon className="h-8 w-8 text-primary" />
                <h2 className="mt-5 font-display text-2xl font-black text-secondary dark:text-white">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Need academic support for your class?"
        text="Send an inquiry with the student's class and subject needs. D K Academy will guide you to the right coaching support."
      />
    </>
  );
}
