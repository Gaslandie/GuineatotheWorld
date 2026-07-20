import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import TrustBar from "@/components/home/TrustBar";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUs from "@/components/home/WhyUs";
import Founder from "@/components/home/Founder";
import Testimonials from "@/components/home/Testimonials";
import GallerySection from "@/components/home/GallerySection";
import FinalCta from "@/components/home/FinalCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <ScrollReveal />
      <SiteHeader lang={lang} dict={dict} />
      <main>
        <Hero lang={lang} dict={dict} />
        <Ticker dict={dict} />
        <TrustBar dict={dict} />
        <ServicesSection lang={lang} dict={dict} />
        <WhyUs dict={dict} />
        <Founder dict={dict} />
        <Testimonials dict={dict} />
        <GallerySection lang={lang} dict={dict} />
        <FinalCta lang={lang} dict={dict} />
      </main>
      <SiteFooter lang={lang} dict={dict} />
      <WhatsAppFloat />
    </>
  );
}
