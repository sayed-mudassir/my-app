// app/pricing/page.js
import { getPricingPackages } from "@/lib/getPricingPackages"
import PricingClient from "@/components/PricingClient"

export const metadata = {
  title: "Pricing | Sculptrix Agency",
  description: "Explore our flexible pricing packages designed to help your brand grow.",
}

export default function PricingPage() {
  const packages = getPricingPackages()

  return <PricingClient packages={packages} />
}
