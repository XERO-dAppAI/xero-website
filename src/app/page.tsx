import { Header } from "@/sections/Header";
import { Xero } from "@/sections/xero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { SecurityFeatures } from "@/sections/SecurityFeatures";
import { FlowingText } from "@/sections/FlowingText";
import { Integrations } from "@/sections/Integrations";
import { HowItWorks } from "@/sections/HowItWorks";
import { Features } from "@/sections/Features";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Xero />
      <LogoTicker />
      <ProductShowcase />
      <Integrations /> 
      <HowItWorks />
      <Features />
      <FlowingText />
      <SecurityFeatures />
      <CallToAction />
      <Footer />

      
    </>
  );
}
