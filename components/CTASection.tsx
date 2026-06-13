import { PhoneCall, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { siteConfig } from "@/lib/site";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Ready to start learning at D K Academy?",
  text = "Visit the institute near Ravi Band, Kalyan Puri, or send an admission inquiry and the team will guide you to the right course."
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-white">
      <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-white/10" />
      <div className="absolute bottom-8 right-10 h-40 w-40 rounded-full border border-primary/30" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div data-gsap="fade-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
            <Sparkles className="h-4 w-4 text-accent" />
            Admissions Open
          </span>
          <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{text}</p>
          <p className="mt-4 text-sm font-semibold text-blue-100">{siteConfig.shortAddress}</p>
        </div>
        <div data-gsap="fade-up" data-delay="0.12" className="flex flex-wrap gap-3">
          <MagneticButton href="/contact">Send Inquiry</MagneticButton>
          <MagneticButton href={siteConfig.justdial} variant="ghost" className="border-white/20 bg-white/10 text-white">
            <PhoneCall className="h-4 w-4" />
            View Listing
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
