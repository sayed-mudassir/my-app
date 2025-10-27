import { getPricingPackages, getPricingPackage } from "@/lib/getPricingPackages"
import PricingDetailsClient from "@/components/PricingDetailsClient"

export async function generateStaticParams() {
  const packages = getPricingPackages()
  return packages.map((pkg) => ({ slug: pkg.slug }))
}

export default function PricingDetailsPage({ params }) {
  const pkg = getPricingPackage(params.slug)
  return <PricingDetailsClient pkg={pkg} />
}
