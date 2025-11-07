create table if not exists public.assessment_session_requests (
  id uuid primary key default gen_random_uuid(),
  contact_name text not null,
  contact_email text not null,
  company_name text,
  persona_type text,
  team_size text,
  maturity_scores jsonb,
  top_priority text,
  desired_timeline text,
  additional_context text,
  reference_code text not null,
  readiness_summary jsonb,
  report_status text not null default 'pending',
  report_metadata jsonb,
  submitted_at timestamptz not null default now()
);

create index if not exists assessment_session_requests_submitted_at_idx
  on public.assessment_session_requests (submitted_at desc);

create unique index if not exists assessment_session_requests_reference_code_idx
  on public.assessment_session_requests (reference_code);

alter table public.assessment_session_requests
  enable row level security;

create policy "Allow anonymous inserts" on public.assessment_session_requests
  for insert with check (true);

create policy "Admins can read" on public.assessment_session_requests
  for select using (auth.role() = 'service_role');

create policy "Admins can update" on public.assessment_session_requests
  for update using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
