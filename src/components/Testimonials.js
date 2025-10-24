"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "Interior Designer",
    feedback:
      "Sculptrix helped me scale my brand presence on social media. Their strategies boosted my engagement and conversions!",
    image: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg", // replace with your image
  },
  {
    name: "Rahul Mehta",
    role: "Restaurant Owner",
    feedback:
      "The team not only built a stunning website but also managed my ads, bringing in more leads than ever before.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    name: "Sophia Khan",
    role: "Fashion Entrepreneur",
    feedback:
      "They truly understand modern marketing. From creative design to execution, everything felt effortless.",
    image: "https://images.pexels.com/photos/8350511/pexels-photo-8350511.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          We’ve helped businesses grow and thrive with our strategies.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {testimonial.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </span>
                <p className="mt-4 text-gray-600 dark:text-gray-300 italic">
                  “{testimonial.feedback}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}