import OnThisPage from "@/components/onthispage"
import { getServiceBySlug, getAllServices } from "@/lib/getServices";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = getServiceBySlug(slug);

  if (!service) return <p>Service not found!</p>;

  // 🧩 Markdown → HTML Processing Pipeline
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: service.title })
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
    })
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeStringify);

  const htmlContent = (await processor.process(service.content)).toString();

  return (
    <div className="max-w-6xl mx-auto p-4 md:px-8">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic max-w-xl">
        &quot;{service.description || "Explore our specialized service in detail."}&quot;
      </p>

      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {service.author}</p>
        <p className="text-sm text-gray-500 mb-4">{service.date}</p>
      </div>

      <img
        src={service.image}
        alt={service.title}
        className="w-2/3 h-2/3 object-cover mb-6 rounded-lg"
      />

      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      ></div>

      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
}
