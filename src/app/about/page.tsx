import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedSkillBar from "@/components/AnimatedSkillBar";
import TiltCard from "@/components/TiltCard";
import {
  ArrowRight,
  Award,
  Heart,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Laila Web Solutions",
  description:
    "Learn about Laila Web Solutions — a UK-based web development and design agency dedicated to helping businesses thrive online.",
};

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Every decision we make is guided by your business goals. We build websites that convert visitors into customers.",
    color: "bg-primary-500/10 text-primary-400",
  },
  {
    icon: Heart,
    title: "Client-First",
    desc: "Your satisfaction is our top priority. We listen, collaborate, and ensure you're delighted with the final result.",
    color: "bg-accent-500/10 text-accent-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay ahead of the curve, adopting the latest technologies and design trends to give you a competitive edge.",
    color: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Zap,
    title: "Quality & Speed",
    desc: "We don't compromise. Every project is delivered on time, on budget, and to the highest standard of quality.",
    color: "bg-accent-500/10 text-accent-400",
  },
];

const skills = [
  { name: "React / Next.js", level: 95, color: "from-primary-500 to-primary-400" },
  { name: "TypeScript", level: 90, color: "from-primary-400 to-accent-400" },
  { name: "Tailwind CSS", level: 95, color: "from-accent-500 to-accent-400" },
  { name: "Node.js / Express", level: 85, color: "from-accent-400 to-primary-400" },
  { name: "WordPress / PHP", level: 80, color: "from-primary-500 to-primary-400" },
  { name: "Shopify / E-commerce", level: 85, color: "from-accent-500 to-accent-400" },
  { name: "UI/UX Design", level: 90, color: "from-primary-500 to-accent-400" },
  { name: "SEO & Performance", level: 85, color: "from-primary-500 to-accent-400" },
];

const milestones = [
  {
    year: "2018",
    title: "Founded",
    desc: "Started as a freelance web developer, delivering projects for small businesses across the UK.",
  },
  {
    year: "2020",
    title: "First Major Client",
    desc: "Partnered with our first enterprise client, building a custom SaaS marketing platform.",
  },
  {
    year: "2022",
    title: "100 Projects Milestone",
    desc: "Celebrated our 100th successful project delivery with a 98% client satisfaction rate.",
  },
  {
    year: "2024",
    title: "Team Expansion",
    desc: "Grew the team to include specialist designers and developers to handle larger projects.",
  },
  {
    year: "2026",
    title: "150+ Projects & Growing",
    desc: "Continuing to deliver excellence for UK businesses with an expanded service offering.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-primary-600/15 rounded-full blur-3xl animate-drift-1" />
          <div className="absolute bottom-10 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-accent-500/10 rounded-full blur-3xl animate-drift-2" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.08),transparent_50%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <span className="animate-fade-in-down inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 text-xs font-semibold text-primary-400 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
                About Us
              </span>
              <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Passionate About Building{" "}
                <span className="gradient-text">Great Websites</span>
              </h1>
              <p className="animate-fade-in-up delay-200 mt-6 text-lg text-muted leading-relaxed">
                We&apos;re a UK-based web development and design studio with a
                passion for creating exceptional digital experiences. With over 8
                years of experience, we&apos;ve helped 150+ businesses establish
                and strengthen their online presence.
              </p>
              <p className="animate-fade-in-up delay-300 mt-4 text-muted leading-relaxed">
                From small startups to established enterprises, we bring the
                same level of dedication, creativity, and technical expertise to
                every project. We don&apos;t just build websites — we build
                digital solutions that drive real business results.
              </p>
            </div>
            <AnimateOnScroll animation="slide-right">
              <div className="relative">
                <div className="aspect-square rounded-3xl border border-white/[0.06] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                    alt="Our team collaborating on web projects"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-xl border border-white/[0.1] bg-white/[0.05] backdrop-blur-xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted mb-0.5">Happy Clients</p>
                        <p className="text-2xl font-bold gradient-text">
                          <AnimatedCounter target={150} suffix="+" duration={2500} />
                        </p>
                      </div>
                      <div className="h-px w-px" />
                      <div>
                        <p className="text-xs text-muted mb-0.5">Satisfaction</p>
                        <p className="text-2xl font-bold text-foreground">
                          <AnimatedCounter target={98} suffix="%" duration={2000} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 rounded-2xl border border-white/[0.06] bg-surface/90 backdrop-blur-lg p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-primary-500/10 text-primary-400 flex items-center justify-center">
                      <Award size={22} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">8+ Years</p>
                      <p className="text-xs text-muted">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-primary-600/5 rounded-full blur-3xl animate-drift-3" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <AnimateOnScroll>
            <SectionHeading
              label="Our Values"
              title="What Drives Us"
              description="These core values guide everything we do and ensure we deliver the best possible outcome for every client."
              gradient
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimateOnScroll key={v.title} animation="fade-up" delay={i * 100}>
                  <TiltCard className="rounded-2xl h-full">
                    <div className="border border-white/[0.06] bg-white/[0.02] rounded-2xl p-6 sm:p-8 text-center h-full group">
                      <div
                        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${v.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={28} />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-foreground">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </TiltCard>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="absolute bottom-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-accent-500/5 rounded-full blur-3xl animate-drift-1" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <AnimateOnScroll>
            <SectionHeading
              label="Our Expertise"
              title="Skills & Technologies"
              description="We work with a modern, versatile tech stack to deliver the best solution for your project."
              gradient
            />
          </AnimateOnScroll>
          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((skill, i) => (
              <AnimatedSkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                delay={i * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 sm:py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-accent-500/5 rounded-full blur-3xl animate-drift-2" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <AnimateOnScroll>
            <SectionHeading
              label="Our Journey"
              title="How We Got Here"
              description="From a solo freelancer to a trusted web development studio — here's our story so far."
              gradient
            />
          </AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-primary-500/20 pl-8 space-y-12">
              {milestones.map((m, i) => (
                <AnimateOnScroll key={m.year} animation="slide-left" delay={i * 120}>
                  <div className="relative">
                    <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 border-4 border-background shadow-lg shadow-primary-500/30" />
                    <span className="inline-block text-xs font-bold uppercase tracking-widest gradient-text mb-1">
                      {m.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(79,70,229,0.08),transparent_50%)]" />
        <div className="hidden sm:block absolute top-10 left-10 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl animate-float" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="scale">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Ready to Work Together?
            </h2>
            <p className="mt-5 text-muted max-w-2xl mx-auto text-lg">
              We&apos;d love to hear about your project. Get in touch and
              let&apos;s create something amazing.
            </p>
            <Link
              href="/contact#form"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
