import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import LinkedInIcon, { LINKEDIN_URL } from "@/components/LinkedInIcon";

// LinkedIn posts shown on this page, newest first.
// For each post: on LinkedIn, tap ••• → "Embed this post" and copy the link inside src="...",
// e.g. "https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890".
const posts: { embedUrl: string; title?: string }[] = [];

const UpdatesPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="bg-secondary section-padding">
        <div className="container-max">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">Updates</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-primary-foreground mb-6">
            From the <span className="text-primary">Road</span>
          </h1>
          <p className="text-lg text-metallic-light max-w-2xl mb-8">
            News, new lanes, and what's happening at M Lemus Trucking.
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#0A66C2] px-5 py-3 font-heading uppercase tracking-wider text-white hover:bg-[#004182] transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
            Follow us on LinkedIn
          </a>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          {posts.length === 0 ? (
            <div className="max-w-xl mx-auto text-center rounded-lg border border-border p-10">
              <LinkedInIcon className="w-10 h-10 text-[#0A66C2] mx-auto mb-4" />
              <h2 className="font-heading text-2xl font-bold uppercase text-foreground mb-2">More coming soon</h2>
              <p className="text-muted-foreground mb-6">
                We share company news and updates on LinkedIn. Follow along there for the latest.
              </p>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] font-semibold hover:underline">
                View our LinkedIn page →
              </a>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 justify-items-center">
              {posts.map((p) => (
                <iframe
                  key={p.embedUrl}
                  src={p.embedUrl}
                  title={p.title ?? "M Lemus Trucking LinkedIn post"}
                  loading="lazy"
                  className="w-full max-w-[504px] h-[600px] rounded-lg border border-border bg-white"
                  allowFullScreen
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </main>
    <Footer />
  </>
);

export default UpdatesPage;
