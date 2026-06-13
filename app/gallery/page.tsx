import type { Metadata } from "next";
import Image from "next/image";
import { Camera, CheckCircle2, MonitorCheck, Sparkles } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader } from "@/components/SectionHeader";
import { galleryItems, facilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View D K Academy learning environment, computer lab, classroom, and student-friendly facilities."
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-secondary py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl" data-gsap="fade-up">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              <Camera className="h-4 w-4 text-accent" />
              Gallery
            </span>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              A clean, focused environment for learning.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Explore the classroom feel, lab-first learning approach, and student-focused atmosphere of D K Academy.
            </p>
            <div className="mt-8">
              <MagneticButton href="/contact">Plan a Visit</MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Learning Spaces"
            title="Classroom, computer lab, and guided practice"
            text="The gallery highlights the practical and student-friendly personality of the institute."
          />
          <div data-gsap="stagger" className="grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                data-stagger-item
                className={index === 0 || index === 5 ? "group relative overflow-hidden rounded-lg md:col-span-2" : "group relative overflow-hidden rounded-lg"}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} at D K Academy`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectPosition: item.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur">
                    <Sparkles className="h-4 w-4 text-accent" />
                    D K Academy
                  </span>
                  <h2 className="font-display text-2xl font-black">{item.title}</h2>
                  <p className="mt-1 text-sm font-semibold text-slate-200">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div data-gsap="fade-up">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Facilities
            </span>
            <h2 className="font-display text-3xl font-black leading-tight text-secondary dark:text-white md:text-5xl">
              Built for practical learning and comfort.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              The academy is designed for students who want guided practice, accessible systems, and a disciplined study environment.
            </p>
          </div>
          <div data-gsap="stagger" className="grid gap-4 sm:grid-cols-2">
            {facilities.map((facility) => (
              <div key={facility} data-stagger-item className="flex gap-3 rounded-lg border border-slate-200 bg-surface p-4 dark:border-white/10 dark:bg-white/5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="font-semibold leading-7 text-slate-700 dark:text-slate-200">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-gsap="fade-up" className="grid gap-8 rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
            <div className="grid h-16 w-16 place-items-center rounded-lg bg-accent text-secondary">
              <MonitorCheck className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-black md:text-3xl">Want to see the institute in person?</h2>
              <p className="mt-2 text-slate-300">Plan a visit during working hours and discuss the right course.</p>
            </div>
            <MagneticButton href="/contact">Contact Us</MagneticButton>
          </div>
        </div>
      </section>

      <CTASection title="Visit the academy before admission." text="See the classroom, ask questions, and choose the right learning track for your goal." />
    </>
  );
}
