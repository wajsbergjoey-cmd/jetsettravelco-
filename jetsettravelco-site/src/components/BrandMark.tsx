type Props = {
  /** compact = smaller mark + tighter wordmark (used in nav when scrolled) */
  size?: "sm" | "md" | "lg";
  /** hide the wordmark on very small screens */
  responsive?: boolean;
  tagline?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: "h-9 w-9", name: "text-[0.95rem]", gap: "gap-2.5" },
  md: { mark: "h-11 w-11", name: "text-[1.05rem]", gap: "gap-3" },
  lg: { mark: "h-14 w-14", name: "text-[1.25rem]", gap: "gap-3.5" },
} as const;

/** Espresso circle with a gold plane — the Jet Set mark. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-primary shadow-[inset_0_0_0_1px_rgba(201,162,77,0.35),0_4px_14px_-6px_rgba(46,32,19,0.55)] transition-all duration-300 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[52%] w-[52%] -translate-x-[4%] translate-y-[2%] text-gold"
        fill="currentColor"
      >
        <path d="M21.6 3.4a.9.9 0 0 0-.94-.2L2.9 9.1a.9.9 0 0 0 .03 1.7l6.62 2.36 2.36 6.62a.9.9 0 0 0 .86.6h.02a.9.9 0 0 0 .84-.63L21.8 4.33a.9.9 0 0 0-.2-.93ZM9.4 11.8l-4.7-1.67 12.4-3.93-7.7 5.6Zm3.32 5.68-1.67-4.7 5.6-7.7-3.93 12.4Z" />
      </svg>
    </span>
  );
}

export function BrandMark({
  size = "md",
  responsive = false,
  tagline = false,
  className = "",
}: Props) {
  const s = sizes[size];
  return (
    <span className={`flex items-center ${s.gap} ${className}`}>
      <LogoMark className={s.mark} />
      <span
        className={`${responsive ? "hidden xs:flex" : "flex"} flex-col leading-none`}
      >
        <span
          className={`font-display ${s.name} font-semibold tracking-[0.14em] text-foreground uppercase`}
        >
          Jet Set
        </span>
        <span className="mt-[3px] text-[0.58rem] font-medium uppercase tracking-[0.34em] text-gold-deep">
          Travel Co.
        </span>
        {tagline && (
          <span className="mt-2 text-[0.72rem] tracking-[0.16em] text-foreground-soft uppercase">
            Hotels · Cruises · Flights
          </span>
        )}
      </span>
    </span>
  );
}
