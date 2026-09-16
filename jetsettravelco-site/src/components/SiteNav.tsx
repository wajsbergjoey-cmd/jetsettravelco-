import { useEffect, useState } from "react";

import { BrandMark } from "@/components/BrandMark";
import { useConsult } from "@/components/ConsultPanel";

const links = [
  { href: "#services", label: "Services" },
  { href: "#perks", label: "Perks" },
  { href: "#trips", label: "Recent trips" },
  { href: "#reviews", label: "Reviews" },
  { href: "#consult", label: "Contact" },
];

export function SiteNav() {
  const { open: openConsult } = useConsult();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-[rgba(245,237,225,0.92)] shadow-[0_10px_30px_-24px_rgba(46,32,19,0.7)] backdrop-blur-[10px]"
          : "border-transparent bg-[rgba(245,237,225,0.72)] backdrop-blur-[6px]"
      }`}
    >
      <div className="wrap flex h-[74px] items-center justify-between">
        <a
          href="#top"
          className="relative flex items-center"
          aria-label="Jet Set Travel Co. — home"
        >
          <BrandMark size={scrolled ? "sm" : "md"} responsive />
        </a>

        <div className="hidden gap-[30px] text-[0.92rem] text-foreground-soft md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "true" : undefined}
              className={`nav-link ${active === l.href ? "nav-link-active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openConsult}
            className="hidden rounded-[3px] bg-primary px-5 py-[10px] text-[0.88rem] tracking-[0.01em] text-primary-foreground transition-colors hover:bg-gold-deep sm:inline-block"
          >
            Book a consult
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-border text-foreground md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth={1.6}>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-[3px] px-1 py-3 text-[1rem] text-foreground-soft hover:text-gold-deep"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openConsult();
              }}
              className="mt-2 rounded-[3px] bg-primary px-5 py-3 text-center text-[0.95rem] text-primary-foreground"
            >
              Book a consult
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
