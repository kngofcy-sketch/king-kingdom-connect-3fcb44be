import { useState } from "react";
import { ArrowRight, Instagram, Menu, ShoppingBag, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { TikTokIcon } from "@/components/icons/BrandIcons";
import { company, navItems } from "@/content/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/72 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
        <a
          href="#home"
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
        </a>

        <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground lg:flex">
          {navItems.map((item) =>
            item.route ? (
              <Link
                key={item.href}
                to={item.href as "/merch"}
                className="inline-flex items-center gap-1.5 transition hover:text-gold"
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="transition hover:text-gold">
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-gold transition hover:translate-y-[-1px]"
          >
            Request Access <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-card/70 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`grid transition-all duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <nav className="mx-4 mb-4 flex flex-col gap-1 rounded-md border border-white/10 bg-card/95 p-3 shadow-2xl">
            {navItems.map((item) =>
              item.route ? (
                <Link
                  key={item.href}
                  to={item.href as "/merch"}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-3 text-sm font-semibold text-gold transition hover:bg-white/5"
                >
                  <ShoppingBag className="h-4 w-4" />
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-white/5 hover:text-gold"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              Request Access <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
