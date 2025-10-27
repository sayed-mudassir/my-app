import Image from "next/image";
import ScrollHero from "@/components/ScrollHero";
// import Demo from "@/components/demo";
import Services from "@/components/Services"
import { getAllServices } from "@/lib/getServices";
import ThreeAnimeScene from "@/components/ThreeAnimeScene";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection"
import ContactPage from "@/components/ContactPage";
import { getPricingPackages } from "@/lib/getPricingPackages"
import PricingClient from "@/components/PricingClient"
import ExpertiseSection from "@/components/ExpertiseSection"
import WhyChooseUs from "@/components/WhyChooseUs"

export const metadata = {
  title: "Services | Sculptrix Agency",
  description: "Explore our wide range of web development and digital services.",
};

export default async function Home() {

  const services = getAllServices();
  const packages = await getPricingPackages()

  // ✅ Sort by numeric value before sending to client
  const sortedPackages = packages.sort((a, b) => a.priceValue - b.priceValue)

  return (
    <main>
    
    <ScrollHero/>
    <ExpertiseSection/>
    <WhyChooseUs/>
    {/*<HeroSection/>
      <Demo/>
        <ThreeAnimeScene/>*/}
    <Services services={services} />
    <PricingClient packages={sortedPackages} />
    <Testimonials/>
    <ContactPage />
    </main>
  );
}
