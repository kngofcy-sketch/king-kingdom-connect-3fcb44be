import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Crown, Package, ShoppingBag } from "lucide-react";
import { Instagram } from "lucide-react";

import { TikTokIcon } from "@/components/icons/BrandIcons";
import { company } from "@/content/site";

export const Route = createFileRoute("/merch")({
  head: () => ({
    meta: [
      { title: "Merch Store | KingdomConnect VIP" },
      {
        name: "description",
        content:
          "Official KingdomConnect VIP merchandise. Premium apparel and brand accessories.",
      },
    ],
  }),
  component: MerchPage,
});

const products = [
  {
    id: "kng-carly-hoodie-gold-platinum",
    name: 'KNG_CARLY Signature "Gold & Platinum" Unisex Hoodie',
    price: 50.0,
    currency: "USD",
    description:
      "Premium unisex cotton hoodie featuring the official gold crown KNG_CARLY branding. Heavyweight 100% cotton construction with embroidered gold crown insignia. Unisex sizing, true-to-fit cut.",
    tags: ["Premium Cotton", "Unisex Fit", "Limited Drop"],
    status: "available",
  },
];

function MerchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="KingdomConnect VIP home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/50 bg-gold text-sm font-black text-primary-foreground shadow-[0_0_32px_rgba(238,184,76,0.28)]">
              K
            </span>
            <span className="leading-none">
              <span className="block font-display text-sm font-bold uppercase tracking-[0.24em] text-foreground">
                KingdomConnect
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.36em] text-gold">
                VIP Holding
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={company.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-muted-foreground transition hover:text-gold"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground transition hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to main site
          </Link>
        </div>

        <div className="mb-14">
          <div className="section-kicker">
            <ShoppingBag className="h-4 w-4" /> Official Store
          </div>
          <h1 className="section-title mt-2">KingdomConnect VIP Merch</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            Limited-edition drops. Wear the kingdom.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-24 rounded-xl border border-gold/20 bg-card/60 px-8 py-10 text-center">
          <Crown className="mx-auto mb-4 h-8 w-8 text-gold" />
          <h2 className="font-display text-2xl font-bold text-foreground">
            More drops incoming.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Follow us on TikTok and Instagram to catch new releases and limited collections before
            they sell out.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={company.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-gold/40 hover:text-gold"
            >
              <TikTokIcon className="h-4 w-4" /> TikTok
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-gold/40 hover:text-gold"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </main>

      <footer className="mt-10 border-t border-white/10 py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} KingdomConnect VIP Holding Company. All rights reserved.
      </footer>
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/10 bg-card/70 transition-transform duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_60px_-15px_rgba(238,184,76,0.18)]">
      <div
        className="relative overflow-hidden rounded-t-xl"
        style={{ aspectRatio: "4/3" }}
        aria-label={`${product.name} product image`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[oklch(0.16_0.01_264)] via-[oklch(0.14_0.01_264)] to-[oklch(0.1_0.01_264)]">
          <div
            className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold/50 shadow-[0_0_48px_rgba(238,184,76,0.22),inset_0_0_32px_rgba(238,184,76,0.08)]"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.22 0.04 85 / 0.5), oklch(0.12 0.005 264))",
            }}
          >
            <span className="font-display text-3xl font-black text-gold">K</span>
          </div>
          <span className="mt-4 text-[10px] font-black uppercase tracking-[0.28em] text-gold/60">
            KNG_CARLY
          </span>
        </div>

        <div className="absolute inset-0 rounded-t-xl border border-gold/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute right-3 top-3 flex flex-col gap-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gold/30 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/80 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card/80 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-bold leading-tight text-foreground">
            {product.name}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <span className="font-display text-2xl font-black text-foreground">
              ${product.price.toFixed(2)}
            </span>
            <span className="ml-1.5 text-xs font-semibold text-muted-foreground">
              {product.currency}
            </span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">
            <Package className="h-3 w-3" /> In Stock
          </span>
        </div>

        <a
          href="#contact"
          className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-gradient-gold px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-primary-foreground shadow-gold transition hover:-translate-y-[1px]"
        >
          Order Now
        </a>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          Fulfilled via Printful / Printify
        </p>
      </div>
    </div>
  );
}
