import type { Goat } from "@/types";
import { images } from "@/data/images";

export const goats: Goat[] = [
  {
    id: "1",
    label: "Premium Breeding Buck",
    image: images.goatPortrait,
    breed: "Black Bengal",
    age: "18–24 months",
    weight: "28–32 kg",
    healthStatus: "Excellent",
    vaccinationStatus: "Fully Vaccinated",
    featured: true,
    description:
      "Select breeding buck with strong frame, active temperament, and documented health records.",
  },
  {
    id: "2",
    label: "Adult Doe — Breeding Quality",
    image: images.goatClose,
    breed: "Black Bengal",
    age: "14–18 months",
    weight: "24–28 kg",
    healthStatus: "Excellent",
    vaccinationStatus: "Fully Vaccinated",
    featured: true,
    description:
      "Healthy adult doe suited for breeding programs or quality meat production.",
  },
  {
    id: "3",
    label: "Young Buck",
    image: images.goatYoung,
    breed: "Black Bengal",
    age: "10–14 months",
    weight: "20–25 kg",
    healthStatus: "Good",
    vaccinationStatus: "Fully Vaccinated",
    featured: true,
    description:
      "Growing male with good conformation and steady weight gain on farm ration.",
  },
  {
    id: "4",
    label: "Kid (8–12 months)",
    image: images.goatGrazing,
    breed: "Black Bengal",
    age: "8–12 months",
    weight: "18–22 kg",
    healthStatus: "Excellent",
    vaccinationStatus: "Fully Vaccinated",
    featured: false,
    description:
      "Young stock raised on pasture and balanced feed under daily farm supervision.",
  },
  {
    id: "5",
    label: "Mature Breeding Buck",
    image: images.goatField,
    breed: "Black Bengal",
    age: "24+ months",
    weight: "30–35 kg",
    healthStatus: "Excellent",
    vaccinationStatus: "Fully Vaccinated",
    featured: false,
    description:
      "Proven mature buck for breeders seeking established livestock with farm records.",
  },
  {
    id: "6",
    label: "Adult Doe",
    image: images.goatBrown,
    breed: "Black Bengal",
    age: "12–16 months",
    weight: "22–26 kg",
    healthStatus: "Good",
    vaccinationStatus: "Fully Vaccinated",
    featured: false,
  },
  {
    id: "7",
    label: "Breeding Pair Candidate",
    image: images.goatFarm,
    breed: "Black Bengal",
    age: "16–20 months",
    weight: "26–30 kg",
    healthStatus: "Excellent",
    vaccinationStatus: "Fully Vaccinated",
    featured: false,
    description:
      "Well-maintained stock from our Mayapur farm — ideal for expanding a small herd.",
  },
  {
    id: "8",
    label: "Farm-Raised Doe",
    image: images.goatWhite,
    breed: "Black Bengal",
    age: "18–22 months",
    weight: "24–29 kg",
    healthStatus: "Excellent",
    vaccinationStatus: "Fully Vaccinated",
    featured: false,
    description:
      "Docile, farm-raised doe with consistent feeding and routine veterinary checks.",
  },
];

export const featuredGoats = goats.filter((g) => g.featured);
