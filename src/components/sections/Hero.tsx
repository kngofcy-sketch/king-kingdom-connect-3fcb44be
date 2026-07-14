import { ArrowRight, ChevronDown, Cpu, Sparkles } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import { stats, trustSignals } from "@/content/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-42"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,10,0.96)_0%,rgba(8,8,10,0.74)_48%,rgba(8,8,10,0.9)_100%)]" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,0.78fr)] lg:items-center xl:grid-cols-[minmax(0,1fr)_minmax(25rem,0.74fr)]">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            Luxury Technology Holding Company
          </div>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-black uppercase leading-[0.9] tracking-normal text-foreground sm:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <span className="block">Kingdom</span>
            <span className="block">
              Connect <span className="text-gold">VIP</span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            A premium enterprise platform unifying AI products, creative direction, music
            production, cloud systems, and brand infrastructure under one holding company.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#divisions"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-primary-foreground shadow-gold transition hover:translate-y-[-2px]"
            >
              Explore Divisions <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-foreground backdrop-blur transition hover:border-gold hover:text-gold"
            >
              Start a Project
            </a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-white/10 bg-black/35 p-4 backdrop-blur"
              >
                <div className="font-display text-3xl font-black text-gold">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[34rem] lg:min-h-[42rem]">
          <div className="absolute right-0 top-8 w-full max-w-md rounded-md border border-gold/25 bg-card/55 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold">Command Center</div>
                <div className="mt-1 font-display text-2xl font-bold">KC VIP Ecosystem</div>
              </div>
              <Cpu className="h-6 w-6 text-gold" />
            </div>
            <div className="mt-5 grid gap-3">
              {[
                "KNG AI Labs",
                "KingdomConnect Creative",
                "DHSKNG Studio",
                "Enterprise Solutions",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-black/30 p-3"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-gold/15 text-xs font-bold text-gold">
                    0{index + 1}
                  </span>
                  <span className="font-semibold">{item}</span>
                  <span className="ml-auto h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_rgba(238,184,76,0.8)]" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-10 left-0 w-[92%] max-w-lg rounded-md border border-white/10 bg-black/55 p-5 backdrop-blur-2xl">
            <div className="grid gap-3 sm:grid-cols-3">
              {trustSignals.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"
                >
                  <Icon className="h-4 w-4 text-gold" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#company"
        aria-label="Scroll to company overview"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-gold md:block"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
