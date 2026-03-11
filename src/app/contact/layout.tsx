import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NWstudios",
  description:
    "Get in touch with NWstudios for web development, redesign, and design projects. We respond within 24 hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
