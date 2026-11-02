import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Set this to the PDF path (e.g. "/M-Lemus-Capability-Statement.pdf") only after Fabian approves the file
// and drops it in /public. Until then the button stays inactive.
const CAPABILITY_STATEMENT_URL = "";

const GovernmentSection = () => (
  <section id="government" className="section-padding bg-background border-t border-border scroll-mt-24 lg:scroll-mt-28">
    <div className="container-max max-w-4xl">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-foreground mb-6">
        Government &amp; <span className="text-primary">Prime Contractors</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        M Lemus Trucking Inc. is a Hispanic American-owned small business and self-certified Small Disadvantaged Business (SDB), registered and active in SAM.gov. Based in Port Hueneme, we provide refrigerated and reefer container transportation throughout California.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8 -mt-4">
        We are available for government contracts, and our drivers hold TWIC credentials for secure port and facility access.
      </p>

      <div className="rounded-lg border border-border bg-secondary p-6 sm:p-8 space-y-3 text-sm sm:text-base text-metallic-light">
        <p><span className="text-primary-foreground font-semibold">UEI:</span> MR89UCS43FZ5 &nbsp;|&nbsp; <span className="text-primary-foreground font-semibold">CAGE:</span> 13BW0</p>
        <p><span className="text-primary-foreground font-semibold">NAICS:</span> 484121 (primary), 484110, 484122, 484220, 484230 &nbsp;|&nbsp; <span className="text-primary-foreground font-semibold">PSC:</span> V112</p>
        <p><span className="text-primary-foreground font-semibold">MC:</span> 774696 &nbsp;|&nbsp; <span className="text-primary-foreground font-semibold">USDOT:</span> 2267752 &nbsp;|&nbsp; <span className="text-primary-foreground font-semibold">SCAC:</span> MLFE</p>
        <p>Listed in the SAM.gov Disaster Response Registry</p>
        <p>
          <span className="text-primary-foreground font-semibold">Contact:</span>{" "}
          <a href="mailto:Contracts@MLemusTrucking.com" className="text-primary hover:underline">Contracts@MLemusTrucking.com</a>
        </p>
      </div>

      {CAPABILITY_STATEMENT_URL && (
        <div className="mt-8">
          <a href={CAPABILITY_STATEMENT_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="font-heading uppercase tracking-wider">
              <FileDown className="w-5 h-5 mr-2" />
              Download Capability Statement (PDF)
            </Button>
          </a>
        </div>
      )}
    </div>
  </section>
);

export default GovernmentSection;
