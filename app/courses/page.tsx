import type { Metadata } from "next";
import { BookOpenCheck, Calculator, GraduationCap, Keyboard, Laptop, MonitorCheck, NotebookTabs } from "lucide-react";
import { CourseCard } from "@/components/CourseCard";
import { CTASection } from "@/components/CTASection";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader } from "@/components/SectionHeader";
import { academicPrograms, computerCourses, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore computer training and academic coaching courses at D K Academy in Kalyan Puri, Delhi."
};

const computerIcons = [Laptop, MonitorCheck, Calculator, Keyboard];

const courseTracks = [
  {
    title: "Computer Training",
    text: "For beginners, students, and job-ready learners who want practical digital skills.",
    href: "/computer-training",
    icon: Laptop
  },
  {
    title: "Academic Coaching",
    text: "For school, college, graduation, and post graduation learners who need guided academic support.",
    href: "/academic-coaching",
    icon: GraduationCap
  }
];

const courseReasons = [
  {
    title: "Affordable Start",
    text: "Courses starting from just Rs. 400/month.",
    icon: BookOpenCheck
  },
  {
    title: "Practical Lab",
    text: "Computer systems are available for hands-on practice.",
    icon: MonitorCheck
  },
  {
    title: "Student Guidance",
    text: "Course advice is available before admission.",
    icon: GraduationCap
  }
];

export default function CoursesPage() {
  return (
    <>
      <section className="bg-secondary py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl" data-gsap="fade-up">
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              Courses
            </span>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              Choose the course that matches your next step.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              D K Academy offers computer training and academic coaching in one student-friendly institute near Ravi Band, Kalyan Puri.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/contact">Ask for Admission</MagneticButton>
              <MagneticButton href="/computer-training" variant="ghost" className="border-white/20 bg-white/10 text-white">
                Computer Courses
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Two Learning Tracks"
            title="Skill courses and academic support under one roof"
            text="Students can build practical computer skills while also getting structured academic coaching."
          />
          <div data-gsap="stagger" className="grid gap-6 lg:grid-cols-2">
            {courseTracks.map((track) => {
              const Icon = track.icon;
              return (
                <article key={track.title} data-stagger-item className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-white/5">
                  <div className="grid h-14 w-14 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-black text-secondary dark:text-white">{track.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{track.text}</p>
                  <MagneticButton href={track.href} className="mt-7">
                    Explore Track
                  </MagneticButton>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Computer Courses"
            title="Lab-based programs for useful digital skills"
            text="Every course includes guided practice, classroom support, and a practical learning environment."
          />
          <div data-gsap="stagger" className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {computerCourses.map((course, index) => {
              const Icon = computerIcons[index] || Laptop;
              return (
                <CourseCard
                  key={course.title}
                  icon={<Icon className="h-6 w-6" />}
                  title={course.title}
                  category={course.category}
                  duration={course.duration}
                  summary={course.summary}
                  modules={course.modules}
                  href="/contact"
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Academic Coaching"
            title="Support from Class 1st to Post Graduation"
            text="The academic coaching track is structured around clarity, revision, and regular practice."
          />
          <div data-gsap="stagger" className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {academicPrograms.map((program) => (
              <article key={program.title} data-stagger-item className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <NotebookTabs className="h-8 w-8 text-primary" />
                <h2 className="mt-5 font-display text-xl font-black text-secondary dark:text-white">{program.title}</h2>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{program.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {courseReasons.map((item) => {
            const Icon = item.icon;
            return (
            <div key={item.title} data-gsap="fade-up" className="rounded-lg border border-slate-200 bg-surface p-7 dark:border-white/10 dark:bg-white/5">
              <Icon className="h-8 w-8 text-accent" />
              <h2 className="mt-5 font-display text-2xl font-black text-secondary dark:text-white">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
            </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Not sure which course to choose?"
        text={`Send an inquiry or visit ${siteConfig.shortAddress}. The academy can guide you based on your class, computer level, and goal.`}
      />
    </>
  );
}
