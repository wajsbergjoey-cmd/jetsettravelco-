import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

const services: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Hotels & resorts",
    body: "Room upgrades, resort credit, and early check-in at properties I know firsthand.",
    icon: (
      <>
        <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.4" />
      </>
    ),
  },
  {
    title: "Cruises",
    body: "Cabin selection, onboard credit, and the fine print that decides if a sailing is actually worth it.",
    icon: (
      <>
        <path d="M3 15c3-3 15-3 18 0" />
        <path d="M6 19c2-2 10-2 12 0" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  {
    title: "Flights",
    body: "Routing that actually makes sense, seat strategy, and a real person to call when plans change.",
    icon: <path d="M2 16l20-7-7 20-3-8-8-3z" strokeLinejoin="round" />,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-primary text-primary-foreground">
      <div className="wrap grid grid-cols-1 sm:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 100}
            className={`group px-[10px] py-8 text-center sm:border-t-0 sm:border-l sm:px-7 sm:py-14 ${
              i === 0 ? "" : "border-t border-[rgba(245,237,225,0.14)]"
            } sm:border-l-[rgba(245,237,225,0.14)] ${i === 0 ? "sm:border-l-0" : ""}`}
          >
            <div className="badge-gradient mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full shadow-[0_14px_30px_-18px_rgba(217,139,79,0.9)] transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                aria-hidden="true"
                className="h-6 w-6 fill-none stroke-cream"
              >
                {s.icon}
              </svg>
            </div>
            <h3 className="mb-[10px] text-[1.15rem] text-cream">{s.title}</h3>
            <p className="text-[0.94rem] text-[rgba(245,237,225,0.72)]">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
