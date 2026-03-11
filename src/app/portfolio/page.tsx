import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import MouseGlow from "@/components/MouseGlow";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | NWstudios",
  description:
    "Explore our portfolio of completed web development projects for UK businesses.",
};

const projects = [
  {
    title: "Excellence Riviera",
    category: "Luxury Travel & Hospitality",
    desc: "Luxury holidays on the French Riviera — villas, yacht charters, hotels and concierge services across Saint-Tropez, Cannes and Monaco. Curated accommodation, transport and experiences.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=500&fit=crop",
    url: "https://excellenceriviera.com/",
  },
  {
    title: "Elite Alps",
    category: "Luxury Ski & Travel",
    desc: "Luxury ski holidays in Courchevel and the French Alps. Handpicked chalets, apartments and hotels plus helicopter, jet and car transfers and tailored alpine experiences.",
    tags: ["React", "Framer Motion", "Headless CMS"],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop",
    url: "https://elitealps.com/",
  },
  {
    title: "Courchevel Media",
    category: "Media & Photography",
    desc: "Luxury ski photography and videography in Courchevel. Cinematic capture of your ski holiday with drone shots, discreet service and high-end edits.",
    tags: ["Next.js", "Tailwind CSS", "Video"],
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&h=500&fit=crop",
    url: "https://courchevelmedia.com/",
  },
  {
    title: "VideoSpark AI",
    category: "SaaS / AI",
    desc: "AI-powered video generator for TikTok, YouTube Shorts and Reels. Create engaging short-form video content with intelligent automation and templates.",
    tags: ["React", "AI", "Video"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
    url: "https://videospark.site/",
  },
  {
    title: "ShineSpan",
    category: "Cleaning Website",
    desc: "A UK-based cleaning services website. Professional, trustworthy presence for local cleaning — domestic, commercial and specialist cleaning with clear pricing and easy booking.",
    tags: ["React", "Netlify", "UK Business"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    url: "https://shinespanproject.netlify.app/",
  },
  {
    title: "Meta Brains",
    category: "E-Learning Platform",
    desc: "Coding and GenAI learning platform — from Python and data science to no-code trading bots and AI. Courses designed to accelerate careers and skills.",
    tags: ["E-Learning", "React", "API"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    url: "https://www.metabrains.org/",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, i) => (
              <AnimateOnScroll
                key={project.title}
                animation="fade-up"
                delay={i * 80}
              >
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-primary-500/20 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-black/15 transition-opacity duration-300 group-hover:opacity-0" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary-400">
                        <span className="h-1 w-1 rounded-full bg-primary-400" />
                        {project.category}
                      </span>
                      <h3 className="mt-1.5 text-lg font-bold text-foreground drop-shadow-sm">
                        {project.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/20">
                      <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-background shadow-lg flex items-center gap-2">
                        View Project
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <p className="text-sm text-muted leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-gradient-to-r from-primary-500/15 to-primary-500/5 border border-primary-500/20 px-2.5 py-1 text-xs font-medium text-primary-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-sm font-semibold text-primary-400 group-hover:text-primary-300 transition-colors">
                      <span>View case study</span>
                      <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
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
