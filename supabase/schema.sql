-- Run this in Supabase Dashboard → SQL Editor

-- Submissions (contact form entries)
create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  token text not null unique,
  full_name text not null,
  email text not null,
  phone text,
  company_name text,
  project_type text not null,
  budget_min integer,
  budget_max integer,
  website_url text,
  message text not null,
  created_at timestamptz default now()
);

-- Messages (replies from admin or customer in the thread)
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references public.submissions(id) on delete cascade,
  from_role text not null check (from_role in ('admin', 'customer')),
  body text not null,
  created_at timestamptz default now()
);

create index if not exists idx_messages_submission_id on public.messages(submission_id);
create index if not exists idx_submissions_token on public.submissions(token);
create index if not exists idx_submissions_created_at on public.submissions(created_at desc);

-- RLS: API uses service role key for all DB access; no direct anon access to data
alter table public.submissions enable row level security;
alter table public.messages enable row level security;

-- No policies: only service role (used in API routes) can read/write. This keeps data secure.
