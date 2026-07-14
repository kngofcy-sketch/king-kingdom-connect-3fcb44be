import { Crown, ShieldCheck } from "lucide-react";

import { leaders } from "@/content/site";

export function Leadership() {
  return (
    <section id="leadership" className="section-band">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-kicker justify-center">
            <Crown className="h-4 w-4" /> Corporate Leadership
          </div>
          <h2 className="section-title">
            Technology discipline and creative direction at the executive level.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="rounded-md border border-white/10 bg-card/60 p-7 backdrop-blur"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-3xl font-bold">{leader.name}</h3>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
                    {leader.roles.join(" / ")}
                  </p>
                </div>
                <ShieldCheck className="h-7 w-7 text-gold" />
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {leader.focus.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm font-semibold text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
