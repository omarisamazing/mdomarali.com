// Single source of truth for site-wide contact links, proof stats,
// navigation, meta, and CTA labels. Edit here and every section follows.
export const site = {
  url: "https://mdomarali.com",
  name: "Md. Omar Ali",
  email: "hello@mdomarali.com",
  calLink: "https://cal.com/mdomarali.com/15min",
  whatsapp: "https://wa.me/8801856733357",
  location: "Dhaka, Bangladesh, remote worldwide",
} as const;

export const defaultMeta = {
  title: "Md. Omar Ali | Economics, Data Analysis, Presentation Design",
  description:
    "Portfolio of Md. Omar Ali: 3rd-year Economics student, aspiring Data & Business Analyst, SEO and presentation / video design specialist based in Bangladesh.",
} as const;

// Central CTA labels so buttons stay consistent across pages.
// Home section order lives in src/pages/index.astro — reorder by moving lines.
export const cta = {
  viewWork: "View selected work",
  allWork: "All work",
  startBrief: "Start a brief",
  aboutOmar: "About Omar",
  seeProof: "See the proof",
  getInTouch: "Get in touch",
} as const;

export interface ProofStat {
  value: string;
  label: string;
}

export const proofStats: ProofStat[] = [
  { value: "15+", label: "Projects" },
  { value: "30+", label: "Artifacts shipped" },
  { value: "24h", label: "Reply time" },
];

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Per-craft case link labels. WorkCard falls back to caseCtaFallback.
export const caseCtaFallback = "Read full case";

export const craftCta: Record<string, string> = {
  "Presentation Design": "See the slides",
  "Data Analysis": "See the dashboard",
  "Business Analysis": "See the analysis",
  "SEO & Content": "See the turnaround",
  "SEO and Content": "See the turnaround",
  "Video Editing": "Watch the edits",
};

export function craftCtaLabel(eyebrow: string): string {
  return craftCta[eyebrow] ?? caseCtaFallback;
}
