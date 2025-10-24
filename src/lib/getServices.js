import fs from "fs";
import path from "path";
import matter from "gray-matter";

const servicesDir = path.join(process.cwd(), "content/services");

export function getAllServices() {
  if (!fs.existsSync(servicesDir)) return [];

  const files = fs.readdirSync(servicesDir);
  return files
    .map((filename) => {
      const filePath = path.join(servicesDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        ...data,
        slug: filename.replace(".md", ""),
        content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getServiceBySlug(slug) {
  const filePath = path.join(servicesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return { ...data, slug, content };
}
