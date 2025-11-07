import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass } from "@/ui/theme";

const sections = [
  {
    title: "Agreement",
    content:
      'These Terms of Service ("Terms") govern your access to and use of Victor Consultancy\'s services, including consulting retainers, assessments, academy programs, and digital resources. By engaging with us or accessing our products, you agree to these Terms.',
  },
  {
    title: "Services",
    content:
      "We provide strategic consulting, automation implementation, academy training, and resource subscriptions. Specific deliverables, timelines, and fees will be defined in statements of work (SOWs) or order forms. Any changes to scope require written agreement.",
  },
  {
    title: "Client obligations",
    content:
      "You agree to provide accurate information, timely feedback, and necessary access to systems and stakeholders. You are responsible for ensuring compliance with applicable laws when implementing recommendations or automations.",
  },
  {
    title: "Payment",
    content:
      "Fees are invoiced per the schedule defined in the SOW. Late payments may incur interest at 1.5% per month or the maximum allowed by law. Taxes are additional where applicable.",
  },
  {
    title: "Confidentiality",
    content:
      "Both parties agree to protect confidential information. We will use your data solely for delivery of services and will maintain safeguards consistent with industry standards.",
  },
  {
    title: "Intellectual property",
    content:
      "We retain ownership of pre-existing materials, methodologies, and software. Upon full payment, you receive a non-exclusive licence to use deliverables for internal business purposes. Public attribution is appreciated but not required.",
  },
  {
    title: "Warranties",
    content:
      "Services are provided on an 'as is' basis. We do not guarantee specific outcomes but commit to professional-quality delivery. You are responsible for validating compliance and fitness for your environment.",
  },
  {
    title: "Limitation of liability",
    content:
      "Our aggregate liability is limited to the fees paid for the applicable services. We are not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "Termination",
    content:
      "Either party may terminate with written notice if the other materially breaches and fails to cure within 15 days. Upon termination, outstanding fees become due.",
  },
  {
    title: "Governing law",
    content:
      "These Terms are governed by the laws of the Province of Quebec and the federal laws of Canada. Disputes will be resolved in the courts of Montreal, Quebec.",
  },
  {
    title: "Updates",
    content:
      "We may update these Terms to reflect changes in services or legal requirements. Material updates will be communicated via email or site notice.",
  },
  {
    title: "Contact",
    content:
      "For questions about these Terms, contact legal@victorconsultancy.com or Victor Consultancy, 1440 Rue Sainte-Catherine O, Montreal, QC, Canada.",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-12">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[400px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
              Terms
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Operating with clarity and trust.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              These Terms outline the legal framework governing our client, academy, and automation services.
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
