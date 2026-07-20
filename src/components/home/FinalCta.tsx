import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig, whatsappLink } from "@/lib/site";

/** Appel final : WhatsApp + contact sur fond nuit avec cercles décoratifs. */
export default function FinalCta({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="contact" className="relative overflow-hidden bg-nuit">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#D8A818,transparent)]" />
      {/* Cercles décoratifs centrés */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(216,168,24,0.14)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(216,168,24,0.1)]" />

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center gap-7 px-6 py-24 text-center sm:px-10 sm:py-[150px]">
        <span className="text-[12px] font-semibold uppercase tracking-[5px] text-or">
          {dict.finalCta.kicker}
        </span>
        <h2 className="m-0 text-balance font-serif text-[clamp(40px,6vw,80px)] font-normal leading-[1.05] text-creme">
          {dict.finalCta.title1}{" "}
          <em className="text-or">{dict.finalCta.titleEm}</em>
        </h2>
        <p className="m-0 max-w-[520px] text-[17px] font-light leading-[1.75] text-[rgba(250,247,240,0.75)]">
          {dict.finalCta.body}
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-5">
          <a
            href={whatsappLink(siteConfig.whatsapp.guinea)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 whitespace-nowrap rounded-full bg-wa px-7 py-[17px] text-[13px] font-semibold uppercase tracking-[2px] text-white hover:-translate-y-[3px] hover:bg-wa-fonce sm:px-10"
          >
            <WhatsAppIcon size={18} /> WhatsApp
          </a>
          <Link
            href={`/${lang}/contact`}
            className="whitespace-nowrap rounded-full bg-rouge px-7 py-[17px] text-[13px] font-semibold uppercase tracking-[2px] text-white shadow-[0_16px_44px_rgba(168,0,0,0.4)] hover:-translate-y-[3px] hover:bg-rouge-vif sm:px-10"
          >
            {dict.finalCta.btn}
          </Link>
        </div>

        <div className="mt-[18px] flex flex-col items-center gap-3 text-[14px] font-light text-[rgba(250,247,240,0.6)] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-9">
          <a
            href="tel:+224623655468"
            className="text-[rgba(250,247,240,0.6)] hover:text-or"
          >
            {siteConfig.phones.guinea}
          </a>
          <span className="hidden text-[rgba(216,168,24,0.5)] sm:inline">·</span>
          <a
            href="tel:+233531691086"
            className="text-[rgba(250,247,240,0.6)] hover:text-or"
          >
            {siteConfig.phones.ghana}
          </a>
          <span className="hidden text-[rgba(216,168,24,0.5)] sm:inline">·</span>
          <a
            href={`mailto:${siteConfig.emails.primary}`}
            className="text-[rgba(250,247,240,0.6)] hover:text-or"
          >
            {siteConfig.emails.primary}
          </a>
        </div>
      </div>
    </section>
  );
}
