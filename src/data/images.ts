/**
 * Verified Pexels photography — each ID was checked to show goats or farm scenes.
 * Do not swap IDs without re-verifying; many numeric IDs resolve to unrelated photos.
 */

type PexelsPhoto = {
  id: number;
  /** Use when the default `pexels-photo-{id}` filename does not resolve correctly */
  slug?: string;
};

function pexels({ id, slug }: PexelsPhoto, width = 800) {
  const file = slug ?? `pexels-photo-${id}`;
  return `https://images.pexels.com/photos/${id}/${file}.jpeg?auto=compress&cs=tinysrgb&w=${width}&fit=crop`;
}

export const images = {
  goatHerd: pexels({ id: 17567649 }),
  goatClose: pexels({ id: 599042 }),
  goatPortrait: pexels({
    id: 86594,
    slug: "goat-animal-horns-black-and-white-86594",
  }),
  goatField: pexels({
    id: 37910,
    slug: "billy-goat-goat-goatee-animal-37910",
  }),
  goatYoung: pexels({ id: 326929 }),
  goatGrazing: pexels({ id: 7391716 }),
  goatFarm: pexels({ id: 17567649 }),
  goatGroup: pexels({ id: 326929 }),
  goatBrown: pexels({ id: 8391253 }),
  goatWhite: pexels({ id: 58914 }),

  farmLandscape: pexels({ id: 17567649 }),
  farmPasture: pexels({ id: 7391716 }),

  hero: pexels({ id: 17567649 }, 1920),
  goatsPageHero: pexels({ id: 599042 }, 1920),
  breedingPageHero: pexels(
    { id: 86594, slug: "goat-animal-horns-black-and-white-86594" },
    1920
  ),
  pageBg: pexels({ id: 17567649 }, 1920),
  pageBgAlt: pexels({ id: 326929 }, 1920),

  blogFeeding: pexels({ id: 8391253 }, 1200),
  blogHealth: pexels({ id: 7391716 }, 1200),
  blogBreeding: pexels(
    { id: 86594, slug: "goat-animal-horns-black-and-white-86594" },
    1200
  ),
  blogGuide: pexels({ id: 17567649 }, 1200),
} as const;
