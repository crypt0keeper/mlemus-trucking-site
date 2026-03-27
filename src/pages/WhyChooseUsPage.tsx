import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Shield, MapPin, Clock, Snowflake, Handshake, Phone } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "TWIC Certified",
    desc: "Our drivers hold Transportation Worker Identification Credentials, giving us unrestricted access to California's major ports — no delays, no hassle.",
  },
  {
    icon: MapPin,
    title: "California-Focused Operations",
    desc: "We know California's roads, ports, and produce hubs inside and out. Local expertise means faster transit times and fewer surprises.",
  },
  {
    icon: Snowflake,
    title: "Reefer Capability",
    desc: "Temperature-controlled 53' trailers maintained to strict standards. Your cold chain stays intact from pickup to delivery.",
  },
  {
    icon: Clock,
    title: "Time-Sensitive Freight Experts",
    desc: "Produce doesn't wait. Neither do we. Our team is built around urgency, reliability, and on-time performance.",
  },
  {
    icon: Handshake,
    title: "Trusted by Industry Leaders",
    desc: "Companies like Taylor Farms, Chiquita, and Del Monte rely on us. That trust is earned through years of consistent, quality service.",
  },
  {
    icon: Phone,
    title: "Responsive Communication",
    desc: "You'll never wonder where your load is. We keep you informed with responsive, straightforward communication every step of the way.",
  },
];

const WhyChooseUsPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="bg-secondary section-padding">
        <div className="container-max">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">Why Choose Us</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-primary-foreground mb-6">
            The M Lemus <span className="text-primary">Advantage</span>
          </h1>
          <p className="text-lg text-metallic-light max-w-2xl">
            When you partner with M Lemus Trucking, you get more than a carrier — you get a team that's invested in your success.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold uppercase text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
    <Footer />
  </>
);

export default WhyChooseUsPage;
