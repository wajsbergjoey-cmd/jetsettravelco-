import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { CONSULT_URL } from "@/lib/site";

type ConsultContextValue = { open: () => void; close: () => void; isOpen: boolean };

const ConsultContext = createContext<ConsultContextValue | null>(null);

export function useConsult() {
  const ctx = useContext(ConsultContext);
  if (!ctx) throw new Error("useConsult must be used inside <ConsultProvider>");
  return ctx;
}

const steps = [
  {
    title: "Tell me about the trip",
    body: "Where you're headed, rough dates, who's travelling, and the budget you have in mind.",
  },
  {
    title: "I come back with real options",
    body: "Hand-picked hotels, sailings, or routings — with the upgrades and credits attached.",
  },
  {
    title: "You approve, I book",
    body: "Nothing is charged through me. Same rates as booking direct, handled properly.",
  },
];

function openBookingPopup() {
  const w = Math.min(600, Math.max(360, window.screen.availWidth - 32));
  const h = Math.min(820, Math.max(600, window.screen.availHeight - 64));
  const left = Math.max(0, Math.round(window.screenX + (window.outerWidth - w) / 2));
  const top = Math.max(0, Math.round(window.screenY + (window.outerHeight - h) / 2));
  const win = window.open(
    "about:blank",
    "jetset-consult",
    `popup=yes,width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`,
  );
  if (!win) return null;

  // Opening the sized window first makes browsers treat this as a real popup,
  // rather than converting the cross-origin destination into a new tab.
  win.location.replace(CONSULT_URL);
  win.focus();
  return win;
}

function Panel({ onClose }: { onClose: () => void }) {
  const [launched, setLaunched] = useState(false);
  const [popupBlocked, setPopupBlocked] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Book a consultation">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-[rgba(24,15,10,0.55)] backdrop-blur-[2px] motion-safe:animate-in motion-safe:fade-in"
      />
      <aside
        className="absolute inset-y-0 right-0 flex w-full max-w-[460px] flex-col overflow-y-auto overscroll-contain bg-background shadow-[0_0_80px_-20px_rgba(24,15,10,0.7)] motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-300"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background px-6 py-4 sm:px-7 sm:py-5">
          <span className="kicker mb-0">Free consultation</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-soft transition-colors hover:text-gold-deep"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={1.8}>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col px-6 py-7 sm:px-7 sm:py-8">
          <h2 className="text-[1.55rem] leading-[1.15] sm:text-[1.8rem]">Let's plan your trip.</h2>
          <p className="mt-3 text-[0.95rem] text-foreground-soft sm:mt-4 sm:text-[0.98rem]">
            The consult is free and takes about fifteen minutes. Here's exactly how it goes.
          </p>

          <ol className="mt-7 flex list-none flex-col gap-5 p-0 sm:mt-8 sm:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="badge-gradient mt-[2px] flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[0.9rem] text-cream">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-display text-[1.05rem]">{s.title}</span>
                  <span className="mt-1 block text-[0.92rem] text-foreground-soft">{s.body}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-auto pt-8 sm:pt-10">
            <button
              type="button"
              onClick={() => {
                const win = openBookingPopup();
                setPopupBlocked(!win);
                if (win) setLaunched(true);
              }}
              className="block w-full rounded-[3px] bg-primary px-6 py-4 text-center text-[0.98rem] text-primary-foreground transition-colors hover:bg-gold-deep"
            >
              {launched ? "Reopen the booking window" : "Continue to the booking form"}
            </button>
            <p className="mt-3 text-center text-[0.8rem] text-foreground-soft">
              {popupBlocked
                ? "Your browser blocked the booking window. Allow pop-ups for this site, then try again."
                : launched
                ? "The secure form opened in a small window over this page — I'm right here when you're done."
                : "Opens Fora's secure form in a small window over this page — you never leave my site."}
            </p>
            <a
              href="mailto:hello@jetsettravelco.com"
              className="mt-4 block text-center text-[0.88rem] text-foreground-soft underline hover:text-gold-deep"
            >
              Or just email me instead
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export function ConsultProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <ConsultContext.Provider value={value}>
      {children}
      {isOpen && <Panel onClose={close} />}
    </ConsultContext.Provider>
  );
}
