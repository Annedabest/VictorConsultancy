create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  contact_name text not null,
  contact_email text not null,
  organisation text not null,
  inquiry_type text not null,
  message text,
  status text not null default 'new',
  submitted_at timestamptz not null default now()
);

create index if not exists contact_inquiries_submitted_at_idx
  on public.contact_inquiries (submitted_at desc);

alter table public.contact_inquiries
  enable row level security;

create policy "Allow anonymous inserts" on public.contact_inquiries
  for insert with check (true);

create policy "Service role can read" on public.contact_inquiries
  for select using (auth.role() = 'service_role');

create policy "Service role can update" on public.contact_inquiries
  for update using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
