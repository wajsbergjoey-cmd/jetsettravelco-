import { Reveal } from "@/components/Reveal";

const perks = [
  {
    title: "No extra cost to you",
    body: "Working with me costs nothing more than booking it yourself — the room rate is the same as booking direct.",
  },
  {
    title: "Perks most people miss",
    body: "Upgrades, resort credit, early check-in, and amenities tied to advisor relationships, not published rates.",
  },
  {
    title: "One person, not a call center",
    body: "If a flight gets cancelled or a hotel loses a reservation, you're calling me — not waiting on hold.",
  },
  {
    title: "Planning that fits how you travel",
    body: "I ask what actually matters to you on a trip, then build the itinerary around that — not a generic package.",
  },
];

export function Perks() {
  return (
    <section id="perks" className="pt-[68px] pb-[60px] sm:pt-[100px] sm:pb-[90px]">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[640px] sm:mb-14">
          <div className="kicker">Why book through an advisor</div>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] leading-[1.15]">
            Same price as booking it yourself. A very different trip once you're there.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-14 gap-y-7 sm:gap-y-[38px] sm:grid-cols-2">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="border-t border-border pt-[22px]">
              <h3 className="mb-2 text-[1.15rem]">{p.title}</h3>
              <p className="text-[0.96rem] text-foreground-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
