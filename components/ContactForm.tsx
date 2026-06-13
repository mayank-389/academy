"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { inquiryOptions } from "@/lib/site";

type FormState = {
  name: string;
  contact: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  contact: "",
  interest: inquiryOptions[0],
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Enter your full name.";
    if (!/^[0-9+\-\s()]{8,}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact.trim())) {
      next.contact = "Enter a valid phone number or email.";
    }
    if (form.message.trim().length < 10) next.message = "Write a short message.";
    return next;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (hasErrors) return;
    window.alert("Thank you. Your inquiry is ready to be sent to D K Academy.");
    setForm(initialState);
    setSubmitted(false);
  };

  return (
    <form
      onSubmit={submit}
      data-gsap="fade-up"
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-bold text-secondary dark:text-white">Name</span>
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-white/10 dark:text-white"
            placeholder="Your full name"
          />
          {submitted && errors.name ? <span className="text-xs font-semibold text-red-500">{errors.name}</span> : null}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-bold text-secondary dark:text-white">Phone or Email</span>
          <input
            value={form.contact}
            onChange={(event) => setForm({ ...form, contact: event.target.value })}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-white/10 dark:text-white"
            placeholder="Contact detail"
          />
          {submitted && errors.contact ? <span className="text-xs font-semibold text-red-500">{errors.contact}</span> : null}
        </label>
      </div>
      <label className="mt-5 block space-y-2">
        <span className="text-sm font-bold text-secondary dark:text-white">Interested In</span>
        <select
          value={form.interest}
          onChange={(event) => setForm({ ...form, interest: event.target.value })}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          {inquiryOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="mt-5 block space-y-2">
        <span className="text-sm font-bold text-secondary dark:text-white">Message</span>
        <textarea
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="min-h-36 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-white/10 dark:text-white"
          placeholder="Tell us which course or class you want to join."
        />
        {submitted && errors.message ? <span className="text-xs font-semibold text-red-500">{errors.message}</span> : null}
      </label>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <MagneticButton type="submit">
          <Send className="h-4 w-4" />
          Submit Inquiry
        </MagneticButton>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Form validation runs instantly in the browser.
        </p>
      </div>
    </form>
  );
}
