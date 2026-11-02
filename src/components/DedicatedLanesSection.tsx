import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DedicatedLanesSection = () => (
  <section id="dedicated-lanes" className="section-padding bg-background border-t border-border">
    <div className="container-max max-w-4xl">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-foreground mb-6">
        Available for <span className="text-primary">Dedicated Lanes</span> &amp; Consistent Freight Partnerships
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        We offer dedicated lanes for both refrigerated (reefer) freight and containers. Sign a contract with us for the lane you need, and we’ll lock in the capacity, the schedule, and the rate, so your freight is covered every time.
      </p>

      <div className="rounded-lg border border-border bg-secondary p-6 sm:p-8 space-y-3 text-sm sm:text-base text-metallic-light">
        <p><span className="text-primary-foreground font-semibold">Reefer:</span> dedicated lanes under contract for 53' reefer trailers, with temperature-controlled service for produce and other cold chain freight.</p>
        <p><span className="text-primary-foreground font-semibold">Containers:</span> dedicated lanes under contract for container drayage, including refrigerated containers, with TWIC-certified drivers for port access.</p>
      </div>

      <div className="mt-8">
        <Link to="/contact">
          <Button size="lg" className="font-heading uppercase tracking-wider">
            Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default DedicatedLanesSection;
