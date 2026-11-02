import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import LinkedInIcon, { LINKEDIN_URL } from "@/components/LinkedInIcon";

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
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="M Lemus Trucking on LinkedIn"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#0A66C2] px-3 py-2 text-sm font-medium text-white hover:bg-[#004182] transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            Follow us on LinkedIn
          </a>
        </div>

        {/* Links */}
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-4">Quick Links</p>
          <ul className="space-y-2">
            {["About", "Services", "Why Choose Us", "Updates", "Contact"].map((l) => (
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
            <li className="flex items-center gap-2">
              <LinkedInIcon className="w-4 h-4 text-primary" />
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>Port Hueneme, CA</span>
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

      <div className="border-t border-foreground/10 mt-10 pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        <img src="/badges/hispanic_american_owned_small_business.svg" alt="Hispanic American-Owned Small Business" loading="lazy" width={160} height={160} className="w-36 h-36 sm:w-40 sm:h-40" />
        <img src="/badges/self_certified_small_disadvantaged_business.svg" alt="Self-Certified Small Disadvantaged Business" loading="lazy" width={160} height={160} className="w-36 h-36 sm:w-40 sm:h-40" />
        <img src="/badges/active_in_sam_gov.svg" alt="Active in SAM.gov" loading="lazy" width={160} height={160} className="w-36 h-36 sm:w-40 sm:h-40" />
      </div>

      <div className="mt-8 pt-6 border-t border-foreground/10 text-center text-xs text-metallic">
        <p className="mb-3 leading-relaxed">
          Hispanic American-owned small business · Self-certified SDB · Active in SAM.gov · UEI MR89UCS43FZ5 · CAGE 13BW0 · MC 774696 · USDOT 2267752
        </p>
        © {new Date().getFullYear()} M Lemus Trucking Inc. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
