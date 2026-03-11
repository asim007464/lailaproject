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
    <div className={isLogin ? "bg-background" : "min-h-screen bg-background"}>
      <main className={isLogin ? "pb-8" : "mx-auto max-w-5xl px-4 py-8 sm:px-6"}>
        {children}
      </main>
    </div>
  );
}
