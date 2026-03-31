import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import CampaignUpdatesSection from "./components/CampaignUpdatesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProposalSection from "./components/ProposalSection";
import ServicesSection from "./components/ServicesSection";
import ShareButton from "./components/ShareButton";
import VolunteerSection from "./components/VolunteerSection";
import WorkingStatesSection from "./components/WorkingStatesSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkingStatesSection />
        <CampaignUpdatesSection />
        <GallerySection />
        <VolunteerSection />
        <ContactSection />
        <ProposalSection />
      </main>
      <Footer />
      <ShareButton />
      <Toaster richColors position="top-right" />
    </div>
  );
}
