import { Instagram, Mail } from "lucide-react";

import { TelegramIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons/BrandIcons";
import { company, divisions, leaders, navItems, services } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/35">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 font-display font-bold uppercase tracking-[0.18em]">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-gold text-primary-foreground">
              K
            </span>
            KingdomConnect VIP
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
            Official holding company for technology, branding, artificial intelligence, music
            production, and enterprise systems.
          </p>
          <div className="mt-5 flex items-center gap-3 text-muted-foreground">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-gold"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={company.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="transition hover:text-gold"
            >
              <TelegramIcon className="h-5 w-5" />
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={company.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition hover:text-gold"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <FooterColumn
          title="Company"
          items={navItems.map((item) => ({ label: item.label, href: item.href }))}
        />
        <FooterColumn
          title="Divisions"
          items={divisions.map((division) => ({ label: division.name, href: "#divisions" }))}
        />
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Leadership</div>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground">
            {leaders.map((leader) => (
              <div key={leader.name}>
                <div className="font-semibold text-foreground">{leader.name}</div>
                <div className="mt-1 text-xs">{leader.roles.join(" / ")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} KingdomConnect VIP. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5" /> Business Email
            </a>
            <span>Privacy</span>
            <span>Legal</span>
            <span>Corporate Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{title}</div>
      <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
        {items.slice(0, services.length).map((item) => (
          <a key={`${title}-${item.label}`} href={item.href} className="transition hover:text-gold">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
