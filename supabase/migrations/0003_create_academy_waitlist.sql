create table if not exists public.academy_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  referral_source text,
  status text not null default 'pending',
  submitted_at timestamptz not null default now()
);

create unique index if not exists academy_waitlist_email_idx
  on public.academy_waitlist (email);

alter table public.academy_waitlist
  enable row level security;

create policy "Allow anonymous inserts" on public.academy_waitlist
  for insert with check (true);

create policy "Service role can read" on public.academy_waitlist
  for select using (auth.role() = 'service_role');

create policy "Service role can update" on public.academy_waitlist
  for update using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
