import { BrandMark } from "@/components/BrandMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-14 pb-10">
      <div className="wrap flex flex-col items-start justify-between gap-6 sm:flex-row sm:flex-wrap sm:gap-[30px]">
        <div>
          <BrandMark size="lg" />
          <div className="mt-2 max-w-[52ch] text-[0.86rem] leading-[1.7] text-foreground-soft">
            Hotels, cruises &amp; flights, planned with an insider's eye.
          </div>
        </div>
        <div className="flex gap-[18px] text-[0.9rem]">
          <a
            href="https://instagram.com/jetsettravelco_"
            target="_blank"
            rel="noopener"
            className="text-foreground-soft hover:text-gold-deep"
          >
            Instagram
          </a>
          <a href="mailto:hello@jetsettravelco.com" className="text-foreground-soft hover:text-gold-deep">
            Email
          </a>
        </div>
      </div>
      <div className="wrap">
        <div className="mt-[30px] border-t border-border pt-6 text-[0.8rem] leading-[1.7] text-foreground-soft">
          Jet Set Travel Co. is an independent travel advisor operating as part of Fora Travel,
          Inc., a registered Seller of Travel. Bookings are made through Fora's platform and are
          subject to Fora's{" "}
          <a
            href="https://www.foratravel.com/legal/terms-of-use"
            target="_blank"
            rel="noopener"
            className="underline"
          >
            terms of use
          </a>{" "}
          and applicable supplier terms.
        </div>
      </div>
    </footer>
  );
}
