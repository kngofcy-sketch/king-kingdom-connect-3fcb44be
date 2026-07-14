import { ArrowRight, Code2, Film, Lock, Music, Palette } from "lucide-react";

import brandingImg from "@/assets/branding.jpg";
import studioImg from "@/assets/studio.jpg";

const projects = [
  {
    title: "ClipForge AI Platform",
    division: "KNG AI Labs",
    description:
      "AI video product concept for social clipping, creator workflows, and campaign acceleration.",
    technologies: ["React", "AI pipeline", "Video UX"],
    results: "Designed as a reusable product line for creator and brand media systems.",
    icon: Film,
    mockup: "clipforge",
  },
  {
    title: "Platinum SOP Operations",
    division: "Enterprise Solutions",
    description:
      "Operational dashboard direction for SOP, payroll, GPS compliance, and multi-role administration.",
    technologies: ["Cloud systems", "Dashboards", "Automation"],
    results:
      "Built as isolated operational infrastructure independent from this marketing platform.",
    icon: Lock,
    mockup: "ops",
  },
  {
    title: "Evolution EP",
    division: "DHSKNG Studio",
    description:
      "Music release identity with studio production, creative positioning, and visual rollout assets.",
    technologies: ["Production", "Distribution", "Cover art"],
    results: "Complete artist-facing release package across sound and visuals.",
    icon: Music,
    image: studioImg,
  },
  {
    title: "KNG Carly Brand System",
    division: "KingdomConnect Creative",
    description:
      "Premium brand visual system for digital-first positioning and campaign expression.",
    technologies: ["Branding", "UI direction", "Creative systems"],
    results: "Cohesive identity foundation for web, social, and product presence.",
    icon: Palette,
    image: brandingImg,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-band border-y border-white/10 bg-card/25">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="section-kicker">
              <Code2 className="h-4 w-4" /> Portfolio
            </div>
            <h2 className="section-title">
              Professional showcase across software, AI, branding, and music.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-gold/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-gold transition hover:bg-gold/10"
          >
            Discuss a Case Study <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-md border border-white/10 bg-black/35"
            >
              <div className="relative aspect-[16/9] bg-card">
                {project.mockup === "clipforge" ? (
                  <ClipForgePreview />
                ) : project.mockup === "ops" ? (
                  <OpsPreview />
                ) : (
                  <img
                    src={project.image || brandingImg}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute left-4 top-4 rounded-md border border-white/10 bg-black/60 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gold backdrop-blur">
                  {project.division}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-gold/10 text-gold">
                    <project.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-5 border-l border-gold/50 pl-4 text-sm leading-6 text-muted-foreground">
                  {project.results}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-gold"
                >
                  Case Study <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClipForgePreview() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#08080a,#20120b_48%,#050506)] p-5">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs font-mono uppercase tracking-[0.25em] text-gold/80">
          clipforge.ai
        </span>
      </div>
      <div className="mt-7 grid h-[72%] grid-cols-[1.2fr_0.8fr] gap-4">
        <div className="grid place-items-center rounded-md border border-gold/40 bg-gold/10">
          <Film className="h-14 w-14 text-gold" />
        </div>
        <div className="space-y-3">
          <div className="h-8 rounded-md bg-gold/40" />
          <div className="h-8 rounded-md bg-white/10" />
          <div className="h-8 rounded-md bg-white/10" />
          <div className="h-20 rounded-md border border-white/10 bg-black/30" />
        </div>
      </div>
    </div>
  );
}

function OpsPreview() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#070707,#171717_48%,#030303)] p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold/80">
          isolated ops system
        </span>
        <Lock className="h-4 w-4 text-gold" />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          ["SOP", "98%"],
          ["Payroll", "$42K"],
          ["Audit", "Live"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/10 bg-black/35 p-3">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </div>
            <div className="mt-2 font-display text-2xl font-bold text-gold">{value}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-md border border-white/10 bg-black/35 p-4">
        {[72, 48, 86, 61, 78].map((width, index) => (
          <div key={`${width}-${index}`} className="mb-3 flex items-center gap-3 last:mb-0">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span
              className="h-2 rounded-full bg-gold/45"
              style={{ width: `${width - index * 3}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
