-- Optional Supabase schema for VickYank newsletter subscriptions.
-- Run in the Supabase SQL editor when connecting persistence.

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  interests text,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

create policy "Allow public newsletter inserts"
  on public.newsletter_subscribers
  for insert
  to anon, authenticated
  with check (true);
