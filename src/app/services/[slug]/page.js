import { getServiceBySlug } from "@/lib/getServices";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const { getAllServices } = await import("@/lib/getServices");
  const services = getAllServices();
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return <div className="p-10">Service not found.</div>;

  return (
    <article className="max-w-3xl mx-auto py-16 px-6">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <div className="text-sm mb-6">
        <span>👨‍💻 {service.author}</span> • <span>📅 {service.date}</span>
      </div>

      {/* ✅ Wrap ReactMarkdown inside a styled div instead */}
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-semibold mt-5 mb-3" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-gray-300 leading-relaxed mb-4" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-blue-400 hover:text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
            img: ({ node, ...props }) => (
              <img className="rounded-lg my-6" {...props} />
            ),
          }}
        >
          {service.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
