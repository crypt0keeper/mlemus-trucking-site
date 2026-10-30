import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import LogoCarousel from "@/components/LogoCarousel";
import LanesSection from "@/components/LanesSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <LogoCarousel />
    <AboutPreview />
    <ServicesPreview />
    <LanesSection />
    <CTABanner />
    <Footer />
  </>
);

export default Index;
