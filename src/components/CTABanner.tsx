import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="bg-primary section-padding">
    <div className="container-max text-center">
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-primary-foreground mb-4">
        Available for Dedicated Lanes &amp; Consistent Freight Partnerships
      </h2>
      <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
        Let's build a reliable freight relationship. Whether you need daily reefer runs or weekly port drayage, we're ready.
      </p>
      <Link to="/contact">
        <Button
          size="lg"
          className="bg-secondary text-primary-foreground hover:bg-secondary/90 font-heading uppercase tracking-wider text-base px-8"
        >
          Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </Link>
    </div>
  </section>
);

export default CTABanner;
