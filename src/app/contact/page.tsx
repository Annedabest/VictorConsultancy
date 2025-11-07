import { ContactForm } from "./ContactForm";
import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass, pillClass } from "@/ui/theme";

const inquiryTypes = [
  {
    label: "AI Readiness Assessment",
    description: "Request a diagnostic kickoff, share organisational context, and align on readiness timelines.",
  },
  {
    label: "Partnerships",
    description: "Co-create programmes with technology providers, consultants, or academic labs.",
  },
  {
    label: "Media & Speaking",
    description: "Invite Anne Victor for interviews, guest lectures, and global conference keynotes.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-16">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[400px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
              Contact
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Actionable research. Measurable results.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              Let’s design your next experiment
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              Fill the form to request an assessment, partnership, or speaking request. Expect a tailored next step within
              48 hours once routing automations sync with Supabase and MailerLite.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Enterprise-ready automation & strategy</p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <ContactForm inquiryTypes={inquiryTypes} />
          <aside className="space-y-6 rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 text-sm leading-[1.7] text-neutral-600 shadow-[0_18px_60px_rgba(15,15,15,0.07)]">
            <div className="space-y-3">
              <h2 className={overlineClass}>Engagement types</h2>
              <ul className="space-y-4">
                {inquiryTypes.map((item) => (
                  <li key={item.label} className="rounded-[24px] border border-neutral-200/60 bg-white/90 p-4">
                    <p className="font-serif text-lg leading-tight text-neutral-900">{item.label}</p>
                    <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className={overlineClass}>Office hours</h3>
              <p>Global availability with priority support for public-sector and nonprofit teams.</p>
            </div>
            <div className="space-y-2">
              <h3 className={overlineClass}>Direct contact</h3>
              <p className="text-sm font-semibold tracking-[0.02em] text-neutral-700">anne@victorconsultancy.com</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-neutral-500">
              <span className={pillClass}>Supabase secured</span>
              <span className={pillClass}>24h follow-up</span>
            </div>
          </aside>
        </section>
      </SectionShell>
    </div>
  );
}
