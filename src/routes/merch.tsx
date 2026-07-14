import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Crown, Instagram, Package, ShoppingBag, Zap } from "lucide-react";

import { CheckoutModal, type CheckoutItem } from "@/components/checkout/CheckoutModal";
import { TikTokIcon } from "@/components/icons/BrandIcons";
import { company } from "@/content/site";

export const Route = createFileRoute("/merch")({
  head: () => ({
    meta: [
      { title: "Merch Store | KingdomConnect VIP" },
      {
        name: "description",
        content:
          "Official KingdomConnect VIP merchandise. Premium apparel, jewelry, and accessories.",
      },
    ],
  }),
  component: MerchPage,
});

type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  tags: string[];
  badge?: string;
  accentColor: string;
  symbol: string;
  eprolo?: boolean;
};

const products: Product[] = [
  {
    id: "kng-carly-hoodie",
    name: 'KNG_CARLY "Gold & Platinum" Unisex Hoodie',
    price: 50.0,
    currency: "USD",
    description:
      "Premium unisex cotton hoodie featuring the official gold crown KNG_CARLY branding. Heavyweight construction with embroidered gold crown insignia.",
    tags: ["Premium Cotton", "Unisex Fit", "Limited Drop"],
    symbol: "K",
    accentColor: "oklch(0.83 0.145 82)",
  },
  {
    id: "14k-cuban-link",
    name: '14k Gold Cuban Link Chain',
    price: 85.0,
    currency: "USD",
    description:
      "Solid 14k gold-plated Cuban link chain. 6mm width, 20-inch length. Lobster claw clasp. Certified luxury finish.",
    tags: ["14k Gold Plated", "6mm Width", "20 inches"],
    badge: "Jewelry",
    symbol: "\u26C6",
    accentColor: "oklch(0.83 0.145 82)",
  },
  {
    id: "kng-apex-sunglasses",
    name: "KNG Apex Edition Sunglasses",
    price: 45.0,
    currency: "USD",
    description:
      "Polarized UV400 lenses with matte black frame and gold KNG insignia. Includes premium case.",
    tags: ["Polarized UV400", "Matte Black", "KNG Insignia"],
    badge: "Fast Shipping via EPROLO",
    symbol: "\u25C8",
    accentColor: "oklch(0.76 0.18 158)",
    eprolo: true,
  },
  {
    id: "kng-chrono-smartwatch",
    name: "KNG Chrono Smartwatch",
    price: 120.0,
    currency: "USD",
    description:
      "Smart fitness tracker with AMOLED display, gold case finish, KNG branded watch face, and 7-day battery life.",
    tags: ["AMOLED Display", "Gold Case", "7-Day Battery"],
    badge: "Fast Shipping via EPROLO",
    symbol: "\u231A",
    accentColor: "oklch(0.76 0.18 158)",
    eprolo: true,
  },
];

function MerchPage() {
  const [checkoutItem, setCheckoutItem] = useState<CheckoutItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openCheckout = (product: Product) => {
    setCheckoutItem({
      name: product.name,
      price: `$${product.price.toFixed(2)}`,
      description: product.description,
      badge: product.badge,
    });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-3" aria-label="KingdomConnect VIP home">
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
            <a href={company.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground transition hover:text-gold">
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground transition hover:text-gold">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="mb-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-gold">
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={openCheckout} />
          ))}
        </div>

        <div className="mt-24 rounded-xl border border-gold/20 bg-card/60 px-8 py-10 text-center">
          <Crown className="mx-auto mb-4 h-8 w-8 text-gold" />
          <h2 className="font-display text-2xl font-bold text-foreground">More drops incoming.</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Follow us on TikTok and Instagram to catch new releases and limited collections before they sell out.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href={company.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-gold/40 hover:text-gold">
              <TikTokIcon className="h-4 w-4" /> TikTok
            </a>
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-gold/40 hover:text-gold">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </main>

      <footer className="mt-10 border-t border-white/10 py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} KingdomConnect VIP Holding Company. All rights reserved.
      </footer>

      <CheckoutModal item={checkoutItem} open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

function ProductCard({
  product,
  onBuy,
}: {
  product: Product;
  onBuy: (p: Product) => void;
}) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/10 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_60px_-15px_rgba(238,184,76,0.2)]">
      <div
        className="relative overflow-hidden rounded-t-xl"
        style={{ aspectRatio: "1/1" }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, color-mix(in oklab, ${product.accentColor} 12%, oklch(0.14 0.01 264)), oklch(0.1 0.005 264))`,
          }}
        >
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 transition-transform duration-500 group-hover:scale-110"
            style={{
              background: `radial-gradient(ellipse, color-mix(in oklab, ${product.accentColor} 20%, oklch(0.12 0.005 264)), oklch(0.1 0.005 264))`,
              boxShadow: `0 0 40px color-mix(in oklab, ${product.accentColor} 25%, transparent)`,
            }}
          >
            <span className="font-display text-3xl leading-none text-gold">
              {product.symbol}
            </span>
          </div>
          <span className="mt-3 text-[9px] font-black uppercase tracking-[0.3em] text-gold/50">
            KingdomConnect
          </span>
        </div>

        <div className="absolute inset-0 rounded-t-xl border border-gold/0 transition-all duration-300 group-hover:border-gold/20" />

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.eprolo && (
            <span className="flex items-center gap-1 rounded-full border border-[oklch(0.76_0.18_158)/40] bg-black/70 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[oklch(0.76_0.18_158)] backdrop-blur">
              <Zap className="h-2.5 w-2.5" /> Fast Ship · EPROLO
            </span>
          )}
          {product.badge && !product.eprolo && (
            <span className="rounded-full border border-gold/30 bg-black/70 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-gold backdrop-blur">
              {product.badge}
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card/90 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-sm font-bold leading-snug text-foreground">
          {product.name}
        </h3>

        <p className="mt-2 text-xs leading-5 text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="font-display text-xl font-black text-foreground">
              ${product.price.toFixed(2)}
            </span>
            <span className="ml-1 text-[10px] font-semibold text-muted-foreground">
              {product.currency}
            </span>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-400">
            <Package className="h-2.5 w-2.5" /> In Stock
          </span>
        </div>

        <button
          type="button"
          onClick={() => onBuy(product)}
          className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-gradient-gold px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-primary-foreground shadow-gold transition hover:-translate-y-[1px]"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
