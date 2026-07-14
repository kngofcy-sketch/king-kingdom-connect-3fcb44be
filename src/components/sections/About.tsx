import { Building2, CheckCircle2 } from "lucide-react";

export function About() {
  const points = [
    "A holding company built around execution, design taste, and applied technology.",
    "Structured for creative, AI, music, and enterprise systems to operate as coordinated divisions.",
    "Designed to scale into future subsidiaries without diluting the core luxury technology identity.",
  ];

  return (
    <section id="company" className="section-band">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <div className="section-kicker">
            <Building2 className="h-4 w-4" /> About KingdomConnect VIP
          </div>
          <h2 className="section-title">
            The official enterprise home for a multi-division creative technology company.
          </h2>
        </div>
        <div className="grid gap-4">
          <p className="text-lg leading-8 text-muted-foreground">
            KingdomConnect VIP connects premium brand systems, AI products, cloud infrastructure,
            automation, and music production into one disciplined operating platform. The result is
            a company that can design the identity, engineer the system, produce the media, and
            launch the experience.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {points.map((point) => (
              <div key={point} className="rounded-md border border-white/10 bg-card/70 p-5">
                <CheckCircle2 className="mb-4 h-5 w-5 text-gold" />
                <p className="text-sm leading-6 text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
