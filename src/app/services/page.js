import Services from "@/components/Services";
import { getAllServices } from "@/lib/getServices";

export const metadata = {
  title: "Services | Sculptrix Agency",
  description: "Explore our wide range of web development and digital services.",
};

export default function ServicesPage() {
  const services = getAllServices();
  return <Services services={services} />;
}
