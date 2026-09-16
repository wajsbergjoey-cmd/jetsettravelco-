import heroImg from "@/assets/hero.jpg.asset.json";
import { useConsult } from "@/components/ConsultPanel";

const stats = [
  { value: "Fora", label: "Advisor network" },
  { value: "0", label: "Extra cost to you" },
  { value: "24/7", label: "A real person to call" },
];

export function Hero() {
  const { open } = useConsult();

  return (
    <header
      id="top"
      className="relative flex min-h-[540px] items-end overflow-hidden sm:min-h-[620px] md:min-h-[720px]"
    >
      <img
        src={heroImg.url}
        alt="Cliffside resort infinity pool overlooking the sea at golden hour"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-veil absolute inset-0" aria-hidden="true" />

      <div className="relative z-[2] w-full pt-[104px] pb-[54px] sm:pt-[120px] sm:pb-[70px] md:pt-[160px]">
        <div className="wrap">
          <div className="hero-eyebrow mb-5 inline-flex max-w-full items-center gap-[10px] rounded-full px-3 py-[6px] text-[0.68rem] tracking-[0.12em] text-cream uppercase sm:mb-6 sm:px-4 sm:py-[7px] sm:text-[0.8rem] sm:tracking-[0.14em]">
            <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-amber" />
            <span className="min-w-0 truncate">Travel advisor — hotels, cruises &amp; flights</span>
          </div>
          <h1 className="max-w-[13ch] text-[clamp(2.35rem,8.5vw,4.6rem)] leading-[1.05] font-medium text-cream drop-shadow-[0_2px_24px_rgba(20,12,8,0.35)]">
            Trips planned with taste,{" "}
            <em className="text-[#FDE3B8] italic">booked with an edge.</em>
          </h1>
          <p className="mt-5 max-w-[46ch] text-[1rem] text-[rgba(255,246,235,0.9)] sm:mt-[26px] sm:text-[1.08rem]">
            I plan and book travel the way frequent flyers wish they could do it themselves — with
            the upgrades, credits, and insider knowledge that only come from working an advisor.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <button type="button" className="btn-primary w-full text-center sm:w-auto" onClick={open}>
              Get your free consultation
            </button>
            <a className="btn-ghost w-full text-center sm:w-auto" href="#services">
              See what I book
            </a>
          </div>

          <dl className="mt-9 grid grid-cols-3 gap-x-4 gap-y-5 border-t border-[rgba(255,244,230,0.22)] pt-6 sm:mt-12 sm:flex sm:flex-wrap sm:gap-x-12">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <dt className="font-display text-[1.2rem] text-cream sm:text-[1.5rem]">{s.value}</dt>
                <dd className="text-[0.68rem] tracking-[0.06em] text-[rgba(255,246,235,0.72)] uppercase sm:text-[0.82rem] sm:tracking-[0.08em]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>
  );
}
