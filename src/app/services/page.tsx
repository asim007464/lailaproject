import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TiltCard from "@/components/TiltCard";
import {
  Code,
  Paintbrush,
  Bug,
  Smartphone,
  ShoppingCart,
  RefreshCw,
  Search,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | NWstudios",
  description:
    "Explore our web development, redesign, maintenance, and design services tailored for UK businesses.",
};

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    desc: "We build bespoke websites using the latest technologies — Next.js, React, and more. Every project is crafted to match your brand identity and business goals, resulting in a fast, accessible, and SEO-friendly website.",
    features: [
      "Modern tech stack (React, Next.js, TypeScript)",
      "Fully responsive across all devices",
      "SEO-optimised from the ground up",
      "Fast loading speeds and Core Web Vitals",
      "Clean, maintainable codebase",
    ],
    color: "bg-primary-500/10 text-primary-400",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    icon: Paintbrush,
    title: "Website Redesign",
    desc: "Is your current website outdated or not converting? We redesign websites to meet modern standards with improved UX, fresh visuals, and better performance — all while preserving your brand essence.",
    features: [
      "Complete visual overhaul",
      "Improved user experience and navigation",
      "Content restructuring for clarity",
      "Mobile-first responsive approach",
      "Migration from legacy platforms",
    ],
    color: "bg-accent-500/10 text-accent-400",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Error Resolution",
    desc: "Got a broken website? We diagnose and fix bugs, resolve errors, patch security vulnerabilities, and get your site back on track — fast. No issue is too complex for our team.",
    features: [
      "Rapid diagnosis and turnaround",
      "JavaScript, PHP, WordPress, and more",
      "Server and hosting configuration",
      "Database and API troubleshooting",
      "Post-fix testing and verification",
    ],
    color: "bg-amber-500/10 text-amber-400",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    desc: "Great design is more than aesthetics — it's about creating intuitive experiences. We design interfaces that guide users naturally, increase engagement, and drive conversions.",
    features: [
      "Wireframing and prototyping",
      "Brand-aligned visual design",
      "User journey mapping",
      "Accessibility compliance (WCAG)",
      "Design system creation",
    ],
    color: "bg-primary-500/10 text-primary-400",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "Launch your online shop with confidence. We build secure, scalable e-commerce websites with intuitive product management, seamless checkout, and integrated payment gateways.",
    features: [
      "Shopify, WooCommerce, or custom builds",
      "Secure payment integration (Stripe, PayPal)",
      "Product and inventory management",
      "Order tracking and notifications",
      "Conversion-optimised checkout flow",
    ],
    color: "bg-accent-500/10 text-accent-400",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    icon: RefreshCw,
    title: "Performance Optimisation",
    desc: "Slow websites lose customers. We audit and optimise your website's performance to achieve blazing-fast load times, better SEO rankings, and improved user satisfaction.",
    features: [
      "Core Web Vitals optimisation",
      "Image and asset compression",
      "Code splitting and lazy loading",
      "CDN setup and caching strategies",
      "Database query optimisation",
    ],
    color: "bg-primary-500/10 text-primary-400",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    icon: Search,
    title: "SEO Services",
    desc: "Get found by your target audience. We implement technical SEO best practices and on-page optimisation to help your website rank higher in search engine results.",
    features: [
      "Technical SEO audit and fixes",
      "Meta tags and structured data",
      "Sitemap and robots.txt setup",
      "Page speed improvements",
      "Local SEO for UK businesses",
    ],
    color: "bg-accent-500/10 text-accent-400",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    desc: "Keep your website secure, up-to-date, and running smoothly with our ongoing maintenance packages. We handle updates, backups, monitoring, and more so you can focus on your business.",
    features: [
      "Regular security updates and patches",
      "Daily/weekly backups",
      "Uptime monitoring and alerts",
      "Content updates on request",
      "Priority support via email and phone",
    ],
    color: "bg-primary-500/10 text-primary-400",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn about your business, goals, and requirements through a detailed consultation.",
    color: "text-primary-400",
  },
  {
    step: "02",
    title: "Planning",
    desc: "We create a project roadmap with wireframes, timelines, and clear milestones.",
    color: "text-accent-400",
  },
  {
    step: "03",
    title: "Design & Build",
    desc: "Our team designs and develops your website with regular check-ins for your feedback.",
    color: "text-primary-400",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "After thorough testing, we launch your site and provide ongoing support.",
    color: "text-accent-400",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary-600/15 rounded-full blur-3xl animate-drift-1" />
          <div className="absolute bottom-20 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-accent-500/10 rounded-full blur-3xl animate-drift-2" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="animate-fade-in-down inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 text-xs font-semibold text-primary-400 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
                Our Services
              </span>
              <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Everything You Need for a{" "}
                <span className="gradient-text">Stunning Website</span>
              </h1>
              <p className="animate-fade-in-up delay-200 mt-6 text-lg text-muted leading-relaxed">
                Whether you need a brand-new website, a complete redesign, or
                someone to fix existing issues — we provide end-to-end web
                solutions for UK businesses.
              </p>
              <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap gap-3">
                {["Web Dev", "Redesign", "E-commerce", "SEO", "UI/UX", "Maintenance"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up delay-200 hidden lg:block">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl border border-white/[0.06] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                    alt="Web development services"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/30 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/[0.08] bg-surface/90 backdrop-blur-xl p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary-500/15 flex items-center justify-center text-primary-400">
                    <Code size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">8 Services</p>
                    <p className="text-xs text-muted">End-to-end solutions</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 rounded-lg border border-white/[0.08] bg-surface/90 backdrop-blur-xl px-4 py-2.5">
                  <p className="text-xs font-semibold text-accent-400">150+ Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14 sm:space-y-20">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isReversed = idx % 2 === 1;
              return (
                <AnimateOnScroll
                  key={service.title}
                  animation={isReversed ? "slide-right" : "slide-left"}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center`}
                  >
                    <div className={isReversed ? "lg:order-2" : ""}>
                      <div
                        className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl ${service.color} mb-4 sm:mb-6`}
                      >
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-muted leading-relaxed">
                        {service.desc}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="text-primary-400 shrink-0 mt-0.5"
                            />
                            <span className="text-sm text-foreground/70">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={`${
                        isReversed ? "lg:order-1" : ""
                      } rounded-2xl border border-white/[0.06] overflow-hidden hidden sm:block min-h-[200px] sm:min-h-[280px] relative group/img`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-background/40" />
                      <div className="absolute bottom-4 left-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${service.color} backdrop-blur-sm`}>
                          <Icon size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary-600/5 rounded-full blur-3xl animate-drift-3" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <AnimateOnScroll>
            <SectionHeading
              label="Our Process"
              title="How We Work"
              description="A transparent, collaborative process designed to deliver exceptional results on time and within budget."
              gradient
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((p, i) => (
              <AnimateOnScroll key={p.step} animation="fade-up" delay={i * 120}>
                <TiltCard className="rounded-2xl h-full">
                  <div className="relative border border-white/[0.06] bg-white/[0.02] rounded-2xl p-6 sm:p-8 h-full group">
                    <span
                      className={`text-5xl font-bold ${p.color} opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
                    >
                      {p.step}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </TiltCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-surface">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="scale">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="mt-5 text-muted max-w-2xl mx-auto text-lg">
              Tell us what you need and we&apos;ll provide a free, no-obligation
              quote within 24 hours.
            </p>
            <Link
              href="/contact#form"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 group"
            >
              Get Your Free Quote
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
