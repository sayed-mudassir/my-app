import { getPricingPackages } from "@/lib/getPricingPackages"
import PricingClient from "@/components/PricingClient"

export const metadata = {
  title: "Pricing | Sculptrix Agency",
  description: "Explore our flexible pricing packages designed to help your brand grow.",
}

// ✅ Make this an async Server Component
export default async function PricingPage() {
  const packages = await getPricingPackages()

  // ✅ Sort by numeric value before sending to client
  const sortedPackages = packages.sort((a, b) => a.priceValue - b.priceValue)

  return <PricingClient packages={sortedPackages} />
}
