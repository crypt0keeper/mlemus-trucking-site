import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { CheckCircle } from "lucide-react";
import reeferImg from "@/assets/reefer-loading.jpg";

const AboutPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-max">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">About Us</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-primary-foreground mb-6">
            Built on <span className="text-primary">Trust</span> &amp; Hard Work
          </h1>
          <p className="text-lg text-metallic-light max-w-2xl">
            M Lemus Trucking Inc. is a family-owned and operated carrier headquartered in Oxnard, California — right at the doorstep of Port Hueneme and the heart of Ventura County's produce industry.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with the mission to provide honest, reliable freight services, M Lemus Trucking has grown through strong relationships with some of the biggest names in produce — including Taylor Farms, Chiquita, and Del Monte.
              </p>
              <p>
                We understand that in this industry, timing is everything. Our drivers are experienced, our equipment is maintained to the highest standards, and our communication is always responsive.
              </p>
              <p>
                Whether it's a reefer load of fresh avocados heading north or a container pull from the port, we treat every shipment like our reputation depends on it — because it does.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "TWIC Certified — Port Access Ready",
                "Experience with Taylor Farms, Chiquita & Del Monte",
                "California-focused operations for faster transit",
                "Available for dedicated lane partnerships",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={reeferImg} alt="Refrigerated trailer being loaded with produce" loading="lazy" width={1280} height={720} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
    <Footer />
  </>
);

export default AboutPage;
