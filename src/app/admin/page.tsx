"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, MessageSquare, ChevronRight } from "lucide-react";

type Submission = {
  id: string;
  token: string;
  full_name: string;
  email: string;
  project_type: string;
  created_at: string;
};

export default function AdminDashboardPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/submissions");
        if (res.status === 401) {
          window.location.href = "/admin/login";
          return;
        }
        if (!res.ok) {
          setError("Failed to load submissions.");
          return;
        }
        const data = await res.json();
        setSubmissions(data.submissions || []);
      } catch {
        setError("Network error.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-muted">Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Contact submissions</h1>
      <p className="mt-1 text-muted">
        Click a row to view the conversation and reply.
      </p>
      <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
        {submissions.length === 0 ? (
          <div className="p-8 text-center text-muted">
            No submissions yet. New form entries will appear here and you’ll get an email.
          </div>
        ) : (
          <ul className="divide-y divide-white/10">
            {submissions.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/admin/submissions/${s.token}`}
                  className="flex items-center gap-4 px-4 py-4 hover:bg-white/5 transition-colors sm:px-6"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {s.full_name}
                    </p>
                    <p className="flex items-center gap-1.5 text-sm text-muted truncate">
                      <Mail size={14} />
                      {s.email}
                    </p>
                  </div>
                  <div className="hidden sm:block text-sm text-muted shrink-0">
                    {s.project_type}
                  </div>
                  <div className="text-xs text-muted shrink-0">
                    {formatDate(s.created_at)}
                  </div>
                  <ChevronRight size={18} className="text-muted shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
