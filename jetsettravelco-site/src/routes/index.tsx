import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Perks } from "@/components/Perks";
import { RecentTrips } from "@/components/RecentTrips";
import { Testimonials } from "@/components/Testimonials";
import { Consult } from "@/components/Consult";
import { Faq, faqs } from "@/components/Faq";
import { ConsultProvider } from "@/components/ConsultPanel";
import { SiteFooter } from "@/components/SiteFooter";

const siteUrl = "https://jetsettravel.lovable.app";
const title = "Jet Set Travel Co. — Hotels, Cruises & Flights Advisor";
const description =
  "Jet Set Travel Co. plans and books hotels, cruises, and flights with VIP upgrades, resort credits, and insider perks — at no extra cost to you.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "travel advisor, travel agent, hotel booking, cruise booking, flight booking, luxury travel, honeymoon planning, vacation packages, resort upgrades",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Jet Set Travel Co.",
          url: siteUrl,
          description,
          email: "hello@jetsettravelco.com",
          areaServed: "Worldwide",
          knowsAbout: [
            "hotel booking",
            "cruise booking",
            "flight booking",
            "luxury travel planning",
            "honeymoons",
            "family vacations",
          ],
          sameAs: ["https://instagram.com/jetsettravelco_"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ConsultProvider>
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Perks />
        <RecentTrips />
        <Testimonials />
        <Faq />
        <Consult />
      </main>
      <SiteFooter />
    </ConsultProvider>
  );
}
