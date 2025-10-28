// src/app/pricing/[slug]/page.js
import { getPricingPackages, getPricingPackage } from "@/lib/getPricingPackages"
import PricingDetailsClient from "@/components/PricingDetailsClient"

export async function generateStaticParams() {
  const packages = await getPricingPackages()
  return packages.map((pkg) => ({ slug: pkg.slug }))
}

export default async function PricingDetailsPage({ params }) {
  const pkg = await getPricingPackage(params.slug)
  return <PricingDetailsClient pkg={pkg} />
}
