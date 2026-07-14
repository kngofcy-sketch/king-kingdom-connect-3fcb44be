import { Quote } from "lucide-react";

import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section className="section-band border-y border-white/10 bg-black/35">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="section-kicker">
            <Quote className="h-4 w-4" /> Testimonials
          </div>
          <h2 className="section-title">
            Trusted for projects that need both taste and technical command.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-md border border-white/10 bg-card/55 p-6"
            >
              <Quote className="h-6 w-6 text-gold" />
              <blockquote className="mt-5 text-base leading-7 text-muted-foreground">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-white/10 pt-5">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  {testimonial.title}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
