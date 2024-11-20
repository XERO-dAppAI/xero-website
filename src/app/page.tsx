import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Features } from "@/sections/Features";
import { Pricing } from "@/sections/Pricing";
import { HowItWorks } from "@/sections/HowItWorks";
import { Analytics } from "@/sections/Analytics";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Integrations } from "@/sections/Integrations";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Integrations />  
      <Pricing />
      <HowItWorks />
      <Features />
      <Analytics />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
