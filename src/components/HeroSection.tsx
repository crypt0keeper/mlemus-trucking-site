import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="M Lemus Trucking semi-truck on California highway"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
    </div>

    <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            TWIC Certified · Port Access Ready
          </span>
        </div>

        <h1
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground uppercase leading-[1.1] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Reliable Refrigerated &{" "}
          <span className="text-primary">Container Freight</span>{" "}
          Across California
        </h1>

        <p
          className="text-lg sm:text-xl text-metallic-light max-w-xl mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Specializing in port drayage, produce logistics, and cold chain transportation across California.
        </p>

        <p
          className="text-sm text-metallic font-medium uppercase tracking-wider mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          MC# 774696 · USDOT# 2267752 · SCAC: MLFE
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="/contact">
            <Button size="lg" className="font-heading uppercase tracking-wider text-base px-8">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="font-heading uppercase tracking-wider text-base px-8 bg-white text-black border-white hover:bg-gray-100"
            >
              Become a Partner
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
