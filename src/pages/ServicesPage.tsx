import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Snowflake, Container, Truck, Leaf } from "lucide-react";
import portImg from "@/assets/port-operations.jpg";

const servicesData = [
  {
    icon: Container,
    title: "Container Drayage",
    desc: "We provide reliable container drayage services from Port of Hueneme, Port of Los Angeles, and Port of Long Beach. Our TWIC-certified drivers ensure seamless port access, quick turnaround times, and efficient delivery to your warehouse or distribution center.",
  },
  {
    icon: Snowflake,
    title: "Refrigerated Freight",
    desc: "Our fleet of 53' reefer trailers is equipped to handle all temperature-sensitive shipments. From fresh produce to dairy and frozen goods, we maintain precise temperature control throughout transit to protect your cargo's integrity.",
  },
  {
    icon: Truck,
    title: "Power-Only Transportation",
    desc: "Need a driver and tractor without the trailer? Our power-only service gives you the flexibility to move your trailers on your schedule. Ideal for overflow, surge capacity, or when your fleet needs extra support.",
  },
  {
    icon: Leaf,
    title: "Produce & Cold Chain Logistics",
    desc: "With years of experience serving major growers and distributors like Taylor Farms, Chiquita, and Del Monte, we understand the urgency of produce logistics. We keep your cold chain intact from harvest to delivery across California.",
  },
];

const ServicesPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="relative">
        <img src={portImg} alt="Port operations" loading="lazy" width={1280} height={720} className="w-full h-64 sm:h-80 object-cover" />
        <div className="absolute inset-0 bg-secondary/85 flex items-center">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">Our Services</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-primary-foreground">
              Freight Solutions <span className="text-primary">That Deliver</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max space-y-12">
          {servicesData.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-[auto_1fr] gap-6 items-start p-8 rounded-lg border border-border hover:border-primary/30 transition-colors ${
                i % 2 === 0 ? "" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold uppercase text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
    <Footer />
  </>
);

export default ServicesPage;
