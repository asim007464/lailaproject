import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact#form", label: "Contact" },
];

const services = [
  "Custom Web Development",
  "Website Redesign",
  "Bug Fixing & Maintenance",
  "UI/UX Design",
  "E-commerce Solutions",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface border-t border-white/[0.04]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/[0.03] rounded-full blur-3xl animate-drift-2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/[0.03] rounded-full blur-3xl animate-drift-1" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Logo size={32} />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-foreground">Laila</span>
                <span className="text-muted">Web</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Professional web development and design services for UK
              businesses. We turn your vision into a high-performing digital
              presence.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-xs uppercase tracking-widest mb-5 text-muted">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-xs uppercase tracking-widest mb-5 text-muted">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-muted">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-xs uppercase tracking-widest mb-5 text-muted">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <Mail size={16} className="mt-0.5 shrink-0 text-muted" />
                <span>hello@lailaweb.co.uk</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <Phone size={16} className="mt-0.5 shrink-0 text-muted" />
                <span>+44 20 7946 0958</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-muted" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Laila Web Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted/60 hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted/60 hover:text-foreground transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
