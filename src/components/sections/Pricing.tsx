import { Check, Crown, Sparkles, Star } from "lucide-react";

const plans = [
  {
    name: "Essential Logo Package",
    price: "$249.99",
    currency: "USD",
    icon: Star,
    highlight: false,
    badge: null,
    features: [
      "Logo 3D / Holográfico",
      "Branding básico",
      "3 Gráficos para redes sociales",
      "2 rondas de revisión",
    ],
    cta: "Get Started",
    href: "#contact",
  },
  {
    name: "Pro Brand Identity",
    price: "$749.99",
    currency: "USD",
    icon: Sparkles,
    highlight: true,
    badge: "Most Popular",
    features: [
      "Identidad visual completa",
      "Mockup de diseño web (UI/UX)",
      "10 Gráficos para redes sociales",
      "Material listo para entrega",
    ],
    cta: "Get Started",
    href: "#contact",
  },
  {
    name: "Elite Production & Strategy",
    price: "$1,499.99",
    currency: "USD",
    icon: Crown,
    highlight: false,
    badge: "Elite",
    features: [
      "Todo lo del plan Pro",
      "Estrategia de marca completa",
      "Desarrollo web funcional (Hostinger Ready)",
      "KNG-SYS ELITE integration",
    ],
    cta: "Get Started",
    href: "#contact",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-band">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="section-kicker justify-center">
            <Crown className="h-4 w-4" /> Creative Packages
          </div>
          <h2 className="section-title mx-auto text-center">
            Invest in your brand's kingdom.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Premium branding and production packages designed for founders, artists, and
            enterprises ready to operate at the highest level.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-gold/60 bg-card shadow-gold"
                    : "border-white/10 bg-card/70"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-black uppercase tracking-[0.2em] ${
                      plan.highlight
                        ? "bg-gradient-gold text-primary-foreground shadow-gold"
                        : "border border-gold/40 bg-card text-gold"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <div
                  className={`grid h-12 w-12 place-items-center rounded-lg border ${
                    plan.highlight
                      ? "border-gold/60 bg-gold/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${plan.highlight ? "text-gold" : "text-muted-foreground"}`}
                  />
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-4xl font-black text-foreground">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm font-semibold text-muted-foreground">
                    {plan.currency}
                  </span>
                </div>

                <ul className="mt-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    href={plan.href}
                    className={`inline-flex w-full items-center justify-center rounded-md px-6 py-3.5 text-sm font-black uppercase tracking-[0.14em] transition hover:-translate-y-[1px] ${
                      plan.highlight
                        ? "bg-gradient-gold text-primary-foreground shadow-gold"
                        : "border border-gold/40 bg-transparent text-gold hover:bg-gold/5"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All packages include a dedicated account contact. Custom enterprise quotes available —{" "}
          <a href="#contact" className="text-gold underline-offset-4 hover:underline">
            reach out directly.
          </a>
        </p>
      </div>
    </section>
  );
}
