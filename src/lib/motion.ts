/** SSR-safe Framer Motion defaults — avoids opacity:0 on server HTML. */

export const viewFade = {
  initial: false as const,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.5 },
};

export const viewFadeUp = {
  ...viewFade,
  whileInView: { opacity: 1, y: 0 },
};

export const viewScale = {
  initial: false as const,
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.45 },
};
