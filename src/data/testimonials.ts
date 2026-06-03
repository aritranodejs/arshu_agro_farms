import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Mukherjee",
    role: "Livestock Farmer",
    location: "Nadia, West Bengal",
    content:
      "I purchased 12 Black Bengal goats from Arshu Agro Farms last year. Every animal arrived healthy with complete vaccination records. Their after-sale guidance on feeding and shelter made a real difference — my herd has grown strong and disease-free.",
    rating: 5,
    featured: true,
  },
  {
    id: "2",
    name: "Priya Das",
    role: "Small Business Owner",
    location: "Kolkata, West Bengal",
    content:
      "As a first-time goat buyer, I was nervous about making the right choice. The team at Arshu Agro Farms patiently answered all my questions and invited me for a farm visit. I left confident and happy with my purchase of two breeding does.",
    rating: 5,
    featured: true,
  },
  {
    id: "3",
    name: "Abdul Rahman",
    role: "Breeder",
    location: "Murshidabad, West Bengal",
    content:
      "The breeding stock quality here is exceptional. I've been farming goats for 15 years, and Arshu Agro Farms maintains standards I rarely see. Their selective breeding program and transparent genetics documentation are top-notch.",
    rating: 5,
    featured: true,
  },
  {
    id: "4",
    name: "Sunita Banerjee",
    role: "Homestead Farmer",
    location: "Howrah, West Bengal",
    content:
      "We started our small homestead with four goats from Arshu Agro Farms. Two years later, we have a thriving mini-farm. Their sustainable practices and genuine care for animal welfare align perfectly with our values.",
    rating: 5,
    featured: false,
  },
  {
    id: "5",
    name: "Mohammad Ali",
    role: "Meat Supplier",
    location: "Bardhaman, West Bengal",
    content:
      "Consistent quality is what I need for my business, and Arshu Agro Farms delivers every time. The goats are well-fed, properly vaccinated, and arrive in excellent condition. Highly recommended for commercial buyers.",
    rating: 4,
    featured: false,
  },
  {
    id: "6",
    name: "Ananya Ghosh",
    role: "Agricultural Entrepreneur",
    location: "Siliguri, West Bengal",
    content:
      "I visited the farm before investing in breeding stock and was impressed by the clean facilities, organized records, and knowledgeable staff. Arshu Agro Farms is building something special in West Bengal's livestock sector.",
    rating: 5,
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
