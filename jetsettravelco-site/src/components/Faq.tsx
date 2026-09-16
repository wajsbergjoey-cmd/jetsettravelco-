export const faqs = [
  {
    q: "Does it cost more to book through a travel advisor?",
    a: "No. You pay the same rate you'd find yourself — often better — and Jet Set Travel Co. is compensated by hotels, cruise lines, and travel partners, not by you. The consult is free.",
  },
  {
    q: "What can Jet Set Travel Co. book for me?",
    a: "Hotels and resorts, cruises, flights, transfers, and complete itineraries — from a single weekend getaway to a multi-stop honeymoon or family trip.",
  },
  {
    q: "How does the booking process work?",
    a: "Start with a free consult to share your dates, style, and budget. You'll receive a tailored proposal, then everything is booked for you — and you have support before and during your trip.",
  },
  {
    q: "What perks do I get booking through Jet Set?",
    a: "Through preferred-partner programs, bookings often include room upgrades, daily breakfast, resort credits, early check-in, and late checkout at no extra cost.",
  },
  {
    q: "Can you help with flights as well as hotels?",
    a: "Yes. Flights can be arranged alongside hotels and cruises so the whole trip is coordinated in one place, with one point of contact if plans change.",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-card py-16 md:py-24">
      <div className="wrap max-w-[800px]">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold-deep">
          Good to know
        </p>
        <h2 className="mt-3 font-display text-[1.9rem] leading-tight font-semibold text-foreground md:text-[2.4rem]">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[1.02rem] font-medium text-foreground [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 fill-none stroke-gold-deep transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.8}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed text-foreground-soft">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
