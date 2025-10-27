import Image from "next/image";
import ScrollHero from "@/components/ScrollHero";
import Demo from "@/components/demo";
import Services from "@/components/Services"
import { getAllServices } from "@/lib/getServices";
import ThreeAnimeScene from "@/components/ThreeAnimeScene";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection"
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Services | Sculptrix Agency",
  description: "Explore our wide range of web development and digital services.",
};

export default function Home() {

  const services = getAllServices();


  return (
    <main>
    
    <ScrollHero/>
    {/*<HeroSection/>
      <Demo/>
        <ThreeAnimeScene/>*/}
    <Services services={services} />
    <Testimonials/>
    <ContactPage />
    </main>
  );
}
