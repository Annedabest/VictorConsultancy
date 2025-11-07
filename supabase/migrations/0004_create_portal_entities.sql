create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  start_at timestamptz not null,
  end_at timestamptz,
  location text,
  visibility text not null default 'public',
  created_at timestamptz not null default now()
);

create index if not exists events_start_at_idx
  on public.events (start_at desc);

create table if not exists public.groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  status text not null default 'pending',
  visibility text not null default 'invite_only',
  owner_id uuid,
  created_at timestamptz not null default now()
);

create index if not exists groups_status_idx
  on public.groups (status);

create table if not exists public.group_members (
  group_id uuid not null references public.groups(id) on delete cascade,
  profile_email text not null,
  role text not null default 'member',
  approved_at timestamptz,
  primary key (group_id, profile_email)
);

create table if not exists public.event_registrations (
  event_id uuid not null references public.events(id) on delete cascade,
  profile_email text not null,
  status text not null default 'registered',
  registered_at timestamptz not null default now(),
  primary key (event_id, profile_email)
);

alter table public.events enable row level security;
alter table public.groups enable row level security;
alter table public.group_members enable row level security;
alter table public.event_registrations enable row level security;

create policy "Anonymous can view events" on public.events
  for select using (true);

create policy "Service role can manage events" on public.events
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

create policy "Anonymous can view groups" on public.groups
  for select using (true);

create policy "Service role can manage groups" on public.groups
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

create policy "Service role manages group members" on public.group_members
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

create policy "Service role manages event registrations" on public.event_registrations
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');
