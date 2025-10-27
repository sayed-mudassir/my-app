import fs from "fs"
import path from "path"
import matter from "gray-matter"

const pricingDir = path.join(process.cwd(), "content/pricing")

export async function getPricingPackages() {
  if (!fs.existsSync(pricingDir)) return [] // safety check

  const files = fs.readdirSync(pricingDir).filter((file) => file.endsWith(".md"))

  const packages = files.map((filename) => {
    const filePath = path.join(pricingDir, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    // Extract numeric value for price sorting (like ₹9,999 → 9999)
    const numericPrice = Number(data.price.replace(/[^0-9.]/g, "")) || 0

    return {
      slug: filename.replace(".md", ""),
      priceValue: numericPrice,
      ...data,
    }
  })

  return Array.isArray(packages) ? packages : []
}
