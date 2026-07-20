import { WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig, whatsappLink } from "@/lib/site";

/** Bouton WhatsApp flottant, visible en permanence en bas à droite. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(siteConfig.whatsapp.guinea)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-7 right-7 z-[100] flex h-[62px] w-[62px] animate-[floatPulse_3s_ease-in-out_infinite] items-center justify-center rounded-full bg-wa text-white shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-colors hover:bg-wa-fonce"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
