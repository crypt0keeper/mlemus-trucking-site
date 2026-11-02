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
        We run dedicated lanes for both refrigerated (reefer) freight and containers. Whether you need daily reefer runs or weekly container drayage out of the Port of Hueneme, we can set up a consistent lane and schedule for you.
      </p>

      <div className="rounded-lg border border-border bg-secondary p-6 sm:p-8 space-y-3 text-sm sm:text-base text-metallic-light">
        <p><span className="text-primary-foreground font-semibold">Reefer:</span> dedicated lanes, daily runs</p>
        <p><span className="text-primary-foreground font-semibold">Containers:</span> dedicated lanes, drayage out of the Port of Hueneme</p>
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
