"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@lailaweb.co.uk",
    desc: "We respond within 24 hours",
    color: "bg-primary-500/10 text-primary-400",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+44 20 7946 0958",
    desc: "Mon-Fri, 9am-6pm GMT",
    color: "bg-accent-500/10 text-accent-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "London, United Kingdom",
    desc: "Available for remote clients UK-wide",
    color: "bg-primary-500/10 text-primary-400",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 Hours",
    desc: "We value your time",
    color: "bg-accent-500/10 text-accent-400",
  },
];

const projectTypes = [
  "New Website",
  "Website Redesign",
  "Bug Fixing / Error Resolution",
  "E-commerce Development",
  "UI/UX Design",
  "Performance Optimisation",
  "SEO Services",
  "Maintenance & Support",
  "Other",
];

import BudgetRangeSlider from "@/components/BudgetRangeSlider";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClasses =
    "w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-white/[0.15] border border-white/[0.06] bg-white/[0.02] transition-all duration-300";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary-600/15 rounded-full blur-3xl animate-drift-1" />
          <div className="absolute bottom-20 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-accent-500/10 rounded-full blur-3xl animate-drift-2" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.08),transparent_50%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="animate-fade-in-down inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 text-xs font-semibold text-primary-400 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
              Contact Us
            </span>
            <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Tell Us About{" "}
              <span className="gradient-text">Your Project</span>
            </h1>
            <p className="animate-fade-in-up delay-200 mt-6 text-lg text-muted leading-relaxed">
              Whether you need a new website, a redesign, or help resolving
              errors — fill out the form below and we&apos;ll get back to you
              with a free, no-obligation quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-16 sm:py-24 md:py-32 relative scroll-mt-24">
        <div className="absolute top-1/4 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-primary-600/5 rounded-full blur-3xl animate-drift-3" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <AnimateOnScroll animation="slide-left">
                <SectionHeading
                  label="Get a Quote"
                  title="Describe Your Project"
                  description="The more details you provide, the better we can tailor our response to your needs."
                  center={false}
                />

                {submitted ? (
                  <div className="rounded-2xl border border-emerald-500/20 bg-white/[0.03] p-8 sm:p-12 text-center glow-primary">
                    <CheckCircle2
                      size={48}
                      className="mx-auto text-emerald-400 mb-4"
                    />
                    <h3 className="text-xl font-bold text-foreground">
                      Thank You!
                    </h3>
                    <p className="mt-2 text-muted">
                      We&apos;ve received your project details. Our team will
                      review your requirements and get back to you within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address{" "}
                          <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.co.uk"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+44 7XXX XXX XXX"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your Company Ltd."
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Type <span className="text-amber-400">*</span>
                      </label>
                      <select
                        required
                        defaultValue=""
                        className={inputClasses}
                      >
                        <option value="" disabled>
                          Select a project type
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <BudgetRangeSlider />

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Existing Website URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://www.yourwebsite.co.uk"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Details{" "}
                        <span className="text-amber-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={6}
                        placeholder="Tell us about your project — what do you need? What problems are you facing? What are your goals? The more detail, the better we can help."
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      Send Your Request
                      <Send
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-2">
              <AnimateOnScroll animation="slide-right">
                <div className="sticky top-24 space-y-8">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
                    <h3 className="text-lg font-bold text-foreground">
                      What Happens Next?
                    </h3>
                    <ol className="mt-4 space-y-4">
                      {[
                        {
                          n: 1,
                          title: "We Review Your Request",
                          desc: "Our team carefully reviews your project details.",
                        },
                        {
                          n: 2,
                          title: "Free Consultation Call",
                          desc: "We schedule a call to discuss your requirements in detail.",
                        },
                        {
                          n: 3,
                          title: "Tailored Proposal",
                          desc: "You receive a detailed proposal with timeline and pricing.",
                        },
                        {
                          n: 4,
                          title: "We Start Building",
                          desc: "Once approved, we begin work immediately.",
                        },
                      ].map((item) => (
                        <li key={item.n} className="flex gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">
                            {item.n}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {item.title}
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
                    <h3 className="text-lg font-bold text-foreground">
                      Prefer to Chat?
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      If you&apos;d rather speak to us directly, feel free to
                      call or email. We&apos;re always happy to help.
                    </p>
                    <div className="mt-4 space-y-3">
                      <a
                        href="mailto:hello@lailaweb.co.uk"
                        className="flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <Mail size={16} />
                        hello@lailaweb.co.uk
                      </a>
                      <a
                        href="tel:+442079460958"
                        className="flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <Phone size={16} />
                        +44 20 7946 0958
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 sm:py-20 bg-surface relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-primary-600/5 rounded-full blur-3xl animate-drift-1" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <AnimateOnScroll key={info.label} animation="fade-up" delay={i * 100}>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center card-hover h-full">
                    <div
                      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${info.color} mb-4`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {info.label}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary-400">
                      {info.value}
                    </p>
                    <p className="mt-1 text-xs text-muted">{info.desc}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
