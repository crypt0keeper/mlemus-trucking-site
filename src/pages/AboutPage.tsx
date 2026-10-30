import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import TeamSection from "@/components/TeamSection";

const AboutPage = () => (
  <>
    <Navbar />
    <main className="pt-24 lg:pt-28">
      {/* Hero */}
      <section className="bg-secondary section-padding">
        <div className="container-max">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">About Us</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-primary-foreground mb-6">
            Built on <span className="text-primary">Trust</span> &amp; Hard Work
          </h1>
          <p className="text-lg text-metallic-light max-w-2xl">
            M Lemus Trucking Inc. is a family-owned and operated carrier headquartered in Port Hueneme, California — minutes from the Port of Hueneme and in the heart of Ventura County's produce industry.
          </p>
        </div>
      </section>

      <section className="bg-background px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="container-max">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-foreground mb-5">Our Story</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 text-muted-foreground leading-relaxed">
            <p>For over 20 years, M Lemus Trucking has provided honest, reliable freight service to growers, shippers, and brokers of every size. Along the way we've hauled for some of the biggest names in produce, including Mission Produce, Chiquita, Del Monte, Dole, and Lineage, both direct and through our broker partners.</p>
            <p>We understand that in this industry, timing is everything. Our drivers are experienced, our equipment is maintained to the highest standards, and our communication is always responsive.</p>
            <p>Whether it's a reefer load of fresh produce or a container pull from the port, we treat every shipment like our reputation depends on it — because it does.</p>
          </div>
        </div>
      </section>

      <TeamSection />

      <CTABanner />
    </main>
    <Footer />
  </>
);

export default AboutPage;
