import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { overlineClass } from "@/ui/theme";
import { navLinks } from "@/config/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victor Consultancy | Strategic AI Adoption",
  description:
    "Strategic AI adoption consulting that bridges assessment to measurable transformation for SMBs, enterprises, nonprofits, and public teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-white text-neutral-900`}>
        <div className="min-h-screen bg-white">
          <SiteHeader />

          <main>{children}</main>

          <footer className="border-t border-neutral-200/70 bg-white">
            <div className="page-shell section-pad-sm grid gap-8 border-neutral-200/70 text-neutral-600 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-3 text-neutral-900 transition hover:opacity-80">
                  <div className="relative h-10 w-10">
                    <Image src="/Dark-Theme-Logo.png" alt="Victor Consultancy monogram" fill sizes="40px" className="object-contain" />
                  </div>
                  <div className="relative h-10 w-40">
                    <Image src="/Light-Theme-Logo.png" alt="Victor Consultancy wordmark" fill sizes="160px" className="object-contain" />
                  </div>
                </Link>
                <p className="max-w-sm text-sm leading-7 text-neutral-500">
                  Victor Consultancy delivers responsible AI transformation across strategy, governance, and execution for
                  global teams.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <p className={overlineClass}>Explore</p>
                  <div className="flex flex-col gap-2 text-sm text-neutral-500">
                    {navLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="transition hover:text-neutral-900">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className={overlineClass}>Connect</p>
                  <div className="flex flex-col gap-2 text-sm text-neutral-500">
                    <Link href="mailto:anne@victorconsultancy.com" className="transition hover:text-neutral-900">
                      anne@victorconsultancy.com
                    </Link>
                    <Link href="https://www.linkedin.com/company/anne-victor-consultancy/" target="_blank" className="transition hover:text-neutral-900">
                      Company LinkedIn
                    </Link>
                    <Link href="https://linkedin.com/in/victoranne" target="_blank" className="transition hover:text-neutral-900">
                      Founder LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-full flex flex-col gap-3 border-t border-neutral-200/70 pt-6 text-xs uppercase tracking-[0.16em] text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Victor Consultancy. All rights reserved.</p>
                <div className="flex gap-5">
                  <Link href="/privacy" className="transition hover:text-neutral-900">
                    Privacy
                  </Link>
                  <Link href="/terms" className="transition hover:text-neutral-900">
                    Terms
                  </Link>
                  <Link href="/contact" className="transition hover:text-neutral-900">
                    Contact
                  </Link>
                </div>
                <Link href="/login" className="text-xs uppercase tracking-[0.16em] text-neutral-400 transition hover:text-neutral-900">
                  Client portal
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
