
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Tickets from "@/components/Tickets";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Tickets />
      <Sponsors />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
