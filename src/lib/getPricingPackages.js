import fs from "fs"
import path from "path"
import matter from "gray-matter"

const pricingDir = path.join(process.cwd(), "content/pricing")

// ✅ Get all pricing packages (used for list)
export function getPricingPackages() {
  const files = fs.readdirSync(pricingDir)

  const packages = files.map((filename) => {
    const filePath = path.join(pricingDir, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    return {
      slug: filename.replace(".md", ""),
      ...data,
    }
  })

  return packages
}

// ✅ Get single package (used for dynamic details page)
export function getPricingPackage(slug) {
  const filePath = path.join(pricingDir, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    slug,
    ...data,
    content,
  }
}
