const team = [
  {
    name: "Martin Lemus",
    title: "Owner",
    photo: "/team/father.jpg",
    bio: "Before Martin ever drove a truck, he spent decades in the fields harvesting fruits and vegetables, so he knows produce long before it's loaded. He has more than 20 years of experience hauling produce and containers, and he's a familiar face at the Port of Hueneme. His experience, work ethic, and name are what M Lemus Trucking is built on.",
  },
  {
    name: "Fabian Lemus",
    title: "Co-Owner",
    photo: "/team/fabian.jpg",
    bio: "Fabian earned his business degree from CSU Channel Islands and brings a background in financial management and contract oversight to the family business. He handles dispatch, customer communication, technology, and new business, and is building the systems that keep every load organized from booking to billing. His father has always been his biggest mentor.",
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
