import Image from "next/image";
import {
  Award,
  BookOpenCheck,
  CheckCircle2,
  GraduationCap,
  Laptop,
  MonitorCheck,
  NotebookPen,
  Sparkles,
  Trophy,
  Users
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CourseCard } from "@/components/CourseCard";
import { CTASection } from "@/components/CTASection";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader } from "@/components/SectionHeader";
import {
  computerCourses,
  facilities,
  siteConfig,
  stats,
  successHighlights,
  usps,
  whyChoose
} from "@/lib/site";

const iconMap = [Laptop, MonitorCheck, BookOpenCheck, NotebookPen];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[84svh] items-center overflow-hidden bg-secondary px-4 py-20 text-white sm:px-6 lg:px-8">
        <Image
          src="/images/dk-academy-classroom.png"
          alt="D K Academy classroom learning environment"
          fill
          priority
          className="absolute inset-0 -z-20 object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,23,42,0.90),rgba(15,23,42,0.58)_44%,rgba(15,23,42,0.22)_72%,rgba(15,23,42,0.10))]" />
        <div data-parallax="35" className="absolute right-8 top-28 hidden rounded-lg border border-white/15 bg-white/10 px-5 py-4 backdrop-blur md:block">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Starting From</p>
          <p className="mt-1 font-display text-3xl font-black text-accent">Rs. 400/mo</p>
        </div>
        <div data-parallax="-30" className="absolute bottom-10 right-[15%] hidden rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur lg:block">
          Fully equipped computer lab
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <div data-gsap="fade-up" className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-accent" />
              Computer Training & Academic Coaching
            </div>
            <h1 data-gsap="fade-up" data-delay="0.08" className="text-balance font-display text-4xl font-black leading-[1.04] md:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p data-gsap="fade-up" data-delay="0.14" className="mt-5 max-w-2xl text-xl font-semibold text-blue-100 md:text-2xl">
              {siteConfig.tagline}
            </p>
            <p data-gsap="fade-up" data-delay="0.2" className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Premium computer courses and academic coaching in Kalyan Puri, Delhi, built around practical classes, guided practice, and personal attention.
            </p>
            <div data-gsap="fade-up" data-delay="0.26" className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/courses">Explore Courses</MagneticButton>
              <MagneticButton href="/contact" variant="ghost" className="border-white/20 bg-white/10 text-white">
                Admission Inquiry
              </MagneticButton>
            </div>
            <div data-gsap="stagger" className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["No laptop required", "Hands-on learning", "Class 1st to PG"].map((item) => (
                <div key={item} data-stagger-item className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-full animate-[marquee_26s_linear_infinite] gap-3">
            {[...usps, ...usps].map((usp, index) => (
              <span key={`${usp}-${index}`} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-surface px-4 py-2 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {usp}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="A practical institute for serious learners"
            text="D K Academy combines career-ready computer training with academic coaching support, so students can build confidence in class and beyond."
          />
          <div data-gsap="stagger" className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = [Award, Laptop, MonitorCheck, GraduationCap][index];
              return (
                <article key={item.title} data-stagger-item className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-white/5">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-black text-secondary dark:text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Popular Courses"
            title="Computer skills that students can use immediately"
            text="Every course is designed around lab practice, assignments, and useful digital workflows."
          />
          <div data-gsap="stagger" className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {computerCourses.map((course, index) => {
              const Icon = iconMap[index] || Laptop;
              return (
                <CourseCard
                  key={course.title}
                  icon={<Icon className="h-6 w-6" />}
                  title={course.title}
                  category={course.category}
                  duration={course.duration}
                  summary={course.summary}
                  modules={course.modules}
                  href="/computer-training"
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-20 text-white">
        <div data-parallax="-55" className="absolute -right-20 top-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div data-gsap="fade-up">
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              Student Success
            </span>
            <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">
              Confidence grows when learning becomes practical.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Students get repeated practice, guided doubt clearing, and a learning environment designed to make progress visible.
            </p>
            <div data-gsap="stagger" className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <AnimatedCounter key={item.label} {...item} />
              ))}
            </div>
          </div>
          <div data-gsap="stagger" className="grid content-center gap-4">
            {successHighlights.map((highlight, index) => (
              <div key={highlight} data-stagger-item className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-secondary">
                  {index % 2 ? <Trophy className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="font-display text-lg font-black">Result-focused support</h3>
                  <p className="mt-1 text-slate-300">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Facilities"
            title="Everything needed for comfortable learning"
            text="The institute is built for students who want guidance, discipline, and practical access to computer systems."
          />
          <div data-gsap="stagger" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div key={facility} data-stagger-item className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="font-semibold leading-7 text-slate-700 dark:text-slate-200">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
