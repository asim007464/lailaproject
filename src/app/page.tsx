import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypeWriter from "@/components/TypeWriter";
import ParticleField from "@/components/ParticleField";
import TiltCard from "@/components/TiltCard";
import MouseGlow from "@/components/MouseGlow";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import {
  ReactIcon, NextjsIcon, TypeScriptIcon, TailwindIcon, NodejsIcon,
  WordPressIcon, ShopifyIcon, FigmaIcon, PostgresIcon, MongoIcon,
  StripeIcon, VercelIcon, AwsIcon, GraphqlIcon, PrismaIcon,
} from "@/components/TechIcons";
import {
  Code,
  Paintbrush,
  RefreshCw,
  Bug,
  ShoppingCart,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Star,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    desc: "Bespoke websites built from the ground up with modern technologies, tailored to your exact business requirements.",
    color: "bg-primary-500/10 text-primary-400",
  },
  {
    icon: Paintbrush,
    title: "Website Redesign",
    desc: "Transform your outdated website into a modern, conversion-focused experience that reflects your brand.",
    color: "bg-accent-500/10 text-accent-400",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Maintenance",
    desc: "Quick resolution of website errors, performance issues, and ongoing maintenance to keep your site running smoothly.",
    color: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect designs that look stunning on every device, from desktop monitors to mobile phones.",
    color: "bg-primary-500/10 text-primary-400",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Feature-rich online shops with secure payment processing, inventory management, and seamless checkout.",
    color: "bg-accent-500/10 text-accent-400",
  },
  {
    icon: RefreshCw,
    title: "Performance Optimisation",
    desc: "Speed up your website with expert optimisation techniques for better user experience and SEO rankings.",
    color: "bg-primary-500/10 text-primary-400",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { label: "Support Available", display: "24/7" },
];

const testimonials = [
  {
    name: "James Whitfield",
    role: "Director, Whitfield & Co.",
    text: "Laila Web completely transformed our online presence. The new website is sleek, fast, and our enquiries have increased by 40% since launch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Boutique",
    text: "Incredibly professional service from start to finish. They understood our vision perfectly and delivered a website that exceeded our expectations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "David Chen",
    role: "CTO, TechBridge Solutions",
    text: "We needed urgent bug fixes and a complete redesign. The team delivered on a tight deadline with outstanding quality. Highly recommended.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
];

const whyUs = [
  "UK-based developer with deep understanding of local markets",
  "Transparent pricing with no hidden fees",
  "Fast turnaround without compromising quality",
  "Ongoing support and maintenance after launch",
  "SEO-optimised websites built for performance",
  "Modern tech stack for future-proof solutions",
];

const techStack = [
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js", icon: <NextjsIcon /> },
  { name: "TypeScript", icon: <TypeScriptIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "Node.js", icon: <NodejsIcon /> },
  { name: "WordPress", icon: <WordPressIcon /> },
  { name: "Shopify", icon: <ShopifyIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "PostgreSQL", icon: <PostgresIcon /> },
  { name: "MongoDB", icon: <MongoIcon /> },
  { name: "Stripe", icon: <StripeIcon /> },
  { name: "Vercel", icon: <VercelIcon /> },
  { name: "AWS", icon: <AwsIcon /> },
  { name: "GraphQL", icon: <GraphqlIcon /> },
  { name: "Prisma", icon: <PrismaIcon /> },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] sm:min-h-[90vh] flex items-center">
        <ParticleField particleCount={40} />

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary-500/10 rounded-full blur-3xl animate-drift-1" />
          <div className="absolute bottom-20 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary-400/8 rounded-full blur-3xl animate-drift-2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent-500/5 rounded-full blur-3xl animate-drift-3" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.08),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-down">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-4 py-1.5 text-xs font-medium text-muted mb-6">
                <Sparkles size={14} className="text-primary-400" />
                Trusted by 150+ UK Businesses
              </span>
            </div>
            <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              We Build Websites That{" "}
              <span className="gradient-text block sm:inline">
                <TypeWriter
                  words={["Drive Results", "Convert Visitors", "Grow Revenue", "Build Trust"]}
                />
              </span>
            </h1>
            <p className="animate-fade-in-up delay-200 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Professional web development, redesign, and maintenance services
              for UK businesses. Whether you need a brand-new website, a fresh
              redesign, or help fixing errors — we&apos;ve got you covered.
            </p>
            <div className="animate-fade-in-up delay-400 mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/contact#form"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-background hover:bg-foreground/90 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-foreground hover:bg-white/[0.04] transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </section>

      {/* Tech Marquee */}
      <section className="py-6 sm:py-8 border-y border-white/[0.04] bg-surface/50">
        <InfiniteMarquee items={techStack} speed={25} />
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                  {stat.display ? (
                    stat.display
                  ) : (
                    <AnimatedCounter
                      target={stat.value!}
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  )}
                </p>
                <p className="mt-2 text-sm text-muted font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <MouseGlow className="py-16 sm:py-24 md:py-32 relative">
        <div className="absolute top-1/2 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary-500/5 rounded-full blur-3xl animate-drift-2" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <AnimateOnScroll>
            <SectionHeading
              label="What We Do"
              title="Services Tailored to Your Needs"
              description="From building your website from scratch to redesigning an existing one or resolving critical issues — we deliver excellence at every stage."
              gradient
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimateOnScroll key={service.title} animation="fade-up" delay={i * 100}>
                  <TiltCard className="rounded-2xl h-full">
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full cursor-default relative group hover:border-white/[0.1] transition-colors duration-300">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={22} />
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </TiltCard>
                </AnimateOnScroll>
              );
            })}
          </div>
          <AnimateOnScroll className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors group"
            >
              View All Services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimateOnScroll>
        </div>
      </MouseGlow>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/5 rounded-full blur-3xl animate-drift-1" />
        <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-accent-500/5 rounded-full blur-3xl animate-drift-3" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <AnimateOnScroll animation="slide-left">
              <div>
                <SectionHeading
                  label="Why Choose Us"
                  title="Your Success Is Our Priority"
                  description="We combine technical expertise with creative design to deliver websites that don't just look great — they perform brilliantly."
                  center={false}
                />
                <ul className="space-y-4">
                  {whyUs.map((item) => (
                    <li key={item} className="flex items-start gap-3 group/item">
                      <CheckCircle2
                        size={18}
                        className="text-accent-400 shrink-0 mt-0.5 transition-colors duration-300"
                      />
                      <span className="text-sm text-muted group-hover/item:text-foreground/90 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors group"
                >
                  Learn More About Us
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-right">
              <div className="relative">
                <div className="aspect-square rounded-3xl border border-white/[0.06] overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop"
                    alt="Professional web development workspace"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-xl border border-white/[0.1] bg-white/[0.05] backdrop-blur-xl p-4 sm:p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted mb-1">Projects Delivered</p>
                          <p className="text-2xl font-bold text-foreground">
                            <AnimatedCounter target={150} suffix="+" duration={2500} />
                          </p>
                        </div>
                        <div className="h-10 w-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                          <CheckCircle2 size={20} className="text-primary-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 bg-primary-500/10 rounded-2xl rotate-12 animate-float" />
                <div className="hidden sm:block absolute -bottom-4 -left-4 w-16 h-16 bg-accent-500/10 rounded-xl -rotate-12 animate-float-slow" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <MouseGlow className="py-16 sm:py-24 md:py-32 relative" glowColor="rgba(79, 70, 229, 0.04)">
        <div className="absolute top-1/3 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-primary-500/5 rounded-full blur-3xl animate-drift-1" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <AnimateOnScroll>
            <SectionHeading
              label="Testimonials"
              title="What Our Clients Say"
              description="Don't just take our word for it. Here's what UK businesses have to say about working with us."
              gradient
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} animation="fade-up" delay={i * 150}>
                <TiltCard className="rounded-2xl h-full">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 flex flex-col h-full hover:border-white/[0.1] transition-colors duration-300">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          size={15}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted leading-relaxed flex-1">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={36}
                          height={36}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted">{t.role}</p>
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
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(79,70,229,0.06),transparent_50%)]" />
        <div className="hidden sm:block absolute top-10 right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-2xl animate-drift-1" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="scale">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Ready to Transform Your{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">Online Presence?</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-muted max-w-2xl mx-auto text-base sm:text-lg">
              Tell us about your project and we&apos;ll get back to you with a
              tailored plan and quote. No obligation, no hidden fees.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact#form"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-background hover:bg-foreground/90 transition-all duration-300"
              >
                Get Your Free Quote
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-foreground hover:bg-white/[0.04] transition-all duration-300"
              >
                See Our Portfolio
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
