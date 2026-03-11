"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Send, ArrowLeft, Mail, Phone, Building2, Globe } from "lucide-react";

type Message = {
  id: string;
  from_role: "admin" | "customer";
  body: string;
  created_at: string;
};

type Submission = {
  id: string;
  token: string;
  full_name: string;
  email: string;
  phone: string | null;
  company_name: string | null;
  project_type: string;
  budget_min: number | null;
  budget_max: number | null;
  website_url: string | null;
  message: string;
  created_at: string;
};

export default function AdminConversationPage() {
  const params = useParams();
  const token = params.token as string;
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(`/api/admin/submissions/${token}`);
        if (res.status === 401) {
          window.location.href = "/admin/login";
          return;
        }
        if (!res.ok) {
          if (!cancelled) setError("Could not load conversation.");
          setLoading(false);
          return;
        }
        const data = await res.json();
        if (!cancelled) {
          setSubmission(data.submission);
          setMessages(data.messages || []);
        }
      } catch {
        if (!cancelled) setError("Network error.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    if (token) load();
    return () => { cancelled = true; };
  }, [token]);

  async function handleSendReply(e: React.FormEvent) {
    e.preventDefault();
    if (!reply.trim() || sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/submissions/${token}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: reply.trim() }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        setError(d.error || "Failed to send.");
        setSending(false);
        return;
      }
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          from_role: "admin" as const,
          body: reply.trim(),
          created_at: new Date().toISOString(),
        },
      ]);
      setReply("");
    } catch {
      setError("Network error.");
    }
    setSending(false);
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
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

  if (error && !submission) {
    return (
      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
        {error}
        <p className="mt-2">
          <Link href="/admin" className="text-primary-400 hover:underline">
            ← Back to list
          </Link>
        </p>
      </div>
    );
  }

  if (!submission) return null;

  const sortedMessages = [...messages].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  return (
    <div>
      <Link
        href="/admin"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground mb-6"
      >
        <ArrowLeft size={16} />
        Back to submissions
      </Link>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-white/10">
          <h1 className="text-lg font-bold text-foreground">{submission.full_name}</h1>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Mail size={14} />
              {submission.email}
            </span>
            {submission.phone && (
              <span className="flex items-center gap-1.5">
                <Phone size={14} />
                {submission.phone}
              </span>
            )}
            {submission.company_name && (
              <span className="flex items-center gap-1.5">
                <Building2 size={14} />
                {submission.company_name}
              </span>
            )}
            {submission.website_url && (
              <span className="flex items-center gap-1.5">
                <Globe size={14} />
                <a href={submission.website_url} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline truncate max-w-[200px]">
                  {submission.website_url}
                </a>
              </span>
            )}
          </div>
          <p className="mt-2 text-sm">
            <span className="text-muted">Project:</span>{" "}
            <span className="text-foreground">{submission.project_type}</span>
            {submission.budget_min != null && submission.budget_max != null && (
              <span className="text-muted ml-2">
                Budget: £{submission.budget_min.toLocaleString()} – £{submission.budget_max.toLocaleString()}
              </span>
            )}
          </p>
        </div>

        <div className="p-4 sm:p-6 space-y-4 max-h-[400px] overflow-y-auto">
          {sortedMessages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.from_role === "admin" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-4 py-2.5 ${
                  m.from_role === "admin"
                    ? "bg-primary-600/20 text-foreground"
                    : "bg-white/10 text-foreground"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{m.body}</p>
                <p className="text-xs text-muted mt-1">
                  {formatDate(m.created_at)}
                  {m.from_role === "admin" ? " · You" : " · Customer"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendReply} className="p-4 sm:p-6 border-t border-white/10">
          {error && (
            <p className="text-sm text-red-400 mb-2">{error}</p>
          )}
          <div className="flex flex-col gap-3">
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply…"
              rows={3}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-500/30 resize-none"
              required
            />
            <button
              type="submit"
              disabled={sending || !reply.trim()}
              className="self-end rounded-xl bg-primary-600 text-white px-4 py-3 font-semibold hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 disabled:opacity-50 flex items-center gap-2"
            >
              <Send size={18} />
              {sending ? "Sending…" : "Send"}
            </button>
          </div>
          <p className="text-xs text-muted mt-2">
            Your reply will be saved here and emailed to the customer&apos;s inbox.
          </p>
        </form>
      </div>
    </div>
  );
}
