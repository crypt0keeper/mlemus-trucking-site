import { Link } from "react-router-dom";
import { Snowflake, Container, Truck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Container,
    title: "Container Drayage",
    desc: "Port of Hueneme, LA & Long Beach. TWIC-certified drivers for seamless port access and fast container turnaround.",
  },
  {
    icon: Snowflake,
    title: "Refrigerated Freight",
    desc: "53' reefer trailers equipped for produce, dairy, and cold chain shipments. Temperature-controlled from dock to door.",
  },
  {
    icon: Truck,
    title: "Power-Only Transport",
    desc: "Flexible power-only solutions. We supply the truck and driver — you provide the trailer. Ideal for overflow and surge capacity.",
  },
  {
    icon: Leaf,
    title: "Produce & Cold Chain",
    desc: "Experienced with major growers and distributors. Time-sensitive produce logistics across all of California.",
  },
];

const ServicesPreview = () => (
  <section className="section-padding bg-secondary">
    <div className="container-max">
      <div className="text-center mb-14">
        <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">Our Services</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-primary-foreground">
          What We <span className="text-primary">Haul</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase text-primary-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-metallic-light leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services">
          <Button variant="default" className="font-heading uppercase tracking-wider">
            View All Services
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesPreview;
