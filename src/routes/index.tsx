import { createFileRoute } from "@tanstack/react-router";

import { Background } from "@/components/effects/Background";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { BusinessDivisions } from "@/components/sections/BusinessDivisions";
import { Contact } from "@/components/sections/Contact";
import { DHSKNGStudio } from "@/components/sections/DHSKNGStudio";
import { Hero } from "@/components/sections/Hero";
import { KNGAILabs } from "@/components/sections/KNGAILabs";
import { Leadership } from "@/components/sections/Leadership";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KingdomConnect VIP | Enterprise AI, Branding, Music & Cloud Holding Company" },
      {
        name: "description",
        content:
          "KingdomConnect VIP is a premium holding company for DHSKNG Studio, KingdomConnect Creative, KNG AI Labs, and Enterprise Solutions.",
      },
      { property: "og:title", content: "KingdomConnect VIP | Premium Enterprise Platform" },
      {
        property: "og:description",
        content:
          "A luxury technology, branding, artificial intelligence, enterprise systems, and music production holding company.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://dhskngstudio.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KingdomConnect VIP",
          url: "https://dhskngstudio.com/",
          email: "info@dhskngstudio.com",
          founder: ["Carlos Y. Izquierdo Rodriguez", "Disney Hernandez Serrano"],
          subOrganization: [
            { "@type": "Organization", name: "DHSKNG STUDIO" },
            { "@type": "Organization", name: "KingdomConnect Creative" },
            { "@type": "Organization", name: "KNG AI Labs" },
            { "@type": "Organization", name: "Enterprise Solutions" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <BusinessDivisions />
        <Leadership />
        <DHSKNGStudio />
        <KNGAILabs />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
