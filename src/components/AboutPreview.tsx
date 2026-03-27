import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Family-owned & operated",
  "Based in Oxnard, California",
  "Trusted by Taylor Farms, Chiquita & Del Monte",
  "Dedicated lane partnerships available",
];

const AboutPreview = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">About Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-foreground mb-6">
            California's Trusted <span className="text-primary">Freight Partner</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            M Lemus Trucking Inc. is a family-owned carrier based in Oxnard, California. With deep roots in produce logistics and port operations, we deliver consistent, reliable freight services across the state. Our team understands the urgency of time-sensitive freight and treats every load with care.
          </p>
          <ul className="space-y-3 mb-8">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{h}</span>
              </li>
            ))}
          </ul>
          <Link to="/about">
            <Button variant="outline" className="font-heading uppercase tracking-wider">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "CA", label: "Statewide Coverage" },
            { value: "53'", label: "Reefer Trailers" },
            { value: "TWIC", label: "Port Certified" },
            { value: "24/7", label: "Responsive Service" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-secondary text-center p-8 rounded-lg border border-foreground/5"
            >
              <p className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-metallic-light uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
