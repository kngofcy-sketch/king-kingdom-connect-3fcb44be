import { Music } from "lucide-react";

import studioImg from "@/assets/studio.jpg";
import { studioServices } from "@/content/site";

export function DHSKNGStudio() {
  return (
    <section id="studio" className="section-band">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src={studioImg}
            alt="DHSKNG Studio production room"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full rounded-md border border-white/10 object-cover shadow-2xl"
          />
          <div className="absolute bottom-5 left-5 rounded-md border border-gold/40 bg-black/60 p-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <Music className="h-5 w-5 text-gold" />
              <div>
                <div className="text-sm font-bold">DHSKNG STUDIO</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Music Production Division
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="section-kicker">
            <Music className="h-4 w-4" /> DHSKNG Studio
          </div>
          <h2 className="section-title">Premium music production with rollout infrastructure.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The studio division supports artists from sound to market: recording, mix, master,
            visual identity, distribution, content, and strategic release support.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {studioServices.map(({ name, icon: Icon }) => (
              <div key={name} className="rounded-md border border-white/10 bg-card/60 p-4">
                <Icon className="mb-3 h-5 w-5 text-gold" />
                <div className="text-sm font-semibold">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
