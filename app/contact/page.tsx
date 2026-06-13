import type { Metadata } from "next";
import { Clock, ExternalLink, MapPin, MessageCircle, Navigation, Send } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact D K Academy near Ravi Band, Jalebi Chowk Road, Kalyan Puri, Delhi for admissions and course inquiries."
};

const contactCards = [
  {
    title: "Address",
    text: siteConfig.address,
    icon: MapPin
  },
  {
    title: "Working Hours",
    text: `${siteConfig.hours.weekdays}. ${siteConfig.hours.sunday}.`,
    icon: Clock
  },
  {
    title: "Admission Inquiry",
    text: "Send your course or coaching requirement and the academy will guide you.",
    icon: Send
  }
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address);

  return (
    <>
      <section className="bg-surface py-20 dark:bg-slate-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-gsap="fade-up">
              <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Contact Us
              </span>
              <h1 className="font-display text-4xl font-black leading-tight text-secondary dark:text-white md:text-6xl">
                Ask about admissions, courses, and batches.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                D K Academy is located near Ravi Band on Jalebi Chowk Road in Kalyan Puri, Delhi. Send an inquiry or visit during working hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href={`https://wa.me/?text=${encodeURIComponent(siteConfig.whatsappText)}`}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Inquiry
                </MagneticButton>
                <MagneticButton href={siteConfig.justdial} variant="ghost">
                  <ExternalLink className="h-4 w-4" />
                  Justdial Listing
                </MagneticButton>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Details"
            title="Everything you need before visiting"
            text="Use these details to plan your visit, ask questions, or send an inquiry."
          />
          <div data-gsap="stagger" className="grid gap-5 md:grid-cols-3">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} data-stagger-item className="rounded-lg border border-slate-200 bg-surface p-6 dark:border-white/10 dark:bg-white/5">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-black text-secondary dark:text-white">{item.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div data-gsap="fade-up">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Location
            </span>
            <h2 className="font-display text-3xl font-black leading-tight text-secondary dark:text-white md:text-5xl">
              Near Ravi Band, Jalebi Chowk Road.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{siteConfig.address}</p>
            <div className="mt-7">
              <MagneticButton href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}>
                <Navigation className="h-4 w-4" />
                Open Directions
              </MagneticButton>
            </div>
          </div>
          <div data-gsap="fade-up" data-delay="0.12" className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
            <iframe
              title="D K Academy location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[430px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Admissions and course inquiries are open."
        text="Send your details, choose your interest, and visit D K Academy during working hours for guidance."
      />
    </>
  );
}
