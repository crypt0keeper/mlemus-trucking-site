// Companies we work or have worked with.
// To show a real logo: drop the file in public/logos/ and set `logo` (e.g. "/logos/mission-produce.png").
// Without a logo file, the company name shows as text.
const companies: { name: string; logo?: string }[] = [
  { name: "Mission Produce" },
  { name: "Chiquita" },
  { name: "Del Monte" },
  { name: "Dole" },
  { name: "Lineage" },
];

const Item = ({ name, logo }: { name: string; logo?: string }) => (
  <div className="flex items-center justify-center h-16 px-8 sm:px-12 flex-shrink-0">
    {logo ? (
      <img src={logo} alt={name} loading="lazy" className="h-10 sm:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition" />
    ) : (
      <span className="font-heading text-xl sm:text-2xl font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
        {name}
      </span>
    )}
  </div>
);

const LogoCarousel = () => (
  <section className="py-12 sm:py-16 bg-background border-y border-border" aria-label="Companies we work with">
    <p className="text-center text-sm font-medium uppercase tracking-widest text-primary mb-8 px-4">
      Shippers we've hauled for
    </p>
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
        {[...companies, ...companies].map((c, i) => (
          <Item key={i} {...c} />
        ))}
      </div>
    </div>
  </section>
);

export default LogoCarousel;
