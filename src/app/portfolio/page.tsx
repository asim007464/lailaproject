import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TiltCard from "@/components/TiltCard";
import MouseGlow from "@/components/MouseGlow";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Laila Web Solutions",
  description:
    "Explore our portfolio of completed web development projects for UK businesses.",
};

const projects = [
  {
    title: "Whitfield & Co. Law Firm",
    category: "Corporate Website",
    desc: "A modern, authoritative website for a London-based law firm. Features a clean design, practice area pages, team profiles, and an integrated client portal.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
  },
  {
    title: "Bloom Boutique",
    category: "E-commerce",
    desc: "A beautiful online shop for a premium flower delivery service. Includes real-time inventory, subscription bouquets, and a seamless checkout experience.",
    tags: ["Shopify", "Custom Theme", "Liquid"],
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&h=500&fit=crop",
  },
  {
    title: "TechBridge Solutions",
    category: "SaaS Website",
    desc: "A conversion-focused marketing website for a B2B SaaS company. Features animated demos, pricing tables, and HubSpot integration for lead capture.",
    tags: ["React", "Framer Motion", "Headless CMS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    title: "The Green Kitchen",
    category: "Restaurant Website",
    desc: "An appetising website for a plant-based restaurant in Manchester. Includes an online menu, table reservations, and integration with delivery platforms.",
    tags: ["WordPress", "Custom Theme", "PHP"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
  },
  {
    title: "Peak Fitness Studio",
    category: "Fitness & Wellness",
    desc: "A dynamic website for a boutique fitness studio with class bookings, membership management, trainer profiles, and video-on-demand integration.",
    tags: ["Next.js", "Stripe", "Prisma"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
  },
  {
    title: "Evergreen Properties",
    category: "Real Estate",
    desc: "A property listing platform with advanced search filters, interactive maps, virtual tours, and an agent dashboard for managing listings.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-primary-600/15 rounded-full blur-3xl animate-drift-1" />
          <div className="absolute bottom-20 right-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-accent-500/10 rounded-full blur-3xl animate-drift-2" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="animate-fade-in-down inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 text-xs font-semibold text-primary-400 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
                Our Portfolio
              </span>
              <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Websites We&apos;re{" "}
                <span className="gradient-text">Proud Of</span>
              </h1>
              <p className="animate-fade-in-up delay-200 mt-6 text-lg text-muted leading-relaxed">
                Browse a selection of our recent projects. Each one was crafted
                with care, attention to detail, and a focus on delivering
                measurable results for our clients.
              </p>
              <div className="animate-fade-in-up delay-300 mt-8 flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">150+</p>
                  <p className="text-xs text-muted mt-0.5">Projects</p>
                </div>
                <div className="h-10 w-px bg-white/[0.08]" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">98%</p>
                  <p className="text-xs text-muted mt-0.5">Satisfaction</p>
                </div>
                <div className="h-10 w-px bg-white/[0.08]" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">6+</p>
                  <p className="text-xs text-muted mt-0.5">Industries</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up delay-200 hidden lg:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/[0.06] overflow-hidden relative aspect-[4/3]">
                      <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
                        alt="Corporate website project"
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                      <div className="absolute inset-0 bg-background/30" />
                    </div>
                    <div className="rounded-xl border border-white/[0.06] overflow-hidden relative aspect-square">
                      <Image
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop"
                        alt="Restaurant website project"
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                      <div className="absolute inset-0 bg-background/30" />
                    </div>
                  </div>
                  <div className="space-y-3 pt-6">
                    <div className="rounded-xl border border-white/[0.06] overflow-hidden relative aspect-square">
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop"
                        alt="SaaS dashboard project"
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                      <div className="absolute inset-0 bg-background/30" />
                    </div>
                    <div className="rounded-xl border border-white/[0.06] overflow-hidden relative aspect-[4/3]">
                      <Image
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                        alt="Real estate website project"
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                      <div className="absolute inset-0 bg-background/30" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-xl border border-white/[0.08] bg-surface/90 backdrop-blur-xl px-5 py-3 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="h-7 w-7 rounded-full border-2 border-surface overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="" width={28} height={28} className="object-cover" />
                    </div>
                    <div className="h-7 w-7 rounded-full border-2 border-surface overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face" alt="" width={28} height={28} className="object-cover" />
                    </div>
                    <div className="h-7 w-7 rounded-full border-2 border-surface overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="" width={28} height={28} className="object-cover" />
                    </div>
                  </div>
                  <p className="text-xs font-medium text-muted">Trusted by <span className="text-foreground">150+ clients</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <MouseGlow className="py-16 sm:py-24 md:py-32 relative">
        <div className="absolute top-1/3 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-accent-500/5 rounded-full blur-3xl animate-drift-3" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.title} animation="fade-up" delay={i * 100}>
                <TiltCard className="rounded-2xl h-full">
                  <div className="group border border-white/[0.06] bg-white/[0.02] rounded-2xl overflow-hidden h-full flex flex-col">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                      {project.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary-500/10 border border-primary-500/20 px-3 py-1 text-xs font-medium text-primary-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/[0.06]">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 group-hover:text-primary-300 transition-colors">
                        View Project
                        <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                  </div>
                </TiltCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </MouseGlow>

      {/* CTA */}
      <section className="py-16 sm:py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary-600/5 rounded-full blur-3xl animate-drift-1" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimateOnScroll animation="scale">
            <SectionHeading
              label="Your Project Next?"
              title="Let's Build Something Brilliant Together"
              description="Whether you need a new website, a redesign, or help fixing errors — we'd love to hear about your project."
              gradient
            />
            <Link
              href="/contact#form"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Start Your Project
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
