import Link from 'next/link';

const resourceHighlights = [
  {
    title: 'AI Playbooks',
    description: 'Step-by-step guides to prioritize AI use cases across functions.',
    href: '/resources/playbooks',
  },
  {
    title: 'Template Library',
    description: 'Editable canvases, pitch decks, and change plans for AI adoption.',
    href: '/resources/templates',
  },
  {
    title: 'Victor Insights',
    description: 'Monday/Wednesday/Friday briefings on emerging AI trends.',
    href: '/blog',
  },
];

const upcomingFeatures = [
  {
    label: 'Client Portal Access',
    value: 'Invite-only beta',
  },
  {
    label: 'AI Readiness Assessment',
    value: 'Free personalized report',
  },
  {
    label: 'Foundations Course',
    value: 'Launch cohort Q1 2026',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-neutral-100 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-white text-xl font-semibold">
              AV
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Victor Consultancy</p>
              <p className="text-base font-semibold text-neutral-900">AI Adoption Studio</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-neutral-600 md:flex">
            <Link href="#solutions" className="transition hover:text-neutral-900">
              Solutions
            </Link>
            <Link href="#resources" className="transition hover:text-neutral-900">
              Resources
            </Link>
            <Link href="#insights" className="transition hover:text-neutral-900">
              Insights
            </Link>
            <Link href="#assessment" className="transition hover:text-neutral-900">
              Assessment
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              Log in
            </Link>
            <Link
              href="#assessment"
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              Start assessment
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:py-24">
        <section className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1.1fr_0.9fr]" id="hero">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Strategic AI adoption
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Activate responsible AI advantage for your organisation.
            </h1>
            <p className="text-lg text-neutral-600">
              Anne Victor guides SMBs, enterprises, nonprofits, and public teams from curiosity to
              operational impact using practical frameworks, global experience, and curated resources.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#assessment"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                Begin readiness assessment
              </Link>
              <Link
                href="#resources"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
              >
                Explore free resources
              </Link>
            </div>
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-neutral-500">Markets served</dt>
                <dd className="text-2xl font-semibold text-neutral-900">APAC • Americas</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-neutral-500">Capital raised</dt>
                <dd className="text-2xl font-semibold text-neutral-900">$1M in 24h</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-neutral-500">Ecosystem</dt>
                <dd className="text-2xl font-semibold text-neutral-900">500+ builders</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-neutral-500">Languages</dt>
                <dd className="text-2xl font-semibold text-neutral-900">7 spoken</dd>
              </div>
            </dl>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,15,15,0.08),_transparent_60%)]" />
            <div className="relative space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Victor AI Canvas</h2>
              <p className="text-lg font-semibold text-neutral-900">
                Diagnose → Design → Deploy & Scale
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                  Map strategy, data, operations, and people readiness.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                  Prioritize initiatives aligned with measurable business outcomes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                  Unlock templates, playbooks, and networking communities to sustain change.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="assessment" className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
                AI Readiness Assessment
              </h2>
              <p className="text-neutral-600">
                Capture your organisation’s strategy, data foundations, operational readiness, and
                culture to receive a tailored maturity radar, insights, and recommended next steps.
              </p>
              <ul className="grid gap-3 text-sm text-neutral-600 sm:grid-cols-2">
                <li className="rounded-xl border border-neutral-200 p-4">
                  Weighted rubric across strategy, data, operations, and people dimensions.
                </li>
                <li className="rounded-xl border border-neutral-200 p-4">
                  Individual capabilities analysis for AI fluency, skills, and integration.
                </li>
                <li className="rounded-xl border border-neutral-200 p-4">
                  Automated PDF report delivered inside the client portal.
                </li>
                <li className="rounded-xl border border-neutral-200 p-4">
                  Follow-up roadmap session with Anne Victor to prioritise initiatives.
                </li>
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/assessment/start"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
                >
                  Launch questionnaire
                </Link>
                <Link
                  href="/assessment/sample-report"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                >
                  Preview sample report
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                What’s included
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>Category scoring with maturity levels (Foundation → Leading).</li>
                <li>Strengths, gaps, and recommended initiatives prioritised by impact.</li>
                <li>Resource bundle: templates, case studies, and curated playbooks.</li>
                <li>Optional live debrief for leadership teams and cross-functional squads.</li>
              </ul>
              <div className="rounded-2xl bg-neutral-50 p-5 text-sm text-neutral-600">
                <p className="font-semibold text-neutral-900">Need enterprise onboarding?</p>
                <p>
                  We support secure data rooms, procurement compliance, and global rollouts for
                  enterprises and public-sector teams.
                </p>
                <Link href="/contact" className="mt-3 inline-flex text-neutral-900 underline">
                  Book a discovery call
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Featured resources</h2>
            <p className="max-w-2xl text-neutral-600">
              Everything you need to explore, plan, and communicate AI initiatives—freely available
              as part of Victor Consultancy’s open knowledge lab.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {resourceHighlights.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-neutral-900"
              >
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    {resource.title}
                  </p>
                  <p className="text-base text-neutral-600">{resource.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  View resource
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section id="insights" className="grid gap-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Victor Insights</h2>
            <p className="text-neutral-600">
              Weekly perspectives on balancing responsible AI adoption with real-world growth. Sign up
              to receive Monday/Wednesday/Friday reports and LinkedIn-ready recaps.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-full border border-neutral-300 px-5 py-3 text-sm text-neutral-700 focus:border-neutral-900 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                Join the list
              </button>
            </form>
            <p className="text-xs text-neutral-500">
              This is a preview form. Final integration will connect Supabase, Ollama content drafts,
              and LinkedIn republishing workflows.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Upcoming features
            </h3>
            <ul className="space-y-3">
              {upcomingFeatures.map((feature) => (
                <li key={feature.label} className="flex items-center justify-between rounded-2xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                  <span className="font-medium text-neutral-900">{feature.label}</span>
                  <span>{feature.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Victor Consultancy. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-neutral-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900">
              Terms
            </Link>
            <Link href="mailto:anne@victorconsultancy.com" className="hover:text-neutral-900">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
