import { ArrowRight, BrainCircuit } from "lucide-react";

import { aiProducts } from "@/content/site";

export function KNGAILabs() {
  return (
    <section id="ai-labs" className="section-band border-y border-white/10 bg-black/35">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-kicker">
              <BrainCircuit className="h-4 w-4" /> KNG AI Labs
            </div>
            <h2 className="section-title">
              Applied AI products for creators, brands, and operators.
            </h2>
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            KNG AI Labs turns automation, agents, video intelligence, and marketing systems into
            deployable products. Each product line is designed to become a reusable engine across
            the KingdomConnect VIP ecosystem.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aiProducts.map(({ name, icon: Icon, description }) => (
            <article
              key={name}
              className="group rounded-md border border-white/10 bg-card/55 p-5 transition hover:-translate-y-1 hover:border-gold/60"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-gold" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
