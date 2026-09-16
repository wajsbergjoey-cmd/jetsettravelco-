import amalfi from "@/assets/amalfi.jpg.asset.json";
import cancun from "@/assets/cancun.jpg.asset.json";
import maui from "@/assets/maui.jpg.asset.json";
import turks from "@/assets/turks.jpg.asset.json";
import { Reveal } from "@/components/Reveal";

const tiles = [
  { label: "Maui, Hawaii", url: maui.url, position: "center" },
  { label: "Amalfi Coast", url: amalfi.url, position: "center 78%" },
  { label: "Cancun", url: cancun.url, position: "center 68%" },
  { label: "Turks & Caicos", url: turks.url, position: "center 40%" },
];

export function RecentTrips() {
  return (
    <section id="trips" className="bg-card py-[68px] sm:py-24">
      <div className="wrap">
        <Reveal className="mb-8 flex flex-wrap items-baseline justify-between gap-[14px] sm:mb-11">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)]">Recent trips</h2>
          <div className="max-w-[34ch] text-[0.96rem] text-foreground-soft">
            A few of the places clients have landed this year.
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-[10px] sm:gap-[14px] min-[900px]:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 90}>
              <figure className="tile-overlay group relative flex h-[168px] items-end overflow-hidden rounded-[3px] p-3 sm:h-[240px] sm:p-4 min-[900px]:h-[300px]">
                <img
                  src={t.url}
                  alt={`${t.label} — recent client trip`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  style={{ objectPosition: t.position }}
                />
                <figcaption className="relative z-[2] font-display text-[0.9rem] text-cream italic sm:text-[1rem]">
                  {t.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
