"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles, LogOut, LayoutDashboard } from "lucide-react";
import Logo from "./Logo";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [adminUser, setAdminUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => setAdminUser(user ?? null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setAdminUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div
          className={`transition-all duration-500 ${
            scrolled ? "pt-0" : "pt-3 sm:pt-4"
          }`}
        >
          <div className="mx-auto max-w-6xl px-3 sm:px-5 lg:px-6">
            <nav
              className={`relative flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500 ${
                scrolled
                  ? "rounded-none sm:rounded-2xl bg-background/80 backdrop-blur-2xl border-b sm:border border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                  : "rounded-2xl bg-white/[0.02] backdrop-blur-lg border border-white/[0.05]"
              }`}
            >
              {/* Gradient top edge */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary-400/60 to-transparent transition-all duration-500 ${
                  scrolled ? "w-1/2 opacity-100" : "w-1/3 opacity-60"
                }`}
              />

              <Link
                href="/"
                className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
                aria-label="NWstudios home"
              >
                <div className="relative transition-transform duration-300 group-hover:scale-105">
                  <Logo size={32} />
                  <div className="absolute inset-0 rounded-xl bg-primary-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                  NWstudios
                </span>
              </Link>

              <div className="hidden md:flex items-center bg-white/[0.03] rounded-xl border border-white/[0.04] p-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-4 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-foreground bg-primary-500/15 shadow-[0_0_12px_rgba(79,70,229,0.15)]"
                          : "text-muted/70 hover:text-foreground hover:bg-white/[0.04]"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full bg-primary-400" />
                      )}
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="hidden md:flex items-center gap-2">
                {adminUser && (
                  <>
                    <Link
                      href="/admin"
                      className={`relative px-4 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                        pathname.startsWith("/admin")
                          ? "text-foreground bg-primary-500/15"
                          : "text-muted/70 hover:text-foreground hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <LayoutDashboard size={14} />
                        Admin
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[13px] font-medium text-muted hover:text-foreground hover:bg-white/10 transition-colors"
                    >
                      <LogOut size={14} />
                      Log out
                    </button>
                  </>
                )}
                <Link
                  href="/contact#form"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-2 text-[13px] font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.25)] hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Sparkles
                    size={13}
                    className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="relative z-10">Get in Touch</span>
                  <ArrowRight
                    size={13}
                    className="relative z-10 group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>

              <button
                className="md:hidden p-2 -mr-1 text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-surface/95 backdrop-blur-xl border-l border-white/[0.06] transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2" aria-label="NWstudios">
            <Logo size={24} />
            <span className="text-sm font-semibold text-foreground">
              NWstudios
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg bg-white/[0.05] text-muted hover:text-foreground hover:bg-white/[0.08] transition-all"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-foreground bg-primary-500/10 border border-primary-500/15"
                    : "text-muted hover:text-foreground hover:bg-white/[0.03]"
                }`}
              >
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-primary-400" />
                )}
                {link.label}
              </Link>
            );
          })}
          {adminUser && (
            <>
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-xl ${
                  pathname.startsWith("/admin")
                    ? "text-foreground bg-primary-500/10 border border-primary-500/15"
                    : "text-muted hover:text-foreground hover:bg-white/[0.03]"
                }`}
              >
                <LayoutDashboard size={16} />
                Admin
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  handleLogout();
                }}
                className="flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-xl text-muted hover:text-foreground hover:bg-white/[0.03] w-full"
              >
                <LogOut size={16} />
                Log out
              </button>
            </>
          )}
          <Link
            href="/contact#form"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.2)]"
          >
            <Sparkles size={14} />
            Get in Touch
            <ArrowRight size={14} />
          </Link>
        </nav>
      </div>
    </>
  );
}
