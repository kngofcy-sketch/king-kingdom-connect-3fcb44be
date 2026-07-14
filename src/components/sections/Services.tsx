import { Check, Layers3 } from "lucide-react";

import { services } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="section-band">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="section-kicker">
              <Layers3 className="h-4 w-4" /> Services
            </div>
            <h2 className="section-title">
              Enterprise delivery across strategy, systems, identity, and media.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              KingdomConnect VIP can lead a single premium brand launch or assemble multiple
              divisions around a larger transformation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-card/60 p-4"
              >
                <Check className="h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm font-semibold text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
