"use client";

import { usePathname } from "next/navigation";

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";

  return (
    <div className="min-h-screen bg-background">
      <main className={isLogin ? "" : "mx-auto max-w-5xl px-4 py-8 sm:px-6"}>
        {children}
      </main>
    </div>
  );
}
