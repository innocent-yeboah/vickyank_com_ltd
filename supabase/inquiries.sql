-- Optional Supabase schema for VickYan enquiry capture.
-- Run in the Supabase SQL editor when connecting the CMS / CRM layer.

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  service text not null,
  message text not null,
  context text default 'general',
  trade_type text,
  quantity text,
  vehicle text,
  hire_dates text,
  machine text,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

-- Allow inserts from the anon key (forms). Restrict reads to service role only.
create policy "Allow public inserts"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (true);
