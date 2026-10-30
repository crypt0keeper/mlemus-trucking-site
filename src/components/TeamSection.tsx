// DRAFT bios — confirm names, titles and bios with Fabian before publishing.
const team = [
  {
    name: "DAD'S NAME",
    title: "Founder & Owner",
    photo: "/team/father.jpg",
    bio: "Started M Lemus Trucking in 2003 and has spent more than 20 years hauling produce and containers across California. He built the company on showing up on time, taking care of the freight, and treating customers and drivers right.",
  },
  {
    name: "Fabian Lemus",
    title: "Co-Owner & Operations",
    photo: "/team/fabian.jpg",
    bio: "Grew up around the trucks and now runs day-to-day operations — dispatch, customer communication, and new business. He works directly with shippers and brokers so every load is planned, tracked, and delivered without surprises.",
  },
];

const TeamSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-max">
      <div className="text-center mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">Our Family</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-primary-foreground">
          The Family Behind <span className="text-primary">the Trucks</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {team.map((p) => (
          <div key={p.photo} className="bg-foreground/5 border border-foreground/10 rounded-lg overflow-hidden flex flex-col">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img src={p.photo} alt={`${p.name}, ${p.title}`} loading="lazy" width={640} height={800} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-2xl font-bold uppercase text-primary-foreground">{p.name}</h3>
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">{p.title}</p>
              <p className="text-metallic-light leading-relaxed">{p.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
