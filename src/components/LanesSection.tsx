import { Link } from "react-router-dom";
import { MapPin, Snowflake, Container, Route } from "lucide-react";
import { Button } from "@/components/ui/button";

const regions = [
  { name: "Port Hueneme & Oxnard", note: "Home base · container drayage · produce pickups" },
  { name: "Central Valley", note: "Tulare, Delano, Earlimart & cold storage hubs" },
  { name: "Inland Empire", note: "Mira Loma, San Bernardino, Corona & DCs" },
  { name: "Los Angeles & Orange County", note: "Warehouses, cold storage & distribution" },
  { name: "San Diego & Southern California", note: "Quoted by lane" },
  { name: "Northern California", note: "Quoted by lane" },
];

const capacity = [
  { icon: Snowflake, label: "Reefer capacity daily" },
  { icon: Container, label: "Container capacity daily" },
  { icon: Route, label: "Dedicated lanes available" },
];

const LanesSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-max">
      <div className="text-center mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">Lanes &amp; Capacity</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-primary-foreground mb-4">
          All of <span className="text-primary">California</span>
        </h2>
        <p className="text-metallic-light max-w-2xl mx-auto">
          We run lanes up and down the state. Every lane is quoted on its own, so send us the pickup, delivery, and how often it moves.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {regions.map((r) => (
          <div key={r.name} className="flex items-start gap-3 bg-foreground/5 border border-foreground/10 rounded-lg p-5">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading font-semibold uppercase text-primary-foreground">{r.name}</p>
              <p className="text-sm text-metallic-light">{r.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {capacity.map((c) => (
          <span key={c.label} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-sm font-medium text-primary-foreground">
            <c.icon className="w-4 h-4 text-primary" />
            {c.label}
          </span>
        ))}
      </div>

      <div className="text-center">
        <Link to="/contact">
          <Button size="lg" className="font-heading uppercase tracking-wider">Get a Lane Quote</Button>
        </Link>
      </div>
    </div>
  </section>
);

export default LanesSection;
