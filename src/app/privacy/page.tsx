import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass } from "@/ui/theme";

const sections = [
  {
    title: "Overview",
    content:
      'This Privacy Policy explains how Victor Consultancy ("we", "our", "us") collects, uses, and safeguards personal information when you interact with our services, website, academy, and automation products. Our headquarters are in Quebec, Canada, and we operate globally in compliance with Canadian federal law, the Personal Information Protection and Electronic Documents Act (PIPEDA), and other applicable privacy regulations.',
  },
  {
    title: "Information we collect",
    content:
      "We collect information you provide directly, including name, email, organisation, job role, assessment data, academy submissions, and payment details when applicable. We also collect automated usage data such as IP address, device information, browser type, and interaction logs via analytics tools to improve performance and security.",
  },
  {
    title: "How we use information",
    content:
      "We use your information to deliver services, respond to inquiries, run assessments, provide academy access, process payments, personalise resources, and send updates you opt in to receive. Data may support internal research, product development, and anonymised benchmarking. We never sell personal information.",
  },
  {
    title: "Lawful basis & consent",
    content:
      "We process personal data under legitimate interest, contract necessity, and consent. Where required, we obtain explicit consent for marketing communications and sensitive information. You may withdraw consent at any time by contacting privacy@victorconsultancy.com.",
  },
  {
    title: "Data retention",
    content:
      "We retain personal data only as long as necessary to fulfil the purposes above and meet legal obligations. Assessment and academy records are retained for up to five years, unless you request deletion sooner.",
  },
  {
    title: "Data sharing",
    content:
      "We may share information with trusted subprocessors (e.g., Supabase, Sanity, MailerLite, Stripe, n8n) under strict data processing agreements. We may also share information when required by law, to protect rights, or during business transactions, provided confidentiality measures are in place.",
  },
  {
    title: "International transfers",
    content:
      "Because we operate globally, information may be transferred to jurisdictions with different data protection laws. We rely on contractual safeguards and standard contractual clauses to protect personal data when it leaves Canada.",
  },
  {
    title: "Security",
    content:
      "We implement technical and organisational measures including encryption in transit, access controls, monitoring, and incident response procedures. While no system is completely secure, we continually improve controls to mitigate risks.",
  },
  {
    title: "Your rights",
    content:
      "Depending on your location, you may have rights to access, correct, delete, or port your data; object to processing; or lodge a complaint with a supervisory authority. Contact privacy@victorconsultancy.com to exercise these rights.",
  },
  {
    title: "Cookies & tracking",
    content:
      "We use cookies and similar technologies to remember preferences, authenticate sessions, track analytics, and measure campaign effectiveness. You can manage cookies through browser settings. Disabling cookies may impact features.",
  },
  {
    title: "Third-party links",
    content:
      "Our site and resources may link to third-party services (e.g., partner tools, social platforms). We are not responsible for their privacy practices and encourage you to review their policies.",
  },
  {
    title: "Children's privacy",
    content:
      "Our services are not directed to children under 16. We do not knowingly collect personal data from minors. If you believe a child provided information, contact us to remove it.",
  },
  {
    title: "Updates",
    content:
      "We may update this policy to reflect changes in law or our practices. We will notify you of material changes via email or site notice. The 'Last updated' date indicates the current version.",
  },
  {
    title: "Contact",
    content:
      "For privacy inquiries or to exercise your rights, contact privacy@victorconsultancy.com or Victor Consultancy, 1440 Rue Sainte-Catherine O, Montreal, QC, Canada.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-12">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[400px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
              Privacy
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Safeguarding your data globally.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              This policy outlines how Victor Consultancy collects, uses, and protects personal information across our consulting, academy, and automation services.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Last updated: October 28, 2025</p>
          </div>
        </section>

        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[28px] border border-neutral-200/70 bg-white/85 p-8 text-sm leading-[1.7] text-neutral-600 shadow-[0_18px_60px_rgba(15,15,15,0.07)]"
            >
              <h2 className="font-serif text-2xl leading-tight text-neutral-900">{section.title}</h2>
              <p className="mt-3 whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
