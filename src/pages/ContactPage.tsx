import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="bg-secondary section-padding">
        <div className="container-max">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">Contact Us</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-primary-foreground mb-6">
            Let's <span className="text-primary">Talk Freight</span>
          </h1>
          <p className="text-lg text-metallic-light max-w-2xl">
            Ready to move your freight? Have questions about our services? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase text-foreground mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold uppercase text-foreground mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <a href="tel:805-815-7604" className="text-foreground font-medium hover:text-primary transition-colors">805-815-7604</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <a href="mailto:contracts@mlemustrucking.com" className="text-foreground font-medium hover:text-primary transition-colors">contracts@mlemustrucking.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-foreground font-medium">Oxnard / Port Hueneme, CA</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-6 border border-foreground/10">
              <h3 className="font-heading text-sm font-semibold uppercase text-primary-foreground mb-3">Carrier Credentials</h3>
              <ul className="space-y-2 text-sm text-metallic">
                <li><span className="text-metallic-light">MC#:</span> 774696</li>
                <li><span className="text-metallic-light">USDOT#:</span> 2267752</li>
                <li><span className="text-metallic-light">SCAC:</span> MLFE</li>
                <li><span className="text-metallic-light">TWIC:</span> Certified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactPage;
