import type { BlogPost } from "@/types";
import { images } from "@/data/images";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "black-bengal-goat-feeding-guide",
    title: "Complete Feeding Guide for Black Bengal Goats",
    excerpt:
      "Learn the optimal diet, feeding schedules, and nutritional requirements to keep your Black Bengal goats healthy and productive.",
    content: `Black Bengal goats thrive on a balanced diet of green fodder, concentrates, and minerals. Young kids require higher protein intake, while adult goats benefit from rotational grazing.

**Morning Routine:** Fresh green fodder (napier grass, berseem) combined with 200-300g concentrate per adult goat.

**Evening Routine:** Dry fodder with mineral supplements. Always provide clean drinking water.

**Seasonal Adjustments:** During monsoon, reduce green fodder slightly and increase dry feed to prevent digestive issues. In winter, add energy-rich supplements.

Monitor body condition score monthly and adjust portions accordingly. Overfeeding leads to obesity and breeding complications.`,
    category: "Feeding",
    author: "Arshu Agro Farms Team",
    publishedAt: "2025-11-15",
    readTime: "8 min",
    image: images.blogFeeding,
    tags: ["feeding", "nutrition", "black bengal"],
  },
  {
    id: "2",
    slug: "goat-vaccination-schedule",
    title: "Essential Vaccination Schedule for Farm Goats",
    excerpt:
      "Protect your herd with this comprehensive vaccination timeline covering PPR, FMD, and other critical immunizations.",
    content: `Vaccination is the cornerstone of herd health management. Follow this schedule for optimal protection:

**Kids (0-3 months):** PPR vaccine at 3 months. Booster after 21 days.

**Adults (Annual):** PPR and FMD vaccines annually, ideally before monsoon season.

**Deworming:** Every 3 months with rotation of anthelmintic classes to prevent resistance.

Keep detailed vaccination records for each animal. Our farm maintains digital records ready for admin integration.

Consult your local veterinarian for region-specific requirements.`,
    category: "Health",
    author: "Dr. Farm Veterinary Team",
    publishedAt: "2025-10-28",
    readTime: "6 min",
    image: images.blogHealth,
    tags: ["vaccination", "health", "prevention"],
  },
  {
    id: "3",
    slug: "selective-breeding-black-bengal",
    title: "Selective Breeding Strategies for Black Bengal Goats",
    excerpt:
      "Maximize genetic quality through proven selective breeding techniques, buck selection, and kidding management.",
    content: `Successful breeding starts with superior genetics. Select bucks with documented lineage, good body conformation, and no genetic defects.

**Doe Selection:** Choose does with history of successful kidding, good mothering ability, and twinning potential.

**Breeding Age:** First breeding at 12-14 months for does. Bucks can start at 10-12 months.

**Mating Ratio:** One quality buck per 25-30 does in controlled breeding programs.

**Kidding Management:** Prepare clean kidding pens, monitor for complications, and ensure colostrum intake within 2 hours of birth.

At Arshu Agro Farms, we maintain breeding records for every pairing — ready for future admin dashboard integration.`,
    category: "Breeding",
    author: "Arshu Agro Farms Team",
    publishedAt: "2025-09-12",
    readTime: "10 min",
    image: images.blogBreeding,
    tags: ["breeding", "genetics", "selection"],
  },
  {
    id: "4",
    slug: "starting-goat-farm-beginners",
    title: "How to Start a Goat Farm: Beginner's Guide",
    excerpt:
      "From land selection to first purchase — everything you need to launch a successful goat farming business in India.",
    content: `Starting a goat farm requires planning, capital, and knowledge. Here's a practical roadmap:

**1. Land & Shelter:** Minimum 15-20 sq ft per goat indoors, with outdoor grazing area. Ensure proper ventilation and drainage.

**2. Initial Herd:** Start with 5-10 quality goats from a reputable farm. Black Bengal is ideal for West Bengal's climate.

**3. Licensing:** Check local panchayat and animal husbandry department requirements.

**4. Budget:** Plan for feed (60% of costs), healthcare (15%), shelter (15%), and contingency (10%).

**5. Market:** Identify buyers before scaling — meat, breeding stock, and festival demand.

Visit established farms like Arshu Agro Farms to learn best practices firsthand.`,
    category: "Guides",
    author: "Arshu Agro Farms Team",
    publishedAt: "2025-08-05",
    readTime: "12 min",
    image: images.blogGuide,
    tags: ["beginners", "business", "setup"],
  },
  {
    id: "5",
    slug: "monsoon-goat-health-tips",
    title: "Keeping Goats Healthy During Monsoon Season",
    excerpt:
      "Prevent common rainy-season diseases with these proven shelter, feeding, and hygiene practices.",
    content: `Monsoon brings humidity-related challenges for goat farmers. Implement these practices:

**Shelter:** Elevated flooring, waterproof roofing, and good drainage prevent foot rot and pneumonia.

**Feed:** Store dry fodder properly. Reduce fresh green fodder during heavy rains.

**Hygiene:** Daily pen cleaning, foot bath with copper sulfate solution, and dry bedding.

**Disease Watch:** Monitor for pneumonia, enterotoxemia, and parasitic infections. Vaccinate before monsoon.

**Nutrition:** Add vitamin supplements to combat stress from weather changes.`,
    category: "Health",
    author: "Arshu Agro Farms Team",
    publishedAt: "2025-07-20",
    readTime: "7 min",
    image: images.blogHealth,
    tags: ["monsoon", "health", "seasonal"],
  },
  {
    id: "6",
    slug: "profitable-goat-farming-india",
    title: "Making Goat Farming Profitable in India",
    excerpt:
      "Revenue streams, cost management, and scaling strategies for a sustainable goat farming business.",
    content: `Profitability in goat farming comes from multiple revenue streams:

**Meat Sales:** Festival seasons (Eid, Durga Puja) command premium prices.

**Breeding Stock:** Quality bucks and does sell at 3-5x meat prices.

**Milk Products:** Though Black Bengal is primarily meat-focused, niche milk products add income.

**Cost Control:** Grow own fodder, bulk purchase concentrates, and maintain preventive healthcare.

**Scale Smart:** Expand herd only when market demand and management capacity support it.

Track every expense and sale — our admin-ready structure will support this digitally soon.`,
    category: "Guides",
    author: "Arshu Agro Farms Team",
    publishedAt: "2025-06-10",
    readTime: "9 min",
    image: images.blogGuide,
    tags: ["profit", "business", "india"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
