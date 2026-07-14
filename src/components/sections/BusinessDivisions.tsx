import { ArrowUpRight } from "lucide-react";

import { divisions } from "@/content/site";

export function BusinessDivisions() {
  return (
    <section id="divisions" className="section-band border-y border-white/10 bg-card/25">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="section-kicker">Business Divisions</div>
          <h2 className="section-title">One holding company. Four specialized engines.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {divisions.map(({ name, subtitle, icon: Icon, summary, capabilities }) => (
            <article
              key={name}
              className="group rounded-md border border-white/10 bg-black/30 p-6 transition hover:-translate-y-1 hover:border-gold/60 hover:bg-card/80"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-gold/30 bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-gold" />
              </div>
              <h3 className="mt-7 font-display text-2xl font-bold">{name}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                {subtitle}
              </p>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
