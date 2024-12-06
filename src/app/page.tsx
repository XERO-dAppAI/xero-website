import { Header } from "@/sections/Header";
import { Xero } from "@/sections/Xero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { SecurityFeatures } from "@/sections/SecurityFeatures";
import { FlowingText } from "@/sections/FlowingText";
import { Integrations } from "@/sections/Integrations";
import { HowItWorks } from "@/sections/HowItWorks";
import { Features } from "@/sections/Features";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Gaming } from "@/sections/Gaming";
import { FAQ } from "@/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Xero />
      <LogoTicker />
      <ProductShowcase />
      <Integrations /> 
      <HowItWorks />
      <Gaming />
      <Features />
      <FlowingText />
      <SecurityFeatures />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}
