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

type BlogLocaleFields = Pick<
  BlogPost,
  "title" | "excerpt" | "content" | "category" | "author" | "readTime"
>;

const blogBnBySlug: Record<string, BlogLocaleFields> = {
  "black-bengal-goat-feeding-guide": {
    title: "ব্ল্যাক বেঙ্গল ছাগলের সম্পূর্ণ খাদ্য গাইড",
    excerpt:
      "সুস্থ ও উৎপাদনশীল ছাগলের জন্য আদর্শ খাদ্য, সময়সূচি ও পুষ্টির চাহিদা জানুন।",
    category: "Feeding",
    author: "অর্শু অ্যাগ্রো ফার্মস দল",
    readTime: "৮ মিনিট",
    content: `ব্ল্যাক বেঙ্গল ছাগল ভারসাম্যপূর্ণ খাদ্যে ভালো থাকে — সবুজ খাদ্য, কনসেন্ট্রেট ও খনিজ। বাচ্চাদের বেশি প্রোটিন, প্রাপ্তবয়স্কদের ঘূর্ণন চারণ উপকারী।

**সকাল:** তাজা সবুজ খাদ্য (নেপিয়ার, বারসীম) + প্রাপ্তবয়স্ক প্রতি ২০০–৩০০ গ্রাম কনসেন্ট্রেট।

**সন্ধ্যা:** শুকনো খাদ্য ও খনিজ সম্পূরক। সবসময় পরিষ্কার পানি।

**মৌসুমি:** বর্ষায় সবুজ খাদ্য কিছু কমান, শুকনো বাড়ান। শীতে শক্তিজাতীয় সম্পূরক।

মাসে একবার শরীরের অবস্থা দেখে খাদ্য ঠিক করুন। অতিরিক্ত খাদ্য স্থূলতা ও প্রজনন সমস্যা আনে।`,
  },
  "goat-vaccination-schedule": {
    title: "খামার ছাগলের প্রয়োজনীয় টিকা সময়সূচি",
    excerpt: "PPR, FMD সহ গুরুত্বপূর্ণ টিকার সম্পূর্ণ সময়রেখা।",
    category: "Health",
    author: "খামার পশুচিকিৎসক দল",
    readTime: "৬ মিনিট",
    content: `টিকা পালের স্বাস্থ্যের ভিত্তি। এই সময়সূচি মেনে চলুন:

**বাচ্চা (০–৩ মাস):** ৩ মাসে PPR, ২১ দিন পর বুস্টার।

**প্রাপ্তবয়স্ক (বার্ষিক):** PPR ও FMD — বর্ষার আগে ideal।

**কৃমিনাশক:** প্রতি ৩ মাস, ওষুধের শ্রেণি ঘোরান।

প্রতিটি পশুর টিকা রেকর্ড রাখুন। আমাদের খামারে ডিজিটাল রেকর্ড প্রস্তুত।

স্থানীয় পশুচিকিৎসকের পরামর্শ নিন।`,
  },
  "selective-breeding-black-bengal": {
    title: "ব্ল্যাক বেঙ্গলের নির্বাচিত প্রজনন কৌশল",
    excerpt: "ছাগল নির্বাচন, জোড় মিল ও বাচ্চা দেওয়া ব্যবস্থাপনায় জিনগত মান বাড়ান।",
    category: "Breeding",
    author: "অর্শু অ্যাগ্রো ফার্মস দল",
    readTime: "১০ মিনিট",
    content: `ভালো প্রজনন ভালো জিন দিয়ে শুরু। নথিভুক্ত বংশ, ভালো গঠন, ত্রুটি ছাড়া ছাগল বেছে নিন।

**ছাগলী:** সফল বাচ্চা দেওয়া, ভালো মাতৃত্ব, যমজ সম্ভাবনা।

**বয়স:** ছাগলী ১২–১৪ মাসে প্রথম প্রজনন; ছাগল ১০–১২ মাস।

**অনুপাত:** নিয়ন্ত্রিত কর্মসূচিতে এক ছাগল ২৫–৩০ ছাগলী।

**বাচ্চা দেওয়া:** পরিষ্কার পেন, জটিলতা পর্যবেক্ষণ, ২ ঘণ্টার মধ্যে কলোস্ট্রাম।

অর্শু অ্যাগ্রো ফার্মসে প্রতিটি জোড়ার রেকর্ড রাখা হয়।`,
  },
  "starting-goat-farm-beginners": {
    title: "ছাগল খামার শুরু: নতুনদের গাইড",
    excerpt: "জমি থেকে প্রথম কেনা — ভারতে সফল ছাগল খামারের রোডম্যাপ।",
    category: "Guides",
    author: "অর্শু অ্যাগ্রো ফার্মস দল",
    readTime: "১২ মিনিট",
    content: `পরিকল্পনা, মূলধন ও জ্ঞান দরকার:

**১. জমি ও আশ্রয়:** ঘরে প্রতি ছাগল ১৫–২০ বর্গফুট, বাইরে চারণ, বাতাস ও নিকাশি।

**২. প্রথম পাল:** বিশ্বস্ত খামার থেকে ৫–১০ মানসম্পন্ন ছাগল। পশ্চিমবঙ্গে ব্ল্যাক বেঙ্গল ideal।

**৩. লাইসেন্স:** পঞ্চায়েত ও পশুপালন বিভাগের নিয়ম দেখুন।

**৪. বাজেট:** খাদ্য ৬০%, স্বাস্থ্য ১৫%, আশ্রয় ১৫%, জরুরি ১০%।

**৫. বাজার:** বাড়ানোর আগে ক্রেতা চিহ্নিত করুন।

অর্শু অ্যাগ্রো ফার্মস পরিদর্শন করে শিখুন।`,
  },
  "monsoon-goat-health-tips": {
    title: "বর্ষায় ছাগল সুস্থ রাখা",
    excerpt: "আশ্রয়, খাদ্য ও পরিচ্ছন্নতায় বর্ষাকালীন রোগ প্রতিরোধ।",
    category: "Health",
    author: "অর্শু অ্যাগ্রো ফার্মস দল",
    readTime: "৭ মিনিট",
    content: `বর্ষায় আর্দ্রতা চ্যালেঞ্জ আনে:

**আশ্রয়:** উঁচু মেঝে, জলরোধী ছাদ, নিকাশি — পা পচা ও নিউমোনিয়া কমায়।

**খাদ্য:** শুকনো খাদ্য সঠিকভাবে রাখুন। ভারী বৃষ্টিতে সবুজ কমান।

**পরিচ্ছন্নতা:** দৈনিক পরিষ্কার, পা ডুবানো, শুকনো বিছানা।

**রোগ:** নিউমোনিয়া, এন্টারোটক্সিমিয়া, পরজীবী — বর্ষার আগে টিকা।

**পুষ্টি:** আবহাওয়ার চাপে ভিটামিন সম্পূরক।`,
  },
  "profitable-goat-farming-india": {
    title: "ভারতে লাভজনক ছাগল পালন",
    excerpt: "আয়ের উৎস, খরচ নিয়ন্ত্রণ ও টেকসই ব্যবসা বাড়ানোর কৌশল।",
    category: "Guides",
    author: "অর্শু অ্যাগ্রো ফার্মস দল",
    readTime: "৯ মিনিট",
    content: `লাভ একাধিক উৎস থেকে:

**মাংস:** ঈদ, দুর্গাপূজায় ভালো দাম।

**প্রজনন স্টক:** মাংসের ৩–৫ গুণ দাম।

**দুধ:** ব্ল্যাক বেঙ্গল মাংস-কেন্দ্রিক, কিছু দুগ্ধ পণ্য আয় যোগায়।

**খরচ:** নিজে খাদ্য, বাল্ক কিনুন, প্রতিরোধমূলক স্বাস্থ্য।

**বুদ্ধিমত্তা:** চাহিদা ও ব্যবস্থাপনা মতো পাল বাড়ান।

প্রতিটি খরচ-বিক্রয় ট্র্যাক করুন।`,
  },
};

export function getBlogPosts(locale: string): BlogPost[] {
  return blogPosts.map((post) => {
    if (locale !== "bn") return post;
    const bn = blogBnBySlug[post.slug];
    if (!bn) return post;
    return { ...post, ...bn };
  });
}

export function getBlogPostBySlug(
  slug: string,
  locale: string
): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}
