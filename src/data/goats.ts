import { images } from "@/data/images";

/** Structural goat inventory — labels come from i18n messages */
export function getGoatStockData() {
  return [
    {
      id: "1",
      image: images.goatPortrait,
      age: "18–24 months",
      weight: "28–32 kg",
      healthStatus: "Excellent" as const,
      vaccinationStatus: "Fully Vaccinated" as const,
      featured: true,
    },
    {
      id: "2",
      image: images.goatClose,
      age: "14–18 months",
      weight: "24–28 kg",
      healthStatus: "Excellent" as const,
      vaccinationStatus: "Fully Vaccinated" as const,
      featured: true,
    },
    {
      id: "3",
      image: images.goatYoung,
      age: "10–14 months",
      weight: "20–25 kg",
      healthStatus: "Good" as const,
      vaccinationStatus: "Fully Vaccinated" as const,
      featured: true,
    },
    {
      id: "4",
      image: images.goatGrazing,
      age: "8–12 months",
      weight: "18–22 kg",
      healthStatus: "Excellent" as const,
      vaccinationStatus: "Fully Vaccinated" as const,
      featured: false,
    },
    {
      id: "5",
      image: images.goatField,
      age: "24+ months",
      weight: "30–35 kg",
      healthStatus: "Excellent" as const,
      vaccinationStatus: "Fully Vaccinated" as const,
      featured: false,
    },
    {
      id: "6",
      image: images.goatBrown,
      age: "12–16 months",
      weight: "22–26 kg",
      healthStatus: "Good" as const,
      vaccinationStatus: "Fully Vaccinated" as const,
      featured: false,
    },
    {
      id: "7",
      image: images.goatFarm,
      age: "16–20 months",
      weight: "26–30 kg",
      healthStatus: "Excellent" as const,
      vaccinationStatus: "Fully Vaccinated" as const,
      featured: false,
    },
    {
      id: "8",
      image: images.goatWhite,
      age: "18–22 months",
      weight: "24–29 kg",
      healthStatus: "Excellent" as const,
      vaccinationStatus: "Fully Vaccinated" as const,
      featured: false,
    },
  ];
}
