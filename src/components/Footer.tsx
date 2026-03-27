import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-foreground/10">
    <div className="container-max px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <p className="font-heading text-xl font-bold text-primary-foreground uppercase mb-4">
            M Lemus <span className="text-primary">Trucking</span>
          </p>
          <p className="text-sm text-metallic leading-relaxed">
            Family-owned California carrier specializing in refrigerated freight, container drayage, and produce logistics.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-4">Quick Links</p>
          <ul className="space-y-2">
            {["About", "Services", "Why Choose Us", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={`/${l.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm text-metallic hover:text-primary transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-metallic">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:805-815-7604" className="hover:text-primary transition-colors">805-815-7604</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:contracts@mlemustrucking.com" className="hover:text-primary transition-colors">contracts@mlemustrucking.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>Oxnard / Port Hueneme, CA</span>
            </li>
          </ul>
        </div>

        {/* Credentials */}
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-4">Credentials</p>
          <ul className="space-y-2 text-sm text-metallic">
            <li>MC# 774696</li>
            <li>USDOT# 2267752</li>
            <li>SCAC: MLFE</li>
            <li>TWIC Certified</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-foreground/10 mt-10 pt-6 text-center text-xs text-metallic">
        © {new Date().getFullYear()} M Lemus Trucking Inc. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
