interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest py-24 text-white sm:py-32">
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/70" />
        </>
      )}
      <div className="container relative mx-auto px-4">
        <div className="hero-fade-up max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-white/85 sm:text-xl">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
